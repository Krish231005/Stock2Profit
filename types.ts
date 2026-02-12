
export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
  INVENTORY = 'INVENTORY',
  SALES = 'SALES',
  BILLING = 'BILLING',
  SUPPLIERS = 'SUPPLIERS',
  REPORTS = 'REPORTS',
  PROFILE = 'PROFILE',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP'
}

export interface Activity {
  id: string;
  customer: string;
  product: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Canceled';
}

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  price: number;
  category: string;
  sku: string;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'warning' | 'error' | 'info';
  timestamp: string;
}
