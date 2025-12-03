import { lazy } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';

// Direct imports for critical/frequently accessed pages (faster loading)
import SignupDirect from './pages/Signup';
import LoginDirect from './pages/Login';
import DashboardDirect from './pages/Dashboard';
import PermissionsSetupDirect from './pages/PermissionsSetup';
import WelcomeDirect from './pages/Welcome';
import CryAnalysisDirect from './pages/CryAnalysis'; // Load directly for better performance

// Lazy load less frequently accessed pages
const BabyManagement = lazy(() => import('./pages/BabyManagement'));
const IoTNursery = lazy(() => import('./pages/IoTNursery'));
const MemoryAlbum = lazy(() => import('./pages/MemoryAlbum'));
const AuroraGuide = lazy(() => import('./pages/AuroraGuide'));
const Admin = lazy(() => import('./pages/Admin'));
const FeedbackPage = lazy(() => import('./pages/Feedback'));

interface RouteConfig {
  name: string;
  path: string;
  component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  visible?: boolean;
  requiresAuth?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Welcome',
    path: '/welcome',
    component: WelcomeDirect,
    visible: false,
    requiresAuth: false,
  },
  {
    name: 'Dashboard',
    path: '/',
    component: DashboardDirect,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginDirect,
    visible: false,
    requiresAuth: false,
  },
  {
    name: 'Sign Up',
    path: '/signup',
    component: SignupDirect,
    visible: false,
    requiresAuth: false,
  },
  {
    name: 'Permissions Setup',
    path: '/permissions-setup',
    component: PermissionsSetupDirect,
    visible: false,
    requiresAuth: true,
  },
  {
    name: 'Baby Profiles',
    path: '/babies',
    component: BabyManagement,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Cry Analysis',
    path: '/cry-analysis',
    component: CryAnalysisDirect,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'IoT Nursery',
    path: '/iot-nursery',
    component: IoTNursery,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Memory Album',
    path: '/memory-album',
    component: MemoryAlbum,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Aurora Guide-X',
    path: '/aurora-guide',
    component: AuroraGuide,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Feedback',
    path: '/feedback',
    component: FeedbackPage,
    visible: true,
    requiresAuth: true,
  },
  {
    name: 'Admin',
    path: '/admin',
    component: Admin,
    visible: false,
    requiresAuth: true,
  },
];

export default routes;
