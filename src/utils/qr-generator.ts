import QRCode from 'qrcode';
import { APP_DOMAIN } from '@/config/firebase';

/**
 * Generates a QR code data URL from an account ID
 */
export async function generateQRCode(accountId: string): Promise<string> {
  try {
    const url = `${APP_DOMAIN}/scan?id=${accountId}`;
    
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
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

/**
 * Generates a shareable URL for an account
 */
export function generateShareableUrl(accountId: string): string {
  return `${APP_DOMAIN}/scan?id=${accountId}`;
}
