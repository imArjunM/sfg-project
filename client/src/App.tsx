import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import LandingLogin from '@/pages/LandingLogin';
import SuperAdminDashboard from '@/pages/SuperAdminDashboard';
import UserManagement from '@/pages/UserManagement';
import ScenarioPlanning from '@/pages/ScenarioPlanning';
import ScenarioRetreat from '@/pages/ScenarioRetreat';
import ReportsLibrary from '@/pages/ReportsLibrary';
import Settings from '@/pages/Settings';

// Admin Pages
import GameRequests from '@/pages/admin/GameRequests';
import GameRequestDetail from '@/pages/admin/GameRequestDetail';
import AdminScenarioPlanning from '@/pages/admin/AdminScenarioPlanning';
import AdminScenarioRetreat from '@/pages/admin/AdminScenarioRetreat';
import AdminReports from '@/pages/admin/AdminReports';

// Game Master Pages
import GMDashboard from '@/pages/gm/GMDashboard';
import GMGameRequests from '@/pages/gm/GMGameRequests';
import GMGameList from '@/pages/gm/GMGameList';
import GMActiveGame from '@/pages/gm/GMActiveGame';
import GMReports from '@/pages/gm/GMReports';

// Player Pages
import PlayerDashboard from '@/pages/player/PlayerDashboard';
import PlayerScenarioList from '@/pages/player/PlayerScenarioList';
import PlayerActiveGame from '@/pages/player/PlayerActiveGame';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import { TourProvider } from './contexts/TourContext';
import Landing from './pages/Landing';
import Configurations from './pages/Configurations';
import LandingForgotPassword from './pages/ForgotPassword';
import LandingOtpVerification from './pages/LandingVerification';
import LandingResetPassword from './pages/LandingResetPassword';
import GMDashboard1 from './pages/gm/GMDashboard1';

function Router() {
  return (
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/login' component={LandingLogin} />
      <Route path='/forgot' component={LandingForgotPassword} />
      <Route path='/verify' component={LandingOtpVerification} />
      <Route path='/reset' component={LandingResetPassword} />

      {/* Super Admin Routes */}
      <Route path='/dashboard' component={SuperAdminDashboard} />
      <Route path='/users' component={UserManagement} />
      <Route path='/scenarios' component={ScenarioPlanning} />
      <Route path='/retreats' component={ScenarioRetreat} />
      <Route path='/reports' component={ReportsLibrary} />
      <Route path='/configuration' component={Configurations} />
      <Route path='/settings' component={Settings} />

      {/* Admin (SFD) Routes */}
      <Route path='/admin/dashboard' component={SuperAdminDashboard} />
      <Route path='/admin/users' component={UserManagement} />
      <Route path='/admin/game-requests' component={GameRequests} />
      <Route path='/admin/game-requests/:id' component={GameRequestDetail} />
      <Route path='/admin/scenarios' component={AdminScenarioPlanning} />
      <Route path='/admin/retreats' component={AdminScenarioRetreat} />
      <Route path='/admin/reports' component={AdminReports} />
      <Route path='/admin/configuration' component={Configurations} />

      {/* Game Master Routes */}
      <Route path='/gm/dashboard' component={GMDashboard} />
      <Route path='/gm/dashboard1' component={GMDashboard1} />
      <Route path='/gm/requests' component={GMGameRequests} />
      <Route path='/gm/games' component={GMGameList} />
      <Route path='/gm/games/:id' component={GMActiveGame} />
      <Route path='/gm/reports' component={GMReports} />

      {/* Player Routes */}
      <Route path='/player/dashboard' component={PlayerDashboard} />
      <Route path='/player/scenarios' component={PlayerScenarioList} />
      <Route path='/player/game/:id' component={PlayerActiveGame} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <GameProvider>
            <TourProvider>
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </TourProvider>
          </GameProvider>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
