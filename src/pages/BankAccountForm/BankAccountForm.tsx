import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';



import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LinkIcon from '@mui/icons-material/Link';
import SaveIcon from '@mui/icons-material/Save';
import { Alert, Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, MenuItem, Stack, Switch, TextField, Typography } from '@mui/material';



import { zodResolver } from '@hookform/resolvers/zod';
import { useNotifications } from '@toolpad/core/useNotifications';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



import ProtectedRoute from '@/components/ProtectedRoute';
import { db } from '@/config/firebase';
import { APP_DOMAIN } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import { generateShareableToken, isAdmin } from '@/utils/admin';



import { BankAccountFormData, bankAccountSchema } from './schema';





const CHILEAN_BANKS = [
  'Banco de Chile',
  'Banco Estado',
  'BancoEstado',
  'Scotiabank',
  'Banco Santander',
  'Banco BCI',
  'Banco Itaú',
  'Banco Security',
  'Banco Falabella',
  'Banco Ripley',
  'Mercado Pago',
  'Tenpo',
  'Mach',
  'Otro',
];

const ACCOUNT_TYPES = [
  'Cuenta Vista',
  'Cuenta Corriente',
  'Cuenta de Ahorro',
  'Cuenta RUT',
  'Billetera Digital',
];

function BankAccountFormContent() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const notifications = useNotifications();
  const [loading, setLoading] = useState(false);
  const [createShareableLink, setCreateShareableLink] = useState(false);
  const [shareableLink, setShareableLink] = useState('');
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  
  const userIsAdmin = isAdmin(user?.email);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<BankAccountFormData>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      fullName: '',
      rut: '',
      bankOrPlatform: '',
      accountType: '',
      accountNumber: '',
      email: user?.email || '',
    },
  });

  // Watch for changes in accountType, bankOrPlatform, and rut
  const accountType = watch('accountType');
  const bankOrPlatform = watch('bankOrPlatform');
  const rut = watch('rut');

  // Auto-populate account number with RUT for Cuenta RUT or Banco Estado
  useEffect(() => {
    const isCuentaRUT = accountType === 'Cuenta RUT';
    const isBancoEstado = bankOrPlatform === 'Banco Estado' || bankOrPlatform === 'BancoEstado';
    
    if ((isCuentaRUT || isBancoEstado) && rut) {
      setValue('accountNumber', rut);
    }
  }, [accountType, bankOrPlatform, rut, setValue]);

  const parseClipboardData = (text: string): Partial<BankAccountFormData> | null => {
    try {
      const lines = text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line);
      const parsed: Partial<BankAccountFormData> = {};

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for RUT
        if (line.toLowerCase().includes('rut:')) {
          parsed.rut = line.split(':')[1]?.trim() || '';
        }
        // Check for account number
        else if (
          line.toLowerCase().includes('número de cuenta:') ||
          line.toLowerCase().includes('numero de cuenta:')
        ) {
          parsed.accountNumber = line.split(':')[1]?.trim() || '';
        }
        // Check for email
        else if (line.includes('@')) {
          parsed.email = line;
        }
        // Check if line is a bank (matches CHILEAN_BANKS)
        else if (CHILEAN_BANKS.some((bank) => bank.toLowerCase() === line.toLowerCase())) {
          parsed.bankOrPlatform = line;
        }
        // Check if line is an account type
        else if (ACCOUNT_TYPES.some((type) => type.toLowerCase() === line.toLowerCase())) {
          parsed.accountType = line;
        }
        // First line is likely the full name (if not already assigned)
        else if (!parsed.fullName && i === 0) {
          parsed.fullName = line;
        }
      }

      return Object.keys(parsed).length > 0 ? parsed : null;
    } catch (error) {
      console.error('Error parsing clipboard data:', error);
      return null;
    }
  };

  const handlePasteFromClipboard = async () => {
    try {
      setLoading(true);

      // Check if Clipboard API is available
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        notifications.show('Tu navegador no soporta lectura del portapapeles', {
          severity: 'warning',
          autoHideDuration: 4000,
        });
        setLoading(false);
        return;
      }

      const text = await navigator.clipboard.readText();

      if (!text) {
        notifications.show('El portapapeles está vacío', {
          severity: 'info',
          autoHideDuration: 3000,
        });
        setLoading(false);
        return;
      }

      const parsed = parseClipboardData(text);

      if (!parsed || Object.keys(parsed).length === 0) {
        notifications.show('No se pudo interpretar el formato del portapapeles', {
          severity: 'warning',
          autoHideDuration: 4000,
        });
        setLoading(false);
        return;
      }

      // Auto-populate fields
      if (parsed.fullName) setValue('fullName', parsed.fullName);
      if (parsed.rut) setValue('rut', parsed.rut);
      if (parsed.bankOrPlatform) setValue('bankOrPlatform', parsed.bankOrPlatform);
      if (parsed.accountType) setValue('accountType', parsed.accountType);
      if (parsed.accountNumber) setValue('accountNumber', parsed.accountNumber);
      if (parsed.email) setValue('email', parsed.email);

      const fieldsPopulated = Object.keys(parsed).length;
      notifications.show(`${fieldsPopulated} campo(s) completado(s) desde el portapapeles`, {
        severity: 'success',
        autoHideDuration: 3000,
      });
    } catch (error: any) {
      console.error('Error reading clipboard:', error);

      if (error.name === 'NotAllowedError') {
        notifications.show('Permiso denegado para leer el portapapeles', {
          severity: 'error',
          autoHideDuration: 4000,
        });
      } else {
        notifications.show('Error al leer el portapapeles', {
          severity: 'error',
          autoHideDuration: 4000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: BankAccountFormData) => {
    if (!user) {
      notifications.show('Debes iniciar sesión primero', { severity: 'error' });
      return;
    }

    try {
      setLoading(true);

      // If admin mode: create shareable link
      if (userIsAdmin && createShareableLink) {
        const token = generateShareableToken();
        
        // Save to shareableAccounts collection
        const shareableAccountsRef = collection(db, 'shareableAccounts');
        await addDoc(shareableAccountsRef, {
          ...data,
          token,
          createdBy: user.uid,
          createdAt: serverTimestamp(),
          claimed: false,
        });

        const link = `${APP_DOMAIN}/claim/${token}`;
        setShareableLink(link);
        setLinkDialogOpen(true);

        notifications.show('Link compartible creado exitosamente', {
          severity: 'success',
          autoHideDuration: 3000,
        });

        reset();
        setCreateShareableLink(false);
      } else {
        // Normal mode: save to user's private collection
        const accountsRef = collection(db, 'users', user.uid, 'bankAccounts');
        await addDoc(accountsRef, {
          ...data,
          userId: user.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        notifications.show('Cuenta bancaria guardada exitosamente', {
          severity: 'success',
          autoHideDuration: 3000,
        });

        reset();
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Error saving bank account:', error);
      notifications.show('Error al guardar la cuenta bancaria', {
        severity: 'error',
        autoHideDuration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareableLink);
        notifications.show('Link copiado al portapapeles', {
          severity: 'success',
          autoHideDuration: 2000,
        });
      }
    } catch (error) {
      notifications.show('Error al copiar link', { severity: 'error' });
    }
  };

  const handleCloseDialog = () => {
    setLinkDialogOpen(false);
    setShareableLink('');
  };

  return (
    <Container maxWidth="md">
      <meta name="title" content="Agregar Cuenta Bancaria" />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography  sx={{
                lg: { fontSize: '2.5rem' },
                md: { fontSize: '2rem' },
                sm: { fontSize: '1.5rem' },
                xs: { fontSize: '1.2rem' },
              }}>
                Agregar Cuenta Bancaria
              </Typography>
              <Button
                variant="outlined"
                size="small"
                startIcon={<ContentPasteIcon />}
                onClick={handlePasteFromClipboard}
                disabled={loading}
              >
                Pegar
              </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Ingresa los datos de tu cuenta bancaria o pega desde el portapapeles
            </Typography>

            {userIsAdmin && (
              <Box sx={{ mb: 3 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={createShareableLink}
                      onChange={(e) => setCreateShareableLink(e.target.checked)}
                      disabled={loading}
                    />
                  }
                  label="Crear link compartible (para pagos en efectivo)"
                />
                {createShareableLink && (
                  <Alert severity="info" sx={{ mt: 2 }}>
                    El link generado permitirá al cliente acceder a su código QR sin necesidad de crear una cuenta.
                  </Alert>
                )}
              </Box>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Nombre Completo"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      disabled={loading}
                      placeholder="Ej: Paola Constanza Sepúlveda Zepeda"
                    />
                  )}
                />

                <Controller
                  name="rut"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="RUT"
                      error={!!errors.rut}
                      helperText={errors.rut?.message || 'Sin puntos ni guión'}
                      disabled={loading}
                      placeholder="Ej: 181055049"
                    />
                  )}
                />

                <Controller
                  name="bankOrPlatform"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Banco o Plataforma"
                      error={!!errors.bankOrPlatform}
                      helperText={errors.bankOrPlatform?.message}
                      disabled={loading}
                    >
                      {CHILEAN_BANKS.map((bank) => (
                        <MenuItem key={bank} value={bank}>
                          {bank}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <Controller
                  name="accountType"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Tipo de Cuenta"
                      error={!!errors.accountType}
                      helperText={errors.accountType?.message}
                      disabled={loading}
                    >
                      {ACCOUNT_TYPES.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <Controller
                  name="accountNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Número de Cuenta"
                      error={!!errors.accountNumber}
                      helperText={errors.accountNumber?.message}
                      disabled={loading}
                      placeholder="Ej: 1031117310"
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      type="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      disabled={loading}
                      placeholder="Ej: ejemplo@gmail.com"
                    />
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<SaveIcon />}
                  disabled={loading}
                >
                  {loading ? 'Guardando...' : 'Guardar Cuenta'}
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>

      {/* Shareable Link Dialog */}
      <Dialog open={linkDialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LinkIcon />
            <Typography variant="h6">Link Compartible Generado</Typography>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Alert severity="success" sx={{ mb: 2 }}>
            Envía este link al cliente. Podrá acceder a su código QR en cualquier momento.
          </Alert>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              fullWidth
              value={shareableLink}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <IconButton onClick={handleCopyLink} color="primary">
              <ContentCopyIcon />
            </IconButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

function BankAccountForm() {
  return (
    <ProtectedRoute>
      <BankAccountFormContent />
    </ProtectedRoute>
  );
}

export default BankAccountForm;