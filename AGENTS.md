# QR Transfer - Agent Guide

## Project Overview

**QR Transfer** is a React + Firebase web application that allows users to generate QR codes for their Chilean bank account information. Users can create, manage, and share their banking details via QR codes for easy transfers.

### Key Features
- 🔐 **User Authentication** (Firebase Auth)
- 💳 **Bank Account Management** (Multiple accounts per user)
- 📱 **QR Code Generation** (On-demand QR creation)
- 🔗 **Shareable Links** (Public QR access via tokens)
- 💰 **Payment Integration** (Mercado Pago payment flow)
- 👨‍💼 **Admin Features** (Create shareable accounts for cash payments)

---

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router v7
- **State Management**: Jotai
- **Backend**: Firebase (Firestore + Auth)
- **QR Generation**: qrcode npm package
- **Forms**: React Hook Form + Zod validation
- **Hosting**: Firebase Hosting

---

## Project Structure

```
phoenix/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ProtectedRoute/  # Auth-protected route wrapper
│   │   └── Loading/         # Loading spinner
│   ├── pages/               # Route pages
│   │   ├── Welcome/         # Landing page
│   │   ├── Login/           # Authentication
│   │   ├── Dashboard/       # User's bank accounts list
│   │   ├── BankAccountForm/ # Add/edit account form
│   │   ├── QRDisplay/       # Display QR for authenticated user
│   │   ├── PaymentSuccess/  # Post-payment QR display
│   │   └── ClaimQR/         # Public shareable QR view
│   ├── routes/              # Route configuration
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Helper functions
│   │   ├── qr-generator.ts  # QR code generation
│   │   ├── clipboard-handler.ts  # Copy/paste utilities
│   │   └── admin.ts         # Admin user detection
│   ├── hooks/               # Custom React hooks
│   ├── config/              # Firebase configuration
│   └── App.tsx              # Main app component
├── scripts/
│   └── seed-db.ts           # Database seeding script
├── firebase.json            # Firebase configuration
├── firestore.rules          # Firestore security rules
├── setup.sh                 # Workspace setup script
└── package.json
```

---

## Getting Started

### Quick Setup (Automatic)
```bash
./setup.sh
```

This will:
1. Install dependencies
2. Create `.env` file
3. Start Firebase emulators
4. Seed test data
5. Start dev server

### Manual Setup
```bash
# Install dependencies
npm install

# Create .env file (see Environment Variables section)
cp .env.example .env

# Start emulators
npm run emulators &

# Wait for emulators, then seed database
npm run seed:db

# Start development server
npm run dev
```

---

## Environment Variables

Create a `.env` file with:

```env
VITE_FIREBASE_API_KEY=AIzaSyDyPocH5O7uwMRBRa4yoei_SX_IQnYdaZ0
VITE_FIREBASE_AUTH_DOMAIN=qr-transfers.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=qr-transfers
VITE_FIREBASE_STORAGE_BUCKET=qr-transfers.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=208871776
VITE_FIREBASE_APP_ID=1:208871776:web:1b91c71aba571b000d7e05
VITE_FIREBASE_MEASUREMENT_ID=G-D8L18HJ2V2
VITE_APP_DOMAIN=https://qr-transfers.web.app
VITE_TEST_USER_EMAIL=test@qr-transfers.com
VITE_TEST_USER_PASSWORD=TestUser123!
```

---

## Firebase Emulator Ports

**Custom ports to avoid conflicts:**

| Service   | Port | URL                          |
|-----------|------|------------------------------|
| Firestore | 8082 | http://localhost:8082        |
| Auth      | 9101 | http://localhost:9101        |
| Functions | 5003 | http://localhost:5003        |
| UI        | 4002 | http://localhost:4002        |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run emulators` | Start Firebase emulators |
| `npm run seed:db` | Seed test data to emulators |
| `npm run lint:check` | Run ESLint |
| `npm run prettier:check` | Check code formatting |
| `npm run ts:check` | TypeScript type checking |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |

---

## Key Routes

| Route | Component | Purpose | Auth Required |
|-------|-----------|---------|---------------|
| `/` | Welcome | Landing page | No |
| `/login` | Login | Sign in/sign up | No |
| `/dashboard` | Dashboard | List user's accounts | Yes |
| `/add-account` | BankAccountForm | Add new account | Yes |
| `/qr/:accountId` | QRDisplay | View QR (own account) | Yes |
| `/payment-success` | PaymentSuccess | Post-payment QR display | Yes |
| `/claim/:token` | ClaimQR | View shareable QR | No |

---

## Data Models

### BankAccount
```typescript
interface BankAccount {
  id?: string;
  userId: string;
  fullName: string;
  rut: string;              // Chilean national ID
  bankOrPlatform: string;   // Bank name or digital wallet
  accountType: string;      // Account type (Vista, Corriente, etc.)
  accountNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### ShareableAccount
```typescript
interface ShareableAccount extends BankAccount {
  token: string;           // Unique token for public access
  createdBy: string;       // Admin user ID
  claimed?: boolean;
  claimedAt?: Date;
}
```

---

## Firestore Structure

```
firestore/
├── users/
│   └── {userId}/
│       └── bankAccounts/
│           └── {accountId}/     # Private bank accounts
│
└── shareableAccounts/           # Public accounts with tokens
    └── {documentId}/
```

---

## User Flows

### 1. Regular User Flow (With Payment)
1. User signs in → `/login`
2. Goes to add account → `/add-account`
3. Fills bank information and submits
4. Account saved to Firestore
5. **Redirected to Mercado Pago** → `https://mpago.la/2cGoFVs`
6. Completes payment
7. **Returns to payment success page** → `/payment-success`
8. QR code displayed with download option

### 2. Admin Flow (Shareable Links)
1. Admin signs in with admin email
2. Goes to add account → `/add-account`
3. Toggles "Crear link compartible" switch
4. Fills bank information and submits
5. Shareable link generated → `/claim/{token}`
6. Admin shares link with customer
7. Customer accesses QR without authentication

### 3. Public QR Access Flow
1. User receives shareable link
2. Opens link → `/claim/{token}`
3. QR code displayed instantly (no login required)
4. Can download or copy bank details

---

## Mercado Pago Integration

### Payment Flow
- **Payment Link**: `https://mpago.la/2cGoFVs`
- **Return URL**: `https://qr-transfers.web.app/payment-success`

### How It Works
1. Account created in Firestore BEFORE payment
2. AccountId stored in sessionStorage
3. User redirected to Mercado Pago
4. After payment, Mercado Pago redirects back
5. Payment success page retrieves accountId from sessionStorage
6. Fetches account data and generates QR

**Note**: Account exists even if payment fails, allowing user to retry.

---

## Admin Users

Admin functionality is determined by email:

```typescript
// src/utils/admin.ts
export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  const adminEmails = ['admin@qr-transfers.com', 'angegumucio@gmail.com'];
  return adminEmails.includes(email.toLowerCase());
}
```

---

## Test Credentials

| User Type | Email | Password |
|-----------|-------|----------|
| Regular User | test@qr-transfers.com | TestUser123! |
| Admin User | admin@qr-transfers.com | AdminUser123! |

---

## QR Code Generation

QR codes are generated client-side using the `qrcode` npm package.

**Format encoded in QR:**
```
Full Name
RUT: {rut}
{bankOrPlatform}
{accountType}
Número de cuenta: {accountNumber}
{email}
```

**Configuration:**
- Size: 400x400px
- Error correction: Medium (M)
- Output: Data URL (base64 PNG)

---

## Development Tips

### Working with Forms
- Forms use React Hook Form + Zod validation
- Schema defined in `{Page}/schema.ts`
- Auto-populate RUT as account number for "Cuenta RUT" and "Banco Estado"
- Clipboard paste feature available for quick data entry

### Working with QR Codes
- QR generation is async
- Generate on-demand (not stored in Firestore)
- Download creates a PNG file
- QR data is human-readable text (not JSON)

### Working with Firebase
- Always use `serverTimestamp()` for dates
- Firestore security rules enforce user ownership
- Use emulators for local development
- Never commit Firebase credentials

### Common Tasks

**Add a new bank to the list:**
```typescript
// src/pages/BankAccountForm/BankAccountForm.tsx
const CHILEAN_BANKS = [
  'Banco de Chile',
  // Add new bank here
];
```

**Change QR code styling:**
```typescript
// src/utils/qr-generator.ts
const qrCodeDataUrl = await QRCode.toDataURL(dataText, {
  width: 400,  // Modify size
  margin: 2,
  color: { dark: '#000000', light: '#FFFFFF' },  // Change colors
});
```

**Add a new admin user:**
```typescript
// src/utils/admin.ts
const adminEmails = ['admin@qr-transfers.com', 'newemail@example.com'];
```

---

## Debugging

### Check Emulator Data
Visit Firebase Emulator UI: http://localhost:4002
- View Firestore collections
- Check Auth users
- Monitor logs

### Common Issues

**Emulators not starting:**
```bash
# Check if ports are in use
lsof -i :8082
lsof -i :9101

# Kill processes if needed
kill -9 <PID>
```

**Seed script failing:**
```bash
# Make sure emulators are running first
npm run emulators &
sleep 5
npm run seed:db
```

**Authentication errors in production:**
- Check Firebase console for authorized domains
- Verify environment variables are set in Firebase Hosting

---

## Deployment

### Build and Deploy
```bash
# Build the app
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Deploy Firestore rules
firebase deploy --only firestore:rules
```

### Production URL
https://qr-transfers.web.app

---

## Security Considerations

### Firestore Rules
- Users can only read/write their own accounts
- Shareable accounts are publicly readable by token
- Auth required for creating accounts

### Environment Variables
- Never commit `.env` files
- Use Firebase Hosting environment config for production
- Keep test credentials separate from production

---

## Recent Changes

### Mercado Pago Payment Integration (Latest)
- Added payment flow before QR generation
- Created `/payment-success` route
- Modified BankAccountForm to redirect to Mercado Pago
- Account created before payment (allows retry on failure)

See `.context/mercado-pago-integration.md` for detailed implementation.

---

## Support & Resources

- **Firebase Console**: https://console.firebase.google.com/project/qr-transfers
- **Mercado Pago Dashboard**: https://www.mercadopago.cl
- **Repository**: (Add your repo URL here)
- **Issues**: Contact project maintainer

---

## License

MIT

---

**Last Updated**: 2026-02-07
**Version**: 1.0.0 (Mercado Pago Integration)
