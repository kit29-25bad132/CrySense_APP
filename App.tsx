import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { BabyProvider } from '@/contexts/BabyContext';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import routes from './routes';
import { Loader2 } from 'lucide-react';

// Enhanced loading fallback component with better visibility
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse-soft" />
          <div className="relative p-4 rounded-full bg-gradient-primary/10">
            <Loader2 className="w-12 h-12 animate-spin text-primary drop-shadow-lg" />
          </div>
        </div>
        <p className="text-base font-medium text-foreground">Loading page...</p>
      </div>
    </div>
  );
}

function AppContent() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Loading SC CrySense v1...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {routes.map((route, index) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.requiresAuth ? (
                      <ProtectedRoute>
                        <Component />
                      </ProtectedRoute>
                    ) : (
                      <Component />
                    )
                  }
                />
              );
            })}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BabyProvider>
        <Router>
          <AppContent />
          <Toaster />
        </Router>
      </BabyProvider>
    </AuthProvider>
  );
}
