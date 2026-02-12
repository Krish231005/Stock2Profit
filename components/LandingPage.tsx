
import React from 'react';
import { 
  TrendingUp, 
  Package, 
  CreditCard, 
  Users, 
  Bell, 
  ShieldCheck, 
  ArrowRight,
  TrendingUpDown
} from 'lucide-react';

interface LandingPageProps {
  onStartTrial: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartTrial, onLogin }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-emerald-600 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
              <TrendingUpDown size={20} className="text-white" />
            </div>
            <span className="text-slate-800 font-bold text-xl tracking-tight">Stock2<span className="text-emerald-600">Profit</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="text-slate-600 font-medium hover:text-slate-900 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onStartTrial}
              className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-sm active:scale-95"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Manage Your Inventory <br />
            <span className="text-emerald-600">Boost Your Profit</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Streamline your sales, inventory, and billing with our powerful platform designed to turn your stock into maximum profit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onStartTrial}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg active:scale-95"
            >
              Get Started Now
            </button>
            <button className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features for Your Growth</h2>
            <p className="text-slate-500">The tools you need to transition from stock management to profit generation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="text-emerald-600" size={32} />}
              title="Sales Management"
              description="Track every transaction and gain insights into your best-performing products in real-time."
            />
            <FeatureCard 
              icon={<Package className="text-emerald-600" size={32} />}
              title="Inventory Optimization"
              description="Automated tracking ensures you never run out of top sellers or tie up capital in dead stock."
            />
            <FeatureCard 
              icon={<CreditCard className="text-emerald-600" size={32} />}
              title="Instant Billing"
              description="Generate professional invoices and receipts in seconds, ensuring your cash flow stays healthy."
            />
            <FeatureCard 
              icon={<Users className="text-emerald-600" size={32} />}
              title="Supplier Network"
              description="Centralize your supply chain contacts and purchase orders for seamless restock operations."
            />
            <FeatureCard 
              icon={<Bell className="text-emerald-600" size={32} />}
              title="Proactive Alerts"
              description="Smart notifications for low stock, pending payments, and critical business milestones."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-emerald-600" size={32} />}
              title="Secure Data"
              description="Rest easy knowing your financial and inventory data is protected by enterprise-grade encryption."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Path to Profit</h2>
            <p className="text-slate-500">Simplicity is at the core of our platform</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <StepCard number="01" title="Onboard" description="Set up your account and define your business parameters in minutes." />
            <StepCard number="02" title="Catalog Stock" description="Import your existing inventory and organize it by category and SKU." />
            <StepCard number="03" title="Process Sales" description="Use our intuitive dashboard to handle daily sales and generate bills." />
            <StepCard number="04" title="Analyze & Grow" description="Use automated reports to identify profit trends and scale your operations." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Stop Just Managing. Start Profiting.</h2>
          <p className="text-emerald-100 mb-10 text-xl">Join the community of efficient businesses using Stock2Profit.</p>
          <button 
            onClick={onStartTrial}
            className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center gap-2 mx-auto active:scale-95 shadow-xl"
          >
            Join Stock2Profit
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-8 pb-12">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1 rounded-lg">
                <TrendingUpDown size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">Stock2<span className="text-emerald-500">Profit</span></span>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Company</a>
              <a href="#" className="hover:text-white">Resources</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2026 Stock2Profit. Streamlined Business Excellence.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="text-center group">
    <div className="relative inline-block mb-6">
      <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
        {number}
      </div>
      {number !== "04" && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
      )}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed px-4">{description}</p>
  </div>
);

export default LandingPage;
