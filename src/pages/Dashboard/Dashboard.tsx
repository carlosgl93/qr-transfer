import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCodeIcon from '@mui/icons-material/QrCode';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { useNotifications } from '@toolpad/core/useNotifications';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';

import Loading from '@/components/Loading';
import ProtectedRoute from '@/components/ProtectedRoute';
import { db } from '@/config/firebase';
import { useAuth } from '@/hooks/useAuth';
import { BankAccount } from '@/types/bank-account';

function DashboardContent() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const notifications = useNotifications();
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchAccounts = async () => {
      try {
        const accountsRef = collection(db, 'users', user.uid, 'bankAccounts');
        const q = query(accountsRef);
        const querySnapshot = await getDocs(q);

        const fetchedAccounts: BankAccount[] = [];
        querySnapshot.forEach((doc) => {
          fetchedAccounts.push({
            id: doc.id,
            ...doc.data(),
          } as BankAccount);
        });

        setAccounts(fetchedAccounts);
      } catch (error) {
        console.error('Error fetching accounts:', error);
        notifications.show('Error al cargar las cuentas', { severity: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [user, notifications]);

  const handleDelete = async (accountId: string) => {
    if (!user || !accountId) return;

    if (!window.confirm('¿Estás seguro de eliminar esta cuenta?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'users', user.uid, 'bankAccounts', accountId));
      setAccounts(accounts.filter((acc) => acc.id !== accountId));
      notifications.show('Cuenta eliminada', {
        severity: 'success',
        autoHideDuration: 3000,
      });
    } catch (error) {
      console.error('Error deleting account:', error);
      notifications.show('Error al eliminar la cuenta', { severity: 'error' });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg">
      <meta name="title" content="Mis Cuentas Bancarias" />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h4" component="h1">
            Mis Cuentas Bancarias
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/add-account')}
          >
            Agregar Cuenta
          </Button>
        </Stack>

        {accounts.length === 0 ? (
          <Alert severity="info">
            No tienes cuentas bancarias registradas. Haz clic en "Agregar Cuenta" para comenzar.
          </Alert>
        ) : (
          <Grid container spacing={3}>
            {accounts.map((account) => (
              <Grid item xs={12} md={6} key={account.id}>
                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Typography variant="h6" component="h2">
                          {account.fullName}
                        </Typography>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDelete(account.id!)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>

                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          RUT: {account.rut}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {account.bankOrPlatform}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {account.accountType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Cuenta: {account.accountNumber}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {account.email}
                        </Typography>
                      </Box>

                      <Button
                        variant="outlined"
                        startIcon={<QrCodeIcon />}
                        onClick={() => navigate(`/qr/${account.id}`)}
                        fullWidth
                      >
                        Ver Código QR
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

export default Dashboard;
