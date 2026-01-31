import QRCode from 'qrcode';

import { BankAccount } from '@/types/bank-account';

import { formatBankAccountForClipboard } from './clipboard-handler';

/**
 * Generates a QR code data URL from bank account data
 */
export async function generateQRCode(account: BankAccount): Promise<string> {
  try {
    // Format the bank account data as text
    const dataText = formatBankAccountForClipboard(account);

    const qrCodeDataUrl = await QRCode.toDataURL(dataText, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    });

    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

/**
 * Downloads a QR code as a PNG file
 */
export function downloadQRCode(dataUrl: string, filename: string = 'qr-code.png') {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
