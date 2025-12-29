import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router';
import { useNotifications } from '@toolpad/core/useNotifications';
import { useAuth } from '@/hooks/useAuth';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp, signInWithGoogle, loading, error } = useAuth();
  const navigate = useNavigate();
  const notifications = useNotifications();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
        notifications.show('Cuenta creada exitosamente', {
          severity: 'success',
          autoHideDuration: 3000,
        });
      } else {
        await signIn(email, password);
        notifications.show('Sesión iniciada', {
          severity: 'success',
          autoHideDuration: 3000,
        });
      }
      navigate('/dashboard');
    } catch (err) {
      // Error is already set in useAuth
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      notifications.show('Sesión iniciada con Google', {
        severity: 'success',
        autoHideDuration: 3000,
      });
      navigate('/dashboard');
    } catch (err) {
      // Error is already set in useAuth
    }
  };

  return (
    <Container maxWidth="sm">
      <meta name="title" content="Iniciar Sesión" />
      <Box sx={{ mt: 8, mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
              {isSignUp
                ? 'Crea tu cuenta para generar códigos QR'
                : 'Ingresa para gestionar tus cuentas bancarias'}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Stack spacing={2}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleSignIn}
                disabled={loading}
                size="large"
              >
                Continuar con Google
              </Button>

              <Divider>O</Divider>

              <form onSubmit={handleEmailAuth}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <TextField
                    fullWidth
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    helperText={isSignUp ? 'Mínimo 6 caracteres' : ''}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    size="large"
                  >
                    {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
                  </Button>
                </Stack>
              </form>

              <Button
                fullWidth
                variant="text"
                onClick={() => setIsSignUp(!isSignUp)}
                disabled={loading}
              >
                {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;
