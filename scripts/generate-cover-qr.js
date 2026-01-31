import QRCode from 'qrcode';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate a QR code for the project
const data = 'Generador de Códigos QR para Pagos - Crea códigos QR con información de pago de forma rápida y segura';

QRCode.toFile(
  join(__dirname, '../public/cover.png'),
  data,
  {
    width: 1200,
    margin: 4,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
    errorCorrectionLevel: 'H',
  },
  function (err) {
    if (err) {
      console.error('Error generating QR code:', err);
      process.exit(1);
    }
    console.log('QR code cover image generated successfully at public/cover.png');
  }
);
