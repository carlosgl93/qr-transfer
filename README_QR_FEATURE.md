# QR Transfer - Bank Account QR Code Generator

A React PWA application that allows users to create QR codes containing Chilean bank account information. When scanned, the QR code automatically copies the account details to the user's clipboard.

## 🚀 Features

- ✅ **User Authentication**: Email/password and Google sign-in
- ✅ **Bank Account Management**: Create, view, and delete multiple bank accounts
- ✅ **QR Code Generation**: Generate unique QR codes for each account
- ✅ **Automatic Clipboard Copy**: Scan QR → Data copied automatically
- ✅ **Visual Confirmation**: Success/error feedback for clipboard operations
- ✅ **Download & Share**: Download QR as PNG or share via URL
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **PWA Support**: Installable as standalone app

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite 6** for build tooling
- **Firebase**:
  - Authentication (Email/Password + Google)
  - Firestore Database
  - Analytics
- **Material-UI (MUI)** for UI components
- **Jotai** for state management
- **React Hook Form** + **Zod** for form validation
- **qrcode** library for QR generation
- **React Router 7** for navigation
- **PWA** with Workbox

## 📁 Project Structure

```
src/
├── components/
│   ├── Loading/           # Loading spinner component
│   ├── ProtectedRoute/    # Auth wrapper for protected pages
│   └── styled.tsx         # Shared styled components
├── config/
│   ├── firebase.ts        # Firebase initialization
│   └── index.ts           # App configuration
├── hooks/
│   ├── atoms.ts           # Jotai atoms for auth state
│   └── useAuth.ts         # Authentication hook
├── pages/
│   ├── BankAccountForm/   # Form to add bank accounts
│   ├── Dashboard/         # List all user's accounts
│   ├── Login/             # Login/signup page
│   ├── QRDisplay/         # Display QR code for an account
│   ├── ScanLanding/       # Landing page for QR scans
│   └── Welcome/           # Home page
├── routes/
│   └── index.ts           # Route definitions
├── types/
│   └── bank-account.ts    # TypeScript interfaces
└── utils/
    ├── qr-generator.ts        # QR code generation
    └── clipboard-handler.ts   # Clipboard operations
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

The project includes `.env` with Firebase configuration. Update if needed:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id

# App Domain (for QR URLs)
VITE_APP_DOMAIN=http://localhost:5173
```

### 3. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `qr-transfers`
3. Enable Authentication:
   - Email/Password
   - Google Sign-in
4. Create Firestore Database
5. Apply security rules from `firestore.rules`

See [FIRESTORE_SETUP.md](./FIRESTORE_SETUP.md) for detailed instructions.

### 4. Run Development Server

```bash
pnpm dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### 5. Build for Production

```bash
pnpm build
```

### 6. Preview Production Build

```bash
pnpm preview
```

## 🔐 Firebase Security Rules

The app uses two Firestore collections:

1. **`users/{userId}/bankAccounts/{accountId}`** - Private (owner only)
2. **`sharedAccounts/{accountId}`** - Public read (for QR scanning)

Apply the rules from `firestore.rules` to your Firebase project.

## 📱 User Flow

### Creating a QR Code

1. User navigates to the app
2. Logs in or creates an account
3. Clicks "Agregar Cuenta"
4. Fills in Chilean bank details:
   - Full Name (e.g., "Paola Constanza Sepúlveda Zepeda")
   - RUT (e.g., "181055049")
   - Bank/Platform (e.g., "Mercado Pago")
   - Account Type (e.g., "Cuenta Vista")
   - Account Number (e.g., "1031117310")
   - Email (e.g., "constanza.sepz@gmail.com")
5. Saves account → redirects to dashboard
6. Clicks "Ver Código QR" on an account
7. Downloads QR or shares URL

### Scanning a QR Code

1. Someone scans the QR code
2. Opens URL like `https://yourdomain.com/scan?id={accountId}`
3. Data automatically fetches from Firestore
4. Data automatically copies to clipboard
5. Shows success message with checkmark

## 🧪 Testing

### Run Unit Tests

```bash
pnpm test:unit
```

### Run E2E Tests

```bash
pnpm test:e2e
```

## 🚀 Deployment

### Firebase Hosting (Recommended)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize (select Hosting)
firebase init

# Build and deploy
pnpm build
firebase deploy
```

Update `VITE_APP_DOMAIN` in production to your Firebase Hosting URL.

## 🔒 Security Considerations

### Current Implementation

- ✅ Bank accounts stored in user's private collection
- ✅ Duplicate stored in public collection for scanning
- ✅ Firebase Auth required for management pages
- ✅ Public read access for QR scanning (no auth required)

### Production Recommendations

1. **Encryption**: Encrypt sensitive data before storing
2. **Rate Limiting**: Add rate limits on Firestore reads
3. **Content Security Policy**: Add CSP headers
4. **RUT Validation**: Implement Chilean RUT validation algorithm
5. **Analytics**: Track QR scans for security monitoring
6. **Expiration**: Add QR code expiration dates
7. **HTTPS Only**: Enforce HTTPS in production

## 📝 Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm lint:check       # Run ESLint
pnpm prettier:check   # Check code formatting
pnpm ts:check         # TypeScript type checking
pnpm test:unit        # Run Vitest tests
pnpm test:e2e         # Run Playwright tests
pnpm test:e2e:ui      # Run Playwright with UI
```

## 🐛 Known Issues & TODOs

- [ ] Add RUT validation (Chilean format)
- [ ] Implement data encryption for sensitive fields
- [ ] Add QR code expiration feature
- [ ] Add analytics/usage tracking
- [ ] Support multiple accounts per QR (carousel)
- [ ] Add QR customization (colors, logo)
- [ ] Implement rate limiting
- [ ] Add haptic feedback on mobile
- [ ] Improve error handling for clipboard API
- [ ] Add internationalization (i18n)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT

## 👥 Support

For issues or questions:
- Open an issue on GitHub
- Check Firebase Console for backend errors
- Review browser console for client-side issues

---

**Built with ❤️ for secure and easy bank account sharing**
