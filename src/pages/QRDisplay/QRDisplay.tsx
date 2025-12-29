import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Alert,
  IconButton,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router';
import { useNotifications } from '@toolpad/core/useNotifications';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import { BankAccount } from '@/types/bank-account';
import Loading from '@/components/Loading';
import ProtectedRoute from '@/components/ProtectedRoute';
import { generateQRCode, downloadQRCode, generateShareableUrl } from '@/utils/qr-generator';
import { copyToClipboard } from '@/utils/clipboard-handler';

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

        // Generate QR code
        const qrUrl = await generateQRCode(accountId);
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

  const handleCopyUrl = async () => {
    if (!accountId) return;
    
    const url = generateShareableUrl(accountId);
    const success = await copyToClipboard(url);
    
    if (success) {
      notifications.show('URL copiada al portapapeles', {
        severity: 'success',
        autoHideDuration: 2000,
      });
    } else {
      notifications.show('Error al copiar URL', { severity: 'error' });
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
              Comparte este código QR. Cuando alguien lo escanee, los datos de tu cuenta se
              copiarán automáticamente a su portapapeles.
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
                onClick={handleCopyUrl}
                fullWidth
              >
                Copiar URL
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
