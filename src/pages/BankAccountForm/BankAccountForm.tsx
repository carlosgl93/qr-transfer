import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useNavigate } from 'react-router';
import { useNotifications } from '@toolpad/core/useNotifications';
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { bankAccountSchema, BankAccountFormData } from './schema';

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

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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

  const parseClipboardData = (text: string): Partial<BankAccountFormData> | null => {
    try {
      const lines = text.split('\n').map(line => line.trim()).filter(line => line);
      const parsed: Partial<BankAccountFormData> = {};

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for RUT
        if (line.toLowerCase().includes('rut:')) {
          parsed.rut = line.split(':')[1]?.trim() || '';
        }
        // Check for account number
        else if (line.toLowerCase().includes('número de cuenta:') || line.toLowerCase().includes('numero de cuenta:')) {
          parsed.accountNumber = line.split(':')[1]?.trim() || '';
        }
        // Check for email
        else if (line.includes('@')) {
          parsed.email = line;
        }
        // Check if line is a bank (matches CHILEAN_BANKS)
        else if (CHILEAN_BANKS.some(bank => bank.toLowerCase() === line.toLowerCase())) {
          parsed.bankOrPlatform = line;
        }
        // Check if line is an account type
        else if (ACCOUNT_TYPES.some(type => type.toLowerCase() === line.toLowerCase())) {
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
      
      // Add to user's private collection
      const accountsRef = collection(db, 'users', user.uid, 'bankAccounts');
      const docRef = await addDoc(accountsRef, {
        ...data,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      // Also add to public sharedAccounts collection for QR scanning (with same ID)
      await setDoc(doc(db, 'sharedAccounts', docRef.id), {
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

  return (
    <Container maxWidth="md">
      <meta name="title" content="Agregar Cuenta Bancaria" />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h4" component="h1">
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
