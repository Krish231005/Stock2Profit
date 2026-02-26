
import React, { useState, useMemo } from 'react';
import { ShoppingCart, User, Package, Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface LineItem {
  id: string;
  product: string;
  qty: number;
  rate: number;
  amount: number;
}

const SalesView: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  
  const [productName, setProductName] = useState('');
  const [rate, setRate] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  
  const [lineItems, setLineItems] = useState<LineItem[]>([]);

  const currentTotal = useMemo(() => rate * qty, [rate, qty]);
  
  const grandTotal = useMemo(() => {
    return lineItems.reduce((sum, item) => sum + item.amount, 0);
  }, [lineItems]);

  const addLineItem = () => {
    if (!productName || qty <= 0 || rate <= 0) return;
    
    const newItem: LineItem = {
      id: Math.random().toString(36).substr(2, 9),
      product: productName,
      qty,
      rate,
      amount: currentTotal
    };
    
    setLineItems([...lineItems, newItem]);
    
    // Reset entry fields
    setProductName('');
    setRate(0);
    setQty(0);
  };

  const removeLineItem = (id: string) => {
    setLineItems(lineItems.filter(item => item.id !== id));
  };

  const processTransaction = () => {
    if (lineItems.length === 0) return;
    alert(`Transaction processed for ${customerName || 'Walk-in Customer'}. Total: ₹${grandTotal.toFixed(2)}`);
    // Reset everything
    setLineItems([]);
    setCustomerName('');
    setCustomerEmail('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Sales Panel</h1>
          <p className="text-slate-500 mt-1">Create new invoices and process transactions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Forms */}
        <div className="lg:col-span-4 space-y-6">
          {/* Customer Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <User size={20} className="text-slate-400" />
                Customer Details
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  placeholder="Customer Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="Customer Email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Order Entry Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <ShoppingCart size={20} className="text-slate-400" />
                Order Entry
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search Product..."
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rate</label>
                  <input 
                    type="number" 
                    value={rate || ''}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Qty</label>
                  <input 
                    type="number" 
                    value={qty || ''}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total</label>
                  <div className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm font-bold text-slate-600">
                    {currentTotal.toFixed(0)}
                  </div>
                </div>
              </div>

              <button 
                onClick={addLineItem}
                disabled={!productName || qty <= 0 || rate <= 0}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={18} />
                Add Line Item
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Invoice Draft */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full min-h-[600px]">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Invoice Draft</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#1a2333] text-slate-300 font-bold uppercase tracking-wider text-[10px]">
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4 text-center">Qty</th>
                    <th className="px-6 py-4 text-right">Rate</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center w-16"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {lineItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-bold text-slate-800">{item.product}</td>
                      <td className="px-6 py-4 text-center text-slate-600 font-medium">{item.qty}</td>
                      <td className="px-6 py-4 text-right text-slate-600 font-medium">₹{item.rate.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900">₹{item.amount.toFixed(2)}</td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => removeLineItem(item.id)}
                          className="text-slate-300 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {lineItems.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-32 text-center text-slate-400">
                        <div className="flex flex-col items-center gap-2">
                          <ShoppingCart size={40} className="opacity-10" />
                          <p className="italic font-medium">No items drafted</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-200 mt-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-slate-900">Grand Total</span>
                <span className="text-3xl font-black text-slate-900 tracking-tight">₹{grandTotal.toFixed(0)}</span>
              </div>
              
              <button 
                onClick={processTransaction}
                disabled={lineItems.length === 0}
                className="w-full flex items-center justify-center gap-3 bg-[#1a2333] text-white py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              >
                <CheckCircle2 size={22} />
                Process Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesView;
