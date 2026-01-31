import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import { useNotifications } from '@toolpad/core/useNotifications';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/config/firebase';
import { ShareableAccount } from '@/types/shareable-account';
import { copyToClipboard, formatBankAccountForClipboard } from '@/utils/clipboard-handler';
import { downloadQRCode, generateQRCode } from '@/utils/qr-generator';

function ClaimQR() {
  const { token } = useParams<{ token: string }>();
  const notifications = useNotifications();
  const [account, setAccount] = useState<ShareableAccount | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!token) {
      setError('Token inválido');
      setLoading(false);
      return;
    }

    const fetchAccountAndGenerateQR = async () => {
      try {
        // Query shareableAccounts collection by token
        const shareableAccountsRef = collection(db, 'shareableAccounts');
        const q = query(shareableAccountsRef, where('token', '==', token));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError('No se encontró una cuenta con este link. Es posible que haya expirado.');
          setLoading(false);
          return;
        }

        const accountDoc = querySnapshot.docs[0];
        const accountData = {
          id: accountDoc.id,
          ...accountDoc.data(),
        } as ShareableAccount;

        setAccount(accountData);

        // Generate QR code with account data
        const qrUrl = await generateQRCode(accountData);
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Error fetching account:', error);
        setError('Error al cargar la cuenta. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchAccountAndGenerateQR();
  }, [token]);

  const handleDownload = () => {
    if (qrCodeUrl && account) {
      downloadQRCode(qrCodeUrl, `qr-${account.fullName.replace(/\s+/g, '-')}.png`);
      notifications.show('QR descargado', {
        severity: 'success',
        autoHideDuration: 2000,
      });
    }
  };

  const handleCopyData = async () => {
    if (!account) return;

    const dataText = formatBankAccountForClipboard(account);
    const success = await copyToClipboard(dataText);

    if (success) {
      notifications.show('Datos copiados al portapapeles', {
        severity: 'success',
        autoHideDuration: 2000,
      });
    } else {
      notifications.show('Error al copiar datos', { severity: 'error' });
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !account) {
    return (
      <Container maxWidth="md">
        <meta name="title" content="Link no encontrado" />
        <Box sx={{ mt: 4, mb: 4 }}>
          <Alert severity="error">{error || 'Cuenta no encontrada'}</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <meta name="title" content="Tu Código QR" />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Tu Código QR
            </Typography>

            <Alert severity="info" sx={{ my: 3 }}>
              Guarda este código QR para compartir tus datos bancarios fácilmente.
            </Alert>

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                {account.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                RUT: {account.rut}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {account.bankOrPlatform} - {account.accountType}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cuenta: {account.accountNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {account.email}
              </Typography>
            </Box>

            {qrCodeUrl && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  my: 4,
                  p: 3,
                  bgcolor: 'background.default',
                  borderRadius: 2,
                }}
              >
                <img src={qrCodeUrl} alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            )}

            <Alert severity="success" sx={{ mb: 3 }}>
              Cuando alguien escanee este código QR, podrá ver tus datos bancarios y copiarlos
              directamente.
            </Alert>

            <Stack spacing={2}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                fullWidth
              >
                Descargar QR
              </Button>

              <Button
                variant="outlined"
                startIcon={<ContentCopyIcon />}
                onClick={handleCopyData}
                fullWidth
              >
                Copiar Datos
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ClaimQR;
