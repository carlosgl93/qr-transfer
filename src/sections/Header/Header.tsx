import { useNavigate } from 'react-router';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';

import { title } from '@/config';
import { useAuth } from '@/hooks/useAuth';
import { useSidebar } from '@/sections/Sidebar/hooks';

function Header() {
  const { open: openSidebar } = useSidebar();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <AppBar position="static" color="transparent" elevation={2} enableColorOnDark>
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" color="info">
              {title}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            {user && (
              <Tooltip title="Cerrar sesión" arrow>
                <IconButton color="info" size="large" onClick={handleSignOut}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
