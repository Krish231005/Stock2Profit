
import React, { useState } from 'react';
import { TrendingUpDown, Mail, Lock, User, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

interface AuthViewProps {
  mode: 'login' | 'signup';
  onAuthSuccess: () => void;
  onSwitch: () => void;
  onBack: () => void;
}

const AuthView: React.FC<AuthViewProps> = ({ mode, onAuthSuccess, onSwitch, onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validations
    if (mode === 'signup' && formData.name.trim().length < 2) {
      setError('Please enter your full name');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null); // Clear error on typing
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="p-8 text-center bg-slate-50/50 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200">
                <TrendingUpDown size={24} className="text-white" />
              </div>
              <span className="text-slate-800 font-bold text-2xl tracking-tight">Stock2<span className="text-emerald-600">Profit</span></span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p className="text-slate-500 mt-1 text-sm">
              {mode === 'login' ? 'Please enter your details to sign in.' : 'Join us to start optimizing your business.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100 animate-in fade-in slide-in-from-top-1">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${error?.includes('email') ? 'text-rose-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 text-sm ${
                    error?.includes('email') ? 'border-rose-300 ring-rose-500/10' : 'border-slate-200'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                {mode === 'login' && (
                  <button type="button" className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700">Forgot?</button>
                )}
              </div>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${error?.includes('Password') ? 'text-rose-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 text-sm ${
                    error?.includes('Password') ? 'border-rose-300 ring-rose-500/10' : 'border-slate-200'
                  }`}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Free Account'
              )}
            </button>
          </form>

          <div className="p-6 bg-slate-50/50 text-center border-t border-slate-100">
            <p className="text-sm text-slate-500">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={onSwitch}
                className="text-emerald-600 font-bold hover:underline"
              >
                {mode === 'login' ? 'Sign up for free' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] leading-relaxed">
          By continuing, you agree to our <span className="underline cursor-pointer text-slate-600">Terms of Service</span> and <br/> <span className="underline cursor-pointer text-slate-600">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default AuthView;
