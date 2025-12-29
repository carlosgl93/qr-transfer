# Architecture Change: QR Code Data Encoding

## Change Summary
Updated the QR code implementation from URL-based to raw data encoding for better user experience.

## Previous Architecture
- **QR Content**: URL to scan landing page (`https://qr-transfers.web.app/scan?id={accountId}`)
- **Flow**: User scans QR → Opens browser → Visits website → Fetches from Firestore → Auto-copies to clipboard
- **Storage**: Dual storage in Firestore (private `users/{userId}/bankAccounts` + public `sharedAccounts`)
- **Dependencies**: Required internet connection, browser, Firebase hosting

## New Architecture
- **QR Content**: Raw bank account data (formatted multi-line text)
- **Flow**: User scans QR → QR scanner shows data → User copies directly
- **Storage**: Single storage in Firestore (only private `users/{userId}/bankAccounts`)
- **Dependencies**: None - works offline with any QR scanner app

## Benefits
1. **Simpler UX**: No need to open browser or visit website
2. **Faster**: Immediate data display in QR scanner app
3. **Offline**: Works without internet connection after scanning
4. **Universal**: Works with any QR scanner (camera apps, dedicated scanners)
5. **Reduced complexity**: No public Firestore collection needed
6. **Cost savings**: No reads from Firestore on every scan

## QR Content Format
```
{Full Name}
RUT: {RUT}
{Bank/Platform}
{Account Type}
Número de cuenta: {Account Number}
{Email}
```

Example:
```
Juan Pérez González
RUT: 12.345.678-9
Banco de Chile
Cuenta Corriente
Número de cuenta: 1234567890
juan.perez@email.com
```

## Files Modified

### src/utils/qr-generator.ts
- Changed `generateQRCode(accountId: string)` to `generateQRCode(account: BankAccount)`
- Now encodes formatted bank account data instead of URL
- Removed `generateShareableUrl()` function (no longer needed)

### src/pages/QRDisplay/QRDisplay.tsx
- Updated to pass full account object to `generateQRCode()`
- Changed "Copiar URL" button to "Copiar Datos"
- `handleCopyData()` now copies formatted bank account data
- Updated alert message to reflect direct data scanning

### src/pages/BankAccountForm/BankAccountForm.tsx
- Removed save to `sharedAccounts` collection
- Now only saves to private user collection
- Removed unused `setDoc` and `doc` imports

## Firestore Collections

### Before
- `users/{userId}/bankAccounts` (private - owner only)
- `sharedAccounts` (public read - for QR scans)

### After
- `users/{userId}/bankAccounts` (private - owner only)

**Note**: The `sharedAccounts` collection is no longer needed and can be deleted from Firestore.

## User Experience Comparison

### Before
1. Generate QR with account
2. Share QR code image
3. Recipient scans QR
4. Browser opens to qr-transfers.web.app/scan?id=xxx
5. Page loads and fetches data from Firebase
6. JavaScript copies data to clipboard
7. User can paste the data

**Issues**: Requires internet, browser, auto-copy might fail, extra steps

### After
1. Generate QR with account
2. Share QR code image
3. Recipient scans QR
4. QR scanner displays the bank account data
5. User copies data from scanner app

**Benefits**: No internet needed, works with any QR app, simpler, more reliable

## Testing Recommendations
1. Test QR generation with various bank account data
2. Scan with different QR scanner apps (iOS Camera, Android Camera, dedicated apps)
3. Verify data format is readable and copyable
4. Test clipboard paste functionality in BankAccountForm
5. Verify data integrity (special characters, line breaks)

## Migration Notes
- Existing QR codes (with URLs) will still work but lead to non-functional scan page
- Consider regenerating all QR codes for existing accounts
- Can safely delete the `sharedAccounts` Firestore collection
- The `/scan` route is now unused (can be removed if desired)
