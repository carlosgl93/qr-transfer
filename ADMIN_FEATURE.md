# Admin Feature: Shareable Links for Cash Payments

## Overview
This feature allows the admin user (cgumucio93@gmail.com) to create bank accounts for clients who pay in cash, generating a shareable link that clients can use to access their QR code anytime without creating an account.

## How It Works

### For Admin (cgumucio93@gmail.com)

1. **Login**: Sign in with your admin account
2. **Navigate**: Go to "Agregar Cuenta" page
3. **Toggle**: Enable the switch "Crear link compartible (para pagos en efectivo)"
4. **Fill Form**: Enter the client's bank account details
5. **Submit**: Click "Guardar Cuenta"
6. **Get Link**: A dialog appears with the shareable link
7. **Share**: Copy and send the link to your client (via WhatsApp, email, etc.)

### For Clients (Non-users)

1. **Receive Link**: Get the link from admin (format: `https://qr-transfers.web.app/claim/{token}`)
2. **Open Link**: Click the link in any browser (no login required)
3. **View QR**: See their bank account details and QR code
4. **Download/Copy**: 
   - Download QR as PNG image
   - Copy bank data to clipboard
5. **Keep Link**: Can access anytime by revisiting the same link

## User Interface Changes

### BankAccountForm (Admin Only)
- **New Switch**: "Crear link compartible (para pagos en efectivo)"
  - Only visible to admin user
  - When enabled, creates shareable link instead of private account
- **Info Alert**: Explains what the link does
- **Success Dialog**: Shows generated link with copy button

### New Page: ClaimQR
- **Route**: `/claim/:token`
- **Public Access**: No authentication required
- **Features**:
  - Displays bank account information
  - Shows QR code generated from account data
  - Download QR button
  - Copy data button
  - Error handling for invalid/expired tokens

## Technical Implementation

### Files Created

1. **src/utils/admin.ts**
   - `ADMIN_EMAIL`: Constant with admin email
   - `isAdmin()`: Check if user is admin
   - `generateShareableToken()`: Create unique tokens

2. **src/types/shareable-account.ts**
   - `ShareableAccount`: TypeScript interface
   - Extends BankAccount with token and metadata

3. **src/pages/ClaimQR/**
   - Public page for accessing QR via token
   - Queries Firestore by token
   - Generates QR on-the-fly

### Files Modified

1. **src/pages/BankAccountForm/BankAccountForm.tsx**
   - Added admin mode toggle
   - Dual save logic (private vs shareable)
   - Link generation dialog
   - Copy link functionality

2. **src/routes/index.ts**
   - Added `/claim/:token` route

3. **firestore.rules**
   - Added `shareableAccounts` collection rules
   - Public read access for claim links

## Firestore Collections

### shareableAccounts
```typescript
{
  fullName: string;
  rut: string;
  bankOrPlatform: string;
  accountType: string;
  accountNumber: string;
  email: string;
  token: string;           // Unique identifier
  createdBy: string;       // Admin user ID
  createdAt: Timestamp;
  claimed?: boolean;       // Future: track if visited
  claimedAt?: Timestamp;   // Future: track first visit
}
```

### Security Rules
- **Read**: Public (anyone with link)
- **Create**: Authenticated users only (admin)
- **Update/Delete**: Only creator (admin)

## Use Cases

### 1. Cash Payment at Event
- Client pays cash at event
- Admin creates account on-site
- Link sent immediately via WhatsApp
- Client opens link and downloads QR

### 2. Bank Transfer After Cash
- Client pays cash
- Admin creates account with client's details
- Link sent via email
- Client uses link to share payment details

### 3. Multiple Clients
- Admin processes multiple cash payments
- Creates accounts for each
- Sends individual links
- Each client has permanent access

## Benefits

1. **No Account Required**: Clients don't need to register
2. **Instant Access**: Link works immediately
3. **Permanent**: Link doesn't expire (unless manually deleted)
4. **Secure**: Unique token prevents guessing
5. **Flexible**: Works on any device/browser
6. **Simple UX**: One-click access to QR

## Security Considerations

### Token Generation
- Format: `{timestamp}-{random-string}`
- Example: `1735415280123-k3j5h9d2m4p`
- Extremely difficult to guess
- Unique per account

### Access Control
- Only admin (cgumucio93@gmail.com) sees the toggle
- Regular users can't create shareable links
- Token required for access
- No admin privileges granted to link visitors

### Data Privacy
- Public access is intentional (for sharing payment info)
- No sensitive data beyond bank details
- Clients control when to share their QR
- Admin can delete accounts if needed

## Future Enhancements

### Tracking
- Mark accounts as "claimed" on first visit
- Track `claimedAt` timestamp
- Admin dashboard showing claimed/unclaimed

### Expiration
- Optional expiration date
- Auto-delete after X days
- Renewal option

### Analytics
- Count link visits
- Track downloads
- Usage statistics

### Notifications
- Email to client when link created
- SMS option
- WhatsApp integration

### Admin Dashboard
- List all shareable accounts
- Filter by claimed/unclaimed
- Copy links again
- Revoke access

## Testing Checklist

- [ ] Admin user sees toggle switch
- [ ] Non-admin users don't see toggle
- [ ] Link generation works
- [ ] Link copy to clipboard works
- [ ] Claim page loads with valid token
- [ ] Invalid token shows error
- [ ] QR generation works on claim page
- [ ] Download QR works
- [ ] Copy data works
- [ ] No authentication required for claim page
- [ ] Firestore rules allow public read
- [ ] Admin can create multiple links

## Deployment Notes

1. **Update Firestore Rules**: Deploy new rules with shareableAccounts
   ```bash
   firebase deploy --only firestore:rules
   ```

2. **Deploy Application**: Deploy updated code
   ```bash
   pnpm build
   firebase deploy --only hosting
   ```

3. **Test**: Visit claim link to verify public access

4. **Monitor**: Check Firebase Console for any security alerts

## Example Workflow

```
Admin (cgumucio93@gmail.com):
1. Login → Dashboard
2. Click "Agregar Cuenta"
3. Toggle "Crear link compartible" ON
4. Fill form:
   - Nombre: Juan Pérez
   - RUT: 12345678-9
   - Banco: Banco de Chile
   - Tipo: Cuenta Corriente
   - Número: 1234567890
   - Email: juan@email.com
5. Click "Guardar Cuenta"
6. Copy link: https://qr-transfers.web.app/claim/1735415280-k3j5h9d2m4p
7. Send to Juan via WhatsApp

Client (Juan):
1. Receives WhatsApp: "Aquí está tu código QR: [link]"
2. Clicks link
3. Sees bank info and QR code
4. Downloads QR image
5. Shares QR when receiving money
```

## Support

For issues or questions:
- Admin: cgumucio93@gmail.com
- Repository: carlosgl93/qr-transfer
