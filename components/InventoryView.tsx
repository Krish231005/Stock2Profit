
import React, { useState } from 'react';
import { Search, Plus, Filter, Download, Package } from 'lucide-react';
import { InventoryItem } from '../types';

const MOCK_INVENTORY: InventoryItem[] = [
  { id: '1', name: 'Premium Laptop', stock: 5, price: 1299.00, category: 'Electronics', sku: 'ELC-001' },
  { id: '2', name: 'Wireless Keyboard', stock: 45, price: 45.99, category: 'Accessories', sku: 'ACC-012' },
  { id: '3', name: 'Gaming Monitor', stock: 12, price: 349.50, category: 'Electronics', sku: 'ELC-005' },
  { id: '4', name: 'Office Chair', stock: 8, price: 189.00, category: 'Furniture', sku: 'FUR-002' },
  { id: '5', name: 'USB-C Hub', stock: 62, price: 29.99, category: 'Accessories', sku: 'ACC-008' },
  { id: '6', name: 'Standing Desk', stock: 3, price: 499.00, category: 'Furniture', sku: 'FUR-009' },
  { id: '7', name: 'Webcam 4K', stock: 18, price: 89.00, category: 'Electronics', sku: 'ELC-021' },
];

const InventoryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Accessories', 'Furniture'];

  const filteredItems = MOCK_INVENTORY.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Inventory Control</h1>
          <p className="text-slate-500 mt-1">Manage stock levels and product catalog.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all">
            <Download size={18} /> Export
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            <Plus size={18} /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="p-2.5 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-4 py-4 rounded-l-xl">Product</th>
                <th className="px-4 py-4">SKU</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Stock Level</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4 rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                        <Package size={20} />
                      </div>
                      <span className="font-bold text-slate-800">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-500 font-mono text-xs">{item.sku}</td>
                  <td className="px-4 py-4">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            item.stock < 10 ? 'bg-rose-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min((item.stock / 50) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-bold ${item.stock < 10 ? 'text-rose-600' : 'text-slate-700'}`}>
                        {item.stock} units
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-bold text-slate-900">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-4">
                    <button className="text-blue-600 font-bold hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredItems.length === 0 && (
            <div className="py-20 text-center text-slate-400">
              <Package size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium">No products found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
