import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
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

import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import { BankAccount } from '@/types/bank-account';
import { generateQRCode } from '@/utils/qr-generator';

function PaymentSuccess() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [account, setAccount] = useState<BankAccount | null>(null);

  useEffect(() => {
    const loadAccountAndGenerateQR = async () => {
      try {
        // Get accountId from sessionStorage
        const accountId = sessionStorage.getItem('pendingAccountId');

        if (!accountId) {
          setError('No se encontró información de la cuenta. Por favor, intenta nuevamente.');
          setLoading(false);
          return;
        }

        if (!user) {
          setError('Debes iniciar sesión para ver tu código QR.');
          setLoading(false);
          return;
        }

        // Fetch account from Firestore
        const accountRef = doc(db, 'users', user.uid, 'bankAccounts', accountId);
        const accountSnap = await getDoc(accountRef);

        if (!accountSnap.exists()) {
          setError('No se encontró la cuenta bancaria.');
          setLoading(false);
          return;
        }

        const accountData = {
          id: accountSnap.id,
          ...accountSnap.data(),
        } as BankAccount;

        setAccount(accountData);

        // Generate QR code
        const qrDataUrl = await generateQRCode(accountData);
        setQrCode(qrDataUrl);

        // Clear sessionStorage
        sessionStorage.removeItem('pendingAccountId');
      } catch (err) {
        console.error('Error loading account:', err);
        setError('Error al cargar los datos de la cuenta.');
      } finally {
        setLoading(false);
      }
    };

    loadAccountAndGenerateQR();
  }, [user]);

  const handleDownload = () => {
    if (!qrCode || !account) return;

    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `qr-${account.fullName.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress size={60} />
          <Typography sx={{ mt: 3 }} variant="h6">
            Procesando tu pago...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 8 }}>
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
          <Button variant="contained" onClick={handleGoToDashboard} startIcon={<HomeIcon />}>
            Ir al Dashboard
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={3} alignItems="center">
              {/* Success Header */}
              <Box sx={{ textAlign: 'center' }}>
                <CheckCircleIcon
                  sx={{
                    fontSize: 80,
                    color: 'success.main',
                    mb: 2,
                  }}
                />
                <Typography variant="h4" gutterBottom>
                  ¡Pago Exitoso!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Tu código QR ha sido generado correctamente
                </Typography>
              </Box>

              {/* Account Info */}
              {account && (
                <Box sx={{ width: '100%' }}>
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Tu cuenta bancaria ha sido registrada exitosamente
                  </Alert>
                  <Card variant="outlined">
                    <CardContent>
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
                    </CardContent>
                  </Card>
                </Box>
              )}

              {/* QR Code Display */}
              {qrCode && (
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={qrCode}
                    alt="Código QR"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              )}

              {/* Instructions */}
              <Alert severity="info" sx={{ width: '100%' }}>
                Guarda este código QR para compartir tus datos bancarios de forma rápida y segura.
                Puedes descargarlo o acceder a él desde tu dashboard.
              </Alert>

              {/* Action Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '100%' }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleDownload}
                  startIcon={<DownloadIcon />}
                >
                  Descargar QR
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleGoToDashboard}
                  startIcon={<HomeIcon />}
                >
                  Ir al Dashboard
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default PaymentSuccess;
