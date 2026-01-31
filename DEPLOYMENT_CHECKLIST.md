# Deployment Checklist - QR Transfer

## 📋 Pre-Deployment Steps

### 1. Firebase Setup

#### Firestore Database
- [x ] Go to Firebase Console → Firestore Database
- [ x] Click "Create database"
- [ x] Select "Production mode"
- [ x ] Choose region (preferably close to your users)
- [x ] Click "Enable"

#### Apply Security Rules
- [x ] In Firestore, go to "Rules" tab
- [x ] Copy contents from `firestore.rules`
- [x ] Paste into Firebase Console
- [x ] Click "Publish"
- [ x] Verify rules are active (should show green checkmark)

#### Enable Authentication
- [x ] Go to Authentication section
- [x ] Click "Get started"
- [ x] Enable "Email/Password" provider
- [x ] Enable "Google" provider
  - x Add support email
  - Download OAuth credentials if needed
- [ ] Add authorized domains (your production domain)

#### Test Firestore Access
- [ ] Open browser console in your app
- [ ] Try creating a bank account
- [ ] Check Firebase Console → Firestore
- [ ] Verify two collections exist:
  - `users/{userId}/bankAccounts`
  - `sharedAccounts`

### 2. Environment Configuration

#### Update Production Environment
```bash
# In .env (or your hosting provider's env vars)
VITE_APP_DOMAIN=https://your-production-domain.com
```

#### Verify All Env Vars
- [ ] `VITE_FIREBASE_API_KEY`
- [ ] `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] `VITE_FIREBASE_PROJECT_ID`
- [ ] `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `VITE_FIREBASE_APP_ID`
- [ ] `VITE_FIREBASE_MEASUREMENT_ID`
- [ ] `VITE_APP_DOMAIN` (production URL)

### 3. Code Review

#### Security Checks
- [ ] Review Firestore rules in Firebase Console
- [ ] Verify protected routes use `ProtectedRoute` wrapper
- [ ] Check that sensitive data is in private collections
- [ ] Confirm auth state is properly persisted

#### Performance Checks
- [ ] Run `pnpm build` - check bundle sizes
- [ ] Review Lighthouse scores
- [ ] Test on slow 3G connection
- [ ] Verify lazy loading works

#### Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Safari (especially iOS)
- [ ] Test on Firefox
- [ ] Test on Edge

### 4. Build & Test

#### Run Build
```bash
pnpm build
```

#### Check Build Output
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Bundle sizes are reasonable
- [ ] All chunks generated successfully

#### Test Production Build Locally
```bash
pnpm preview
```

#### Manual Testing Checklist
- [ ] Create account with email/password
- [ ] Sign in with Google
- [ ] Add a bank account
- [ ] View dashboard
- [ ] Generate QR code
- [ ] Download QR code
- [ ] Copy QR URL
- [ ] Open scan URL (incognito/different device)
- [ ] Verify clipboard auto-copy works
- [ ] Delete an account
- [ ] Sign out
- [ ] Sign back in (data persists)

## 🚀 Deployment Options

### Option 1: Firebase Hosting (Recommended)

#### Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### Login
```bash
firebase login
```

#### Initialize Hosting
```bash
firebase init hosting
```

**Configuration:**
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub actions: `No` (or `Yes` if you want CI/CD)

#### Deploy
```bash
# Build
pnpm build

# Deploy
firebase deploy --only hosting
```

#### Verify Deployment
- [ ] Visit your Firebase Hosting URL
- [ ] Test all functionality
- [ ] Check Firebase Console → Hosting for metrics

### Option 2: Vercel

#### Install Vercel CLI
```bash
npm install -g vercel
```

#### Deploy
```bash
vercel
```

#### Configure Environment Variables
- [ ] Add all `VITE_*` variables in Vercel dashboard
- [ ] Update `VITE_APP_DOMAIN` to your Vercel URL

### Option 3: Netlify

#### Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Deploy
```bash
netlify deploy --prod
```

#### Configure
- [ ] Build command: `pnpm build`
- [ ] Publish directory: `dist`
- [ ] Add environment variables

### Option 4: Other Platforms

**Requirements:**
- Node.js support
- Environment variables support
- HTTPS enabled
- Build command: `pnpm build`
- Output directory: `dist`

## 📊 Post-Deployment

### 1. Verify Production

#### Test Core Functionality
- [ ] Sign up / sign in works
- [ ] Bank account creation saves correctly
- [ ] QR codes generate properly
- [ ] QR scan URLs work
- [ ] Clipboard copy works (HTTPS required!)
- [ ] PWA installable

#### Check Firebase Console
- [ ] Monitor Firestore reads/writes
- [ ] Check Authentication users
- [ ] Review error logs
- [ ] Verify security rules are active

### 2. Performance Monitoring

#### Set Up Analytics
- [ ] Firebase Analytics is enabled
- [ ] Monitor user flows
- [ ] Track QR generation events
- [ ] Track scan events

#### Performance Metrics
- [ ] Check Core Web Vitals
- [ ] Monitor Firestore query performance
- [ ] Review bundle sizes
- [ ] Test mobile performance

### 3. Security Audit

#### Review Access
- [ ] Test unauthenticated access to protected routes
- [ ] Verify public routes work without auth
- [ ] Check that users can't access others' data
- [ ] Test QR scan works without login

#### Firebase Security
- [ ] Review Firestore usage/quotas
- [ ] Check for suspicious activity
- [ ] Verify rate limits (if implemented)
- [ ] Review auth logs

### 4. Documentation

#### Update Documentation
- [ ] Add production URL to README
- [ ] Document deployment process
- [ ] Add troubleshooting guide
- [ ] Create user guide

#### Team Handoff
- [ ] Share Firebase Console access
- [ ] Document environment variables
- [ ] Share deployment credentials
- [ ] Create runbook for common issues

## 🔍 Troubleshooting

### Common Issues

#### "Cuenta no encontrada" on scan
**Cause:** Firestore rules not applied or account not in `sharedAccounts`
**Fix:** 
1. Check Firebase Console → Firestore rules
2. Verify `sharedAccounts` collection exists
3. Check browser console for Firestore errors

#### Clipboard doesn't work
**Cause:** HTTP instead of HTTPS (required for Clipboard API)
**Fix:** Deploy to HTTPS hosting (Firebase, Vercel, Netlify)

#### Google sign-in fails
**Cause:** Domain not authorized
**Fix:** 
1. Firebase Console → Authentication → Settings
2. Add your domain to "Authorized domains"

#### QR code doesn't generate
**Cause:** Environment variable not set
**Fix:** Verify `VITE_APP_DOMAIN` is set correctly

#### Can't see accounts after creation
**Cause:** User not authenticated or Firestore error
**Fix:** 
1. Check browser console
2. Verify Firebase rules
3. Check auth state in dev tools

### Debug Commands

```bash
# Check environment variables
pnpm run dev --debug

# View Firestore in browser
# Firebase Console → Firestore Database

# Check auth state
# Browser Console → Application → Local Storage → qr-transfer-user

# Test clipboard
# Browser Console:
navigator.clipboard.readText().then(console.log)
```

## ✅ Launch Checklist

### Before Going Live
- [ ] All environment variables configured
- [ ] Firestore database created and rules applied
- [ ] Authentication providers enabled
- [ ] Production build tested locally
- [ ] Deployed to hosting platform
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] All core features tested in production
- [ ] Error tracking set up (optional)
- [ ] Analytics configured (optional)

### Monitoring (First 24 Hours)
- [ ] Check Firestore usage
- [ ] Monitor authentication events
- [ ] Review error logs
- [ ] Test QR scanning from different devices
- [ ] Monitor performance metrics
- [ ] Check user feedback

### Week 1 Review
- [ ] Analyze user patterns
- [ ] Review security logs
- [ ] Check quota usage
- [ ] Collect user feedback
- [ ] Plan improvements

---

**Ready to Deploy?** Follow the checklist step by step, and you'll have a production-ready QR Transfer app! 🚀
