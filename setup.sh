#!/bin/bash

# QR Transfers Setup Script
# This script initializes the project with dependencies and environment configuration

set -e  # Exit on any error

echo "🚀 Starting QR Transfers setup..."

# Step 1: Install dependencies
echo "📦 Installing dependencies with pnpm..."
pnpm i

# Step 2: Create .env file
echo "⚙️  Creating .env file..."
cat > .env << 'EOF'
# Local environment variables
# This file is ignored by git for security

# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyDyPocH5O7uwMRBRa4yoei_SX_IQnYdaZ0
VITE_FIREBASE_AUTH_DOMAIN=qr-transfers.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=qr-transfers
VITE_FIREBASE_STORAGE_BUCKET=qr-transfers.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=208871776
VITE_FIREBASE_APP_ID=1:208871776:web:1b91c71aba571b000d7e05
VITE_FIREBASE_MEASUREMENT_ID=G-D8L18HJ2V2

# App Domain - Production URL for QR codes
VITE_APP_DOMAIN=https://qr-transfers.web.app
EOF

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  • Review the .env file to ensure all values are correct"
echo "  • Run: pnpm dev (to start development server)"
echo "  • Run: pnpm build (to build for production)"
echo ""