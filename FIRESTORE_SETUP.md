# QR Transfer - Firestore Setup Guide

## Firestore Collections Structure

### 1. `users/{userId}/bankAccounts/{accountId}`
Private collection storing user's bank accounts.

**Security**: Only accessible by the account owner.

**Fields**:
- `fullName`: string
- `rut`: string
- `bankOrPlatform`: string
- `accountType`: string
- `accountNumber`: string
- `email`: string
- `userId`: string
- `createdAt`: timestamp
- `updatedAt`: timestamp

### 2. `sharedAccounts/{accountId}`
Public collection for QR code scanning.

**Security**: 
- Read: Anyone (for QR scanning)
- Write: Only authenticated users can create
- Update/Delete: Only the owner (matched by userId)

**Fields**: Same as above

## Setting Up Firestore

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `qr-transfers`
3. Navigate to "Firestore Database"
4. Click "Create database"
5. Choose production mode
6. Select your region

## Applying Security Rules

1. In Firestore, go to the "Rules" tab
2. Copy the contents of `firestore.rules` from this project
3. Paste into the Firebase Console
4. Click "Publish"

## Testing

After setting up:

1. Create an account and log in
2. Add a bank account (saves to both collections)
3. View the QR code
4. Open the scan URL in an incognito window (should work without login)
5. Data should auto-copy to clipboard

## Important Notes

- The `sharedAccounts` collection is publicly readable
- Do NOT store sensitive data you don't want shared
- Consider adding encryption for sensitive fields in production
- QR codes contain URLs, not raw data
- Implement rate limiting in production to prevent abuse
