#!/bin/bash

# QR Transfer - Workspace Setup Script
# This script runs automatically when a new Conductor workspace is created

set -e  # Exit on error

echo "🚀 Setting up QR Transfer workspace..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# 2. Create .env file with Firebase configuration
echo "🔧 Creating .env file..."
cat > .env << 'ENVEOF'
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
ENVEOF

# 3. Start Firebase emulators in background
echo "🔥 Starting Firebase emulators..."
echo "   - Firestore: http://localhost:8082"
echo "   - Auth: http://localhost:9101"
echo "   - Functions: http://localhost:5003"
echo "   - UI: http://localhost:4002"

pnpm run emulators > emulators.log 2>&1 &
EMULATOR_PID=$!
echo "Emulators started with PID: $EMULATOR_PID"

# 4. Wait for emulators to be ready
echo "⏳ Waiting for emulators to start..."
sleep 10

# 5. Seed the database
echo "🌱 Seeding database with test data..."
pnpm run seed:db

# 6. Start development server
echo "✅ Setup complete! Starting dev server..."
echo ""
echo "🎉 Workspace ready!"
echo "   - Dev server: http://localhost:5173"
echo "   - Firebase UI: http://localhost:4002"
echo "   - Test user: test@qr-transfers.com / TestUser123!"
echo ""

pnpm dev
