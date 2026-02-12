
import React, { useEffect, useState } from 'react';
import { 
  IndianRupee, 
  ShoppingCart, 
  Package, 
  AlertTriangle, 
  ArrowRight,
  RefreshCcw
} from 'lucide-react';
import { Activity, Alert } from '../types';

const MOCK_ACTIVITY: Activity[] = [
  { id: '1', customer: 'John Doe', product: 'Premium Laptop', amount: 1299.00, date: '2024-03-15', status: 'Completed' },
  { id: '2', customer: 'Alice Smith', product: 'Wireless Keyboard', amount: 45.99, date: '2024-03-15', status: 'Completed' },
  { id: '3', customer: 'Bob Wilson', product: 'Gaming Monitor', amount: 349.50, date: '2024-03-14', status: 'Pending' },
  { id: '4', customer: 'Sarah Connor', product: 'Office Chair', amount: 189.00, date: '2024-03-14', status: 'Completed' },
  { id: '5', customer: 'Mike Ross', product: 'USB-C Hub', amount: 29.99, date: '2024-03-13', status: 'Canceled' },
];

const MOCK_ALERTS: Alert[] = [
  { id: '1', title: 'Low Stock: Premium Laptop', description: 'Inventory level below threshold (2 left)', type: 'warning', timestamp: '10 min ago' },
  { id: '2', title: 'Payment Overdue', description: 'Invoice #8822 for ABC Corp is 3 days late', type: 'error', timestamp: '1 hour ago' },
  { id: '3', title: 'Supply Arrival', description: '15 units of Gaming Monitors arriving today', type: 'info', timestamp: '2 hours ago' },
];

const ExecutiveDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Dashboard</h1>
          <p className="text-slate-500 mt-1">Overview of key performance indicators.</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-lg bg-white shadow-sm transition-all">
          View Reports <ArrowRight size={16} />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<IndianRupee size={24} />} 
          label="TOTAL REVENUE" 
          value="₹12,450.00" 
          color="border-emerald-500" 
          iconBg="bg-emerald-50" 
          iconColor="text-emerald-600"
          trend="+12.5% from last month"
        />
        <StatCard 
          icon={<ShoppingCart size={24} />} 
          label="TOTAL ORDERS" 
          value="48" 
          color="border-blue-500" 
          iconBg="bg-blue-50" 
          iconColor="text-blue-600"
          trend="+5.2% from last month"
        />
        <StatCard 
          icon={<Package size={24} />} 
          label="ACTIVE INVENTORY" 
          value="122" 
          color="border-indigo-500" 
          iconBg="bg-indigo-50" 
          iconColor="text-indigo-600"
          trend="8 new items added"
        />
        <StatCard 
          icon={<AlertTriangle size={24} />} 
          label="LOW STOCK" 
          value="5" 
          color="border-rose-500" 
          iconBg="bg-rose-50" 
          iconColor="text-rose-600"
          trend="Critical action needed"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Recent Activity</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All Transactions &rarr;</button>
          </div>
          <div className="flex-1 min-h-[300px]">
            {loading ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                <RefreshCcw className="animate-spin" size={32} />
                <p className="font-medium">Loading activity data...</p>
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_ACTIVITY.map(act => (
                    <tr key={act.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800">{act.customer}</td>
                      <td className="px-6 py-4 text-slate-600">{act.product}</td>
                      <td className="px-6 py-4 font-mono font-bold text-slate-900">₹{act.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                          act.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 
                          act.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                        }`}>
                          {act.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{act.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">System Alerts</h3>
          </div>
          <div className="flex-1 p-6 space-y-4">
            {loading ? (
              <div className="h-full flex items-center justify-center text-slate-400">
                <p className="animate-pulse font-medium">Loading alerts...</p>
              </div>
            ) : (
              <>
                {MOCK_ALERTS.map(alert => (
                  <div key={alert.id} className="flex gap-4 group cursor-pointer">
                    <div className={`mt-1 shrink-0 p-1.5 rounded-lg ${
                      alert.type === 'warning' ? 'bg-amber-50 text-amber-600' : 
                      alert.type === 'error' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <AlertTriangle size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{alert.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{alert.description}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 inline-block">
                        {alert.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 py-3 border border-slate-100 rounded-xl text-sm font-bold text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                  View All Alerts
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: string;
  iconBg: string;
  iconColor: string;
  trend?: string;
}> = ({ icon, label, value, color, iconBg, iconColor, trend }) => (
  <div className={`bg-white rounded-xl border-t-4 ${color} p-6 shadow-sm shadow-slate-200/50 hover:shadow-lg hover:-translate-y-1 transition-all group`}>
    <div className="flex items-start justify-between">
      <div>
        <div className="text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase mb-2">{label}</div>
        <div className="text-2xl font-black text-slate-900">{value}</div>
        {trend && (
          <div className="mt-2 text-[10px] font-bold text-slate-400 tracking-tight">{trend}</div>
        )}
      </div>
      <div className={`${iconBg} ${iconColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
    </div>
  </div>
);

export default ExecutiveDashboard;
