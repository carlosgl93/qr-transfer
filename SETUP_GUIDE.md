# QR Transfer - Quick Setup Guide

## Automatic Setup (Recommended)

Run the setup script in your Conductor workspace:

```bash
./setup.sh
```

This will automatically:
1. ✅ Install all dependencies
2. ✅ Create `.env` file with Firebase config
3. ✅ Start Firebase emulators
4. ✅ Seed test data
5. ✅ Start development server

## What You Get

After setup completes, you'll have:

| Service | URL | Description |
|---------|-----|-------------|
| **Dev Server** | http://localhost:5173 | Main application |
| **Firebase UI** | http://localhost:4002 | Emulator management |
| **Firestore** | http://localhost:8082 | Database |
| **Auth** | http://localhost:9101 | Authentication |

## Test Accounts

### Regular User
- **Email**: test@qr-transfers.com
- **Password**: TestUser123!
- **Accounts**: 4 sample bank accounts pre-loaded

### Admin User
- **Email**: admin@qr-transfers.com  
- **Password**: AdminUser123!
- **Can**: Create shareable QR links

## Shareable QR Codes (Pre-seeded)

Try these test links:
- http://localhost:5173/claim/demo-token-001
- http://localhost:5173/claim/demo-token-002

## Manual Setup (If Needed)

If you prefer manual control:

```bash
# 1. Install dependencies
pnpm install

# 2. Create .env file
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

# 3. Start emulators in background
pnpm run emulators > emulators.log 2>&1 &

# 4. Wait for emulators to start
sleep 10

# 5. Seed test data
pnpm run seed:db

# 6. Start dev server
ppnpm dev
```

## Port Configuration

Custom ports to avoid conflicts with other projects:

| Emulator | Port |
|----------|------|
| Firestore | 8082 |
| Auth | 9101 |
| Functions | 5003 |
| UI | 4002 |

## Troubleshooting

### Ports Already in Use

```bash
# Check what's using the ports
lsof -i :8082
lsof -i :9101
lsof -i :4002

# Kill processes if needed
kill -9 <PID>
```

### Emulators Not Starting

```bash
# Check emulator logs
tail -f emulators.log

# Restart emulators
pkill -f firebase
pnpm run emulators > emulators.log 2>&1 &
```

### Seed Script Failing

```bash
# Make sure emulators are running first
pnpm run emulators > emulators.log 2>&1 &
sleep 10
pnpm run seed:db
```

## Next Steps

1. **Login**: Go to http://localhost:5173/login
2. **Test User**: Use `test@qr-transfers.com` / `TestUser123!`
3. **View Dashboard**: See pre-loaded bank accounts
4. **Test Payment Flow**: Add a new account (will redirect to Mercado Pago)
5. **Try Admin Mode**: Login with `admin@qr-transfers.com` to create shareable links

## Available Commands

```bash
ppnpm dev          # Start dev server
pnpm run emulators    # Start Firebase emulators
pnpm run seed:db      # Seed test data
ppnpm build        # Build for production
pnpm run lint:check   # Run linter
pnpm run test:unit    # Run unit tests
```

## Documentation

- **Full Project Guide**: See `AGENTS.md`
- **Payment Integration**: See `.context/mercado-pago-integration.md`
- **Firebase Console**: https://console.firebase.google.com/project/qr-transfers

---

**Need Help?** Check `AGENTS.md` for detailed documentation.
