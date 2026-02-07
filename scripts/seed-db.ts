/**
 * Database Seeding Script for QR Transfer
 *
 * This script seeds the Firebase emulators with test data including:
 * - Test user account
 * - Sample bank accounts
 * - Shareable accounts with tokens
 *
 * Usage: npm run seed:db
 */

import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  connectFirestoreEmulator,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';

// Firebase configuration for emulators
const firebaseConfig = {
  apiKey: 'demo-api-key',
  authDomain: 'demo-project.firebaseapp.com',
  projectId: 'qr-transfers',
  storageBucket: 'demo-project.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef',
};

// Test user credentials
const TEST_USER = {
  email: 'test@qr-transfers.com',
  password: 'TestUser123!',
  displayName: 'Test User',
};

// Admin user credentials (for creating shareable links)
const ADMIN_USER = {
  email: 'admin@qr-transfers.com',
  password: 'AdminUser123!',
  displayName: 'Admin User',
};

// Sample bank accounts data
const SAMPLE_ACCOUNTS = [
  {
    fullName: 'Juan Pérez González',
    rut: '12345678-9',
    bankOrPlatform: 'Banco de Chile',
    accountType: 'Cuenta Vista',
    accountNumber: '1234567890',
    email: 'juan.perez@example.com',
  },
  {
    fullName: 'María Teresa Rodríguez',
    rut: '98765432-1',
    bankOrPlatform: 'Banco Estado',
    accountType: 'Cuenta RUT',
    accountNumber: '987654321',
    email: 'maria.rodriguez@example.com',
  },
  {
    fullName: 'Carlos Andrés Muñoz',
    rut: '11223344-5',
    bankOrPlatform: 'Mercado Pago',
    accountType: 'Billetera Digital',
    accountNumber: '11223344',
    email: 'carlos.munoz@example.com',
  },
  {
    fullName: 'Ana Sofía Contreras',
    rut: '55667788-9',
    bankOrPlatform: 'Banco Santander',
    accountType: 'Cuenta Corriente',
    accountNumber: '5566778899',
    email: 'ana.contreras@example.com',
  },
];

// Shareable accounts (for cash payment QR codes)
const SHAREABLE_ACCOUNTS = [
  {
    fullName: 'Pedro Soto Vega',
    rut: '22334455-6',
    bankOrPlatform: 'Banco BCI',
    accountType: 'Cuenta Vista',
    accountNumber: '2233445566',
    email: 'pedro.soto@example.com',
    token: 'demo-token-001',
  },
  {
    fullName: 'Laura Díaz Fuentes',
    rut: '99887766-5',
    bankOrPlatform: 'Tenpo',
    accountType: 'Billetera Digital',
    accountNumber: '99887766',
    email: 'laura.diaz@example.com',
    token: 'demo-token-002',
  },
];

async function seedDatabase() {
  console.log('🌱 Starting database seeding...\n');

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Connect to emulators
  try {
    connectAuthEmulator(auth, 'http://localhost:9101', { disableWarnings: true });
    connectFirestoreEmulator(db, 'localhost', 8082);
    console.log('✅ Connected to Firebase emulators\n');
  } catch (error) {
    console.log('⚠️  Already connected to emulators\n');
  }

  try {
    // 1. Create test user
    console.log('👤 Creating test user...');
    let testUserUid: string;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        TEST_USER.email,
        TEST_USER.password,
      );
      testUserUid = userCredential.user.uid;
      console.log(`   ✓ Test user created: ${TEST_USER.email}`);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log(`   ⚠️  User already exists, signing in...`);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          TEST_USER.email,
          TEST_USER.password,
        );
        testUserUid = userCredential.user.uid;
      } else {
        throw error;
      }
    }

    // 2. Create admin user
    console.log('\n👤 Creating admin user...');
    let adminUserUid: string;
    try {
      const adminCredential = await createUserWithEmailAndPassword(
        auth,
        ADMIN_USER.email,
        ADMIN_USER.password,
      );
      adminUserUid = adminCredential.user.uid;
      console.log(`   ✓ Admin user created: ${ADMIN_USER.email}`);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log(`   ⚠️  Admin already exists, signing in...`);
        const adminCredential = await signInWithEmailAndPassword(
          auth,
          ADMIN_USER.email,
          ADMIN_USER.password,
        );
        adminUserUid = adminCredential.user.uid;
      } else {
        throw error;
      }
    }

    // 3. Seed bank accounts for test user
    console.log('\n💳 Creating sample bank accounts...');
    const accountsRef = collection(db, 'users', testUserUid, 'bankAccounts');

    for (const account of SAMPLE_ACCOUNTS) {
      const docRef = await addDoc(accountsRef, {
        ...account,
        userId: testUserUid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      console.log(`   ✓ Created account: ${account.fullName} (${docRef.id})`);
    }

    // 4. Seed shareable accounts
    console.log('\n🔗 Creating shareable accounts...');
    const shareableRef = collection(db, 'shareableAccounts');

    for (const account of SHAREABLE_ACCOUNTS) {
      const docRef = await addDoc(shareableRef, {
        ...account,
        createdBy: adminUserUid,
        createdAt: serverTimestamp(),
        claimed: false,
      });
      console.log(`   ✓ Created shareable: ${account.fullName}`);
      console.log(`     Token: ${account.token}`);
      console.log(`     URL: http://localhost:5173/claim/${account.token}`);
    }

    // Success summary
    console.log('\n✅ Database seeding completed successfully!\n');
    console.log('📊 Summary:');
    console.log(`   - Test users: 2`);
    console.log(`   - Bank accounts: ${SAMPLE_ACCOUNTS.length}`);
    console.log(`   - Shareable accounts: ${SHAREABLE_ACCOUNTS.length}\n`);
    console.log('🔐 Test Credentials:');
    console.log(`   Regular User: ${TEST_USER.email} / ${TEST_USER.password}`);
    console.log(`   Admin User: ${ADMIN_USER.email} / ${ADMIN_USER.password}\n`);
    console.log('🌐 Access the app at: http://localhost:5173');
    console.log('🎨 Firebase UI at: http://localhost:4002\n');

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();
