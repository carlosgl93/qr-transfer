import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';
import { BankAccount } from '@/types/bank-account';
import { copyToClipboard, formatBankAccountForClipboard } from '@/utils/clipboard-handler';

type CopyStatus = 'loading' | 'success' | 'error';

function ScanLanding() {
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');
  const [account, setAccount] = useState<BankAccount | null>(null);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (!accountId) {
      setErrorMessage('ID de cuenta no válido');
      setCopyStatus('error');
      return;
    }

    const fetchAndCopyAccount = async () => {
      try {
        // Fetch from the public sharedAccounts collection
        const accountRef = doc(db, 'sharedAccounts', accountId);
        const accountSnap = await getDoc(accountRef);

        if (!accountSnap.exists()) {
          setErrorMessage('Cuenta no encontrada');
          setCopyStatus('error');
          return;
        }

        const accountData = accountSnap.data() as BankAccount;
        setAccount(accountData);

        // Format and copy to clipboard
        const formattedData = formatBankAccountForClipboard(accountData);
        const success = await copyToClipboard(formattedData);

        if (success) {
          setCopyStatus('success');
        } else {
          setErrorMessage('No se pudo copiar al portapapeles. Por favor, copia manualmente.');
          setCopyStatus('error');
        }
      } catch (error) {
        console.error('Error fetching account:', error);
        setErrorMessage('Error al cargar los datos de la cuenta');
        setCopyStatus('error');
      }
    };

    fetchAndCopyAccount();
  }, [accountId]);

  return (
    <Container maxWidth="sm">
      <meta name="title" content="Datos Bancarios" />
      <Box sx={{ mt: 8, mb: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={3} alignItems="center">
              {copyStatus === 'loading' && (
                <>
                  <CircularProgress />
                  <Typography variant="h5" align="center">
                    Cargando datos...
                  </Typography>
                </>
              )}

              {copyStatus === 'success' && (
                <>
                  <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main' }} />
                  <Typography variant="h4" align="center" color="success.main">
                    ¡Datos Copiados!
                  </Typography>
                  <Typography variant="body1" align="center" color="text.secondary">
                    Los datos bancarios se han copiado a tu portapapeles
                  </Typography>

                  {account && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        bgcolor: 'background.default',
                        borderRadius: 1,
                        width: '100%',
                      }}
                    >
                      <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                        {formatBankAccountForClipboard(account)}
                      </Typography>
                    </Box>
                  )}
                </>
              )}

              {copyStatus === 'error' && (
                <>
                  <ErrorIcon sx={{ fontSize: 80, color: 'error.main' }} />
                  <Typography variant="h5" align="center" color="error.main">
                    Error
                  </Typography>
                  <Alert severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                  </Alert>
                </>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ScanLanding;
