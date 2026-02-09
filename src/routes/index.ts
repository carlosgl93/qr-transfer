import AddCardIcon from '@mui/icons-material/AddCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
  {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Inicio',
    icon: HomeIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'Iniciar Sesión',
    icon: LoginIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Dashboard')),
    path: '/dashboard',
    title: 'Mis Cuentas',
    icon: DashboardIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/BankAccountForm')),
    path: '/add-account',
    title: 'Agregar Cuenta',
    icon: AddCardIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/QRDisplay')),
    path: '/qr/:accountId',
  },
  {
    component: asyncComponentLoader(() => import('@/pages/ScanLanding')),
    path: '/scan',
  },
  {
    component: asyncComponentLoader(() => import('@/pages/ClaimQR')),
    path: '/claim/:token',
  },
  {
    component: asyncComponentLoader(() => import('@/pages/PaymentSuccess')),
    path: '/payment-success',
  },
  {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
];

export default routes;
