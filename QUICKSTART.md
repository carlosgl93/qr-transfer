# Quick Start Guide - QR Transfer

## ⚡ Getting Started in 5 Minutes

### Step 1: Start the Development Server

```bash
pnpm dev
```

The app will open at `http://localhost:5173`

### Step 2: Set Up Firestore (First Time Only)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **qr-transfers**
3. Click "Firestore Database" in the left menu
4. Click "Create database"
5. Choose **Production mode**
6. Select your preferred region
7. Click "Enable"

### Step 3: Apply Security Rules

1. In Firestore, click the **Rules** tab
2. Copy the contents from `firestore.rules` in this project
3. Paste into the Firebase Console editor
4. Click **Publish**

### Step 4: Enable Authentication

1. In Firebase Console, click "Authentication"
2. Click "Get started"
3. Enable **Email/Password**:
   - Click "Email/Password"
   - Toggle "Enable"
   - Click "Save"
4. Enable **Google**:
   - Click "Google"
   - Toggle "Enable"
   - Enter support email
   - Click "Save"

### Step 5: Test the App

1. Open `http://localhost:5173` in your browser
2. Click "Iniciar Sesión"
3. Create an account (or use Google sign-in)
4. Click "Agregar Cuenta"
5. Fill in the form with Chilean bank details:
   ```
   Nombre: Paola Constanza Sepúlveda Zepeda
   RUT: 181055049
   Banco: Mercado Pago
   Tipo: Cuenta Vista
   Número: 1031117310
   Email: constanza.sepz@gmail.com
   ```
6. Click "Guardar Cuenta"
7. Click "Ver Código QR"
8. Your QR code is ready! 🎉

### Step 6: Test QR Scanning

#### Option A: Use your phone

1. Download the QR code (click "Descargar QR")
2. Open the image on your computer
3. Scan it with your phone's camera
4. Data should auto-copy to clipboard

#### Option B: Test locally

1. Copy the URL from the QR display page
2. Open it in a new incognito window
3. Data should auto-copy and show success message

## 🎯 What's Next?

### Deploy to Production

1. Update `.env` with your production domain:
   ```env
   VITE_APP_DOMAIN=https://your-domain.com
   ```

2. Build the app:
   ```bash
   pnpm build
   ```

3. Deploy to Firebase Hosting:
   ```bash
   firebase init hosting
   firebase deploy
   ```

### Common Issues

**Issue**: QR scan shows "Cuenta no encontrada"
- **Fix**: Make sure Firestore rules are applied correctly
- **Check**: Verify the account was saved (check Firebase Console)

**Issue**: Clipboard doesn't work on mobile
- **Fix**: Must use HTTPS in production (HTTP won't work)
- **Workaround**: Add a "Copy" button as fallback

**Issue**: Google sign-in doesn't work
- **Fix**: Add your domain to Firebase Auth authorized domains
- **Path**: Firebase Console → Authentication → Settings → Authorized domains

**Issue**: Can't see any accounts after creating
- **Fix**: Check browser console for Firestore errors
- **Check**: Verify you're logged in with the same account

## 📱 Testing Checklist

- [ ] Create account with email/password
- [ ] Sign in with Google
- [ ] Add a bank account
- [ ] View dashboard (see the account listed)
- [ ] Generate QR code
- [ ] Download QR code
- [ ] Copy QR URL
- [ ] Scan QR (or open URL)
- [ ] Verify data auto-copies
- [ ] Delete an account
- [ ] Sign out
- [ ] Sign in again (data persists)

## 🔧 Development Tips

### Hot Reload
The dev server supports hot module replacement. Changes appear instantly.

### View Firestore Data
1. Firebase Console → Firestore Database
2. You'll see two collections:
   - `users/{userId}/bankAccounts` - Private accounts
   - `sharedAccounts` - Public accounts for QR scanning

### Debug Auth Issues
Check the browser console and:
```typescript
// In useAuth.ts, add console logs
console.log('User:', user);
console.log('Loading:', loading);
console.log('Error:', error);
```

### Test Clipboard
Use Chrome DevTools:
```javascript
// In browser console
navigator.clipboard.readText().then(text => console.log(text));
```

## 🎨 Customization Ideas

1. **Custom QR Colors**: Edit `src/utils/qr-generator.ts`
2. **Add More Banks**: Edit `CHILEAN_BANKS` array in `BankAccountForm.tsx`
3. **Change Theme**: Edit `src/theme/themes.ts`
4. **Add Logo to QR**: Use `qrcode` options in `generateQRCode()`

## 📚 Next Steps

- Read [README_QR_FEATURE.md](./README_QR_FEATURE.md) for full documentation
- Review [FIRESTORE_SETUP.md](./FIRESTORE_SETUP.md) for database details
- Check `firestore.rules` for security configuration

---

**Need Help?** Check the Firebase Console for backend errors, or review the browser console for client-side issues.
