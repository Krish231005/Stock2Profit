
import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import InventoryView from './components/InventoryView';
import AuthView from './components/AuthView';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

  const navigateTo = useCallback((view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case AppView.LANDING:
        return (
          <LandingPage 
            onStartTrial={() => navigateTo(AppView.SIGNUP)} 
            onLogin={() => navigateTo(AppView.LOGIN)} 
          />
        );
      case AppView.LOGIN:
        return (
          <AuthView 
            mode="login" 
            onAuthSuccess={() => navigateTo(AppView.DASHBOARD)} 
            onSwitch={() => navigateTo(AppView.SIGNUP)}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        );
      case AppView.SIGNUP:
        return (
          <AuthView 
            mode="signup" 
            onAuthSuccess={() => navigateTo(AppView.DASHBOARD)} 
            onSwitch={() => navigateTo(AppView.LOGIN)}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        );
      case AppView.DASHBOARD:
        return (
          <DashboardLayout currentView={currentView} onNavigate={navigateTo}>
            <ExecutiveDashboard />
          </DashboardLayout>
        );
      case AppView.INVENTORY:
        return (
          <DashboardLayout currentView={currentView} onNavigate={navigateTo}>
            <InventoryView />
          </DashboardLayout>
        );
      default:
        return (
          <DashboardLayout currentView={currentView} onNavigate={navigateTo}>
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Under Construction</h2>
              <p className="text-gray-500">The {currentView.toLowerCase()} module is coming soon.</p>
              <button 
                onClick={() => navigateTo(AppView.DASHBOARD)}
                className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
              >
                Return to Dashboard
              </button>
            </div>
          </DashboardLayout>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
