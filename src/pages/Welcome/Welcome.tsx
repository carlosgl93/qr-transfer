import { useNavigate } from 'react-router';

import QrCodeIcon from '@mui/icons-material/QrCode2';
import SecurityIcon from '@mui/icons-material/Security';
import ShareIcon from '@mui/icons-material/Share';
import SpeedIcon from '@mui/icons-material/Speed';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

import { useAuth } from '@/hooks/useAuth';

function Welcome() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <meta name="title" content="QR Transfer - Comparte tus datos bancarios fácilmente" />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Stack spacing={6} alignItems="center" sx={{ mb: 8, mt: 4 }}>
            <QrCodeIcon sx={{ fontSize: 80, color: 'white' }} />

            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Comparte tus datos bancarios con un código QR
            </Typography>

            <Typography
              variant="h5"
              align="center"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '800px',
                fontWeight: 300,
              }}
            >
              Olvídate de escribir números largos de cuenta. Genera tu código QR y compártelo
              fácilmente cuando te transfieran dinero.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s',
              }}
            >
              {user ? 'Ir a Mis Cuentas' : 'Comenzar Gratis'}
            </Button>
          </Stack>

          {/* Features Section */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <QrCodeIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    Código QR Simple
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genera tu QR en segundos con tus datos bancarios chilenos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <ShareIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    Comparte Fácil
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descarga el QR y compártelo por WhatsApp, email o redes sociales
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <SpeedIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    Rápido y Sencillo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sin apps complicadas. Escanean el QR y copian tus datos al instante
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <SecurityIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    Seguro y Privado
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tus datos están seguros con Firebase y solo tú controlas quién los ve
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* How it Works Section */}
          <Card sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', mb: 4 }}>
            <CardContent sx={{ p: 6 }}>
              <Typography variant="h4" align="center" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                ¿Cómo funciona?
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: '#667eea',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      1
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      Crea tu cuenta
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Ingresa tus datos bancarios (RUT, banco, número de cuenta)
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: '#667eea',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      2
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      Genera tu QR
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      El sistema crea automáticamente tu código QR personalizado
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: '#667eea',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      3
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      Comparte
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Descarga el QR y compártelo cuando te vayan a transferir
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h4" align="center" sx={{ color: 'white', fontWeight: 600 }}>
              ¿Listo para simplificar tus transferencias?
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              {user ? 'Ir a Dashboard' : 'Crear Mi QR Gratis'}
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Welcome;
