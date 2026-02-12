
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  BarChart3, 
  UserCircle,
  LogOut,
  ChevronRight,
  Activity,
  TrendingUpDown
} from 'lucide-react';
import { AppView } from '../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentView, onNavigate }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: AppView.INVENTORY, label: 'Inventory', icon: <Package size={20} /> },
    { id: AppView.SALES, label: 'Sales Panel', icon: <ShoppingCart size={20} /> },
    { id: AppView.BILLING, label: 'Billing', icon: <CreditCard size={20} /> },
    { id: AppView.SUPPLIERS, label: 'Suppliers', icon: <Truck size={20} /> },
    { id: AppView.REPORTS, label: 'Reports', icon: <BarChart3 size={20} /> },
    { id: AppView.PROFILE, label: 'Profile', icon: <UserCircle size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2333] text-slate-400 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-lg shadow-lg shadow-emerald-900/20">
            <TrendingUpDown size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg leading-none tracking-tight">Stock2<span className="text-emerald-500">Profit</span></span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Management</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          <div className="px-6 mb-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            Operations
          </div>
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  currentView === item.id 
                    ? 'bg-emerald-600/10 text-white' 
                    : 'hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <span className={currentView === item.id ? 'text-emerald-500' : ''}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => onNavigate(AppView.LANDING)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-slate-200 transition-all"
          >
            <Activity size={18} />
            System Live
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center text-xs text-slate-400 font-medium">
            <span>Home</span>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-slate-600 capitalize">{currentView.toLowerCase()}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">krish</div>
                <div className="text-[10px] font-medium text-emerald-600 uppercase tracking-wider">Administrator</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden ring-2 ring-slate-50">
                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=krish&backgroundColor=10b981`} alt="avatar" />
              </div>
            </div>
            <button 
              onClick={() => onNavigate(AppView.LANDING)}
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-semibold"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </header>

        {/* Dynamic View Scroll Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
