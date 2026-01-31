import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { useNotifications } from '@toolpad/core/useNotifications';
import { doc, getDoc } from 'firebase/firestore';

import Loading from '@/components/Loading';
import ProtectedRoute from '@/components/ProtectedRoute';
import { db } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import { BankAccount } from '@/types/bank-account';
import { copyToClipboard, formatBankAccountForClipboard } from '@/utils/clipboard-handler';
import { downloadQRCode, generateQRCode } from '@/utils/qr-generator';

function QRDisplayContent() {
  const { accountId } = useParams<{ accountId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const notifications = useNotifications();
  const [account, setAccount] = useState<BankAccount | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !accountId) return;

    const fetchAccountAndGenerateQR = async () => {
      try {
        const accountRef = doc(db, 'users', user.uid, 'bankAccounts', accountId);
        const accountSnap = await getDoc(accountRef);

        if (!accountSnap.exists()) {
          notifications.show('Cuenta no encontrada', { severity: 'error' });
          navigate('/dashboard');
          return;
        }

        const accountData = {
          id: accountSnap.id,
          ...accountSnap.data(),
        } as BankAccount;

        setAccount(accountData);

        // Generate QR code with account data
        const qrUrl = await generateQRCode(accountData);
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Error fetching account:', error);
        notifications.show('Error al cargar la cuenta', { severity: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchAccountAndGenerateQR();
  }, [user, accountId, navigate, notifications]);

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
    return <Loading />;
  }

  if (!account) {
    return (
      <Container maxWidth="md">
        <Alert severity="error">Cuenta no encontrada</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <meta name="title" content="Código QR" />
      <Box sx={{ mt: 4, mb: 4 }}>
        <IconButton onClick={() => navigate('/dashboard')} sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>

        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Código QR
            </Typography>

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

            <Alert severity="info" sx={{ mb: 3 }}>
              Comparte este código QR. Cuando alguien lo escanee con su app de cámara o lector QR,
              podrá ver los datos de tu cuenta y copiarlos directamente.
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

function QRDisplay() {
  return (
    <ProtectedRoute>
      <QRDisplayContent />
    </ProtectedRoute>
  );
}

export default QRDisplay;
