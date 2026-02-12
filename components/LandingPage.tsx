
import React from 'react';
import { 
  TrendingUp, 
  Package, 
  CreditCard, 
  Users, 
  Bell, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface LandingPageProps {
  onStartTrial: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartTrial }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 p-1.5 rounded">
              <span className="text-white font-bold text-lg">H5</span>
            </div>
            <span className="text-slate-800 font-bold text-xl tracking-tight">ERP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Sign In</button>
            <button 
              onClick={onStartTrial}
              className="bg-slate-800 text-white px-5 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-sm active:scale-95"
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
            Manage Your Business <br />
            <span className="text-teal-600">All in One Place</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Streamline your sales, inventory, billing, and supply chain operations with our powerful business management platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onStartTrial}
              className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all shadow-lg active:scale-95"
            >
              Start Free Trial
            </button>
            <button className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features for Your Business</h2>
            <p className="text-slate-500">Everything you need to run your business efficiently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="text-teal-600" size={32} />}
              title="Sales Management"
              description="Track and manage all your sales transactions in one place with real-time analytics and reporting."
            />
            <FeatureCard 
              icon={<Package className="text-teal-600" size={32} />}
              title="Inventory Control"
              description="Keep your inventory organized with automated stock tracking, low stock alerts, and efficient management."
            />
            <FeatureCard 
              icon={<CreditCard className="text-teal-600" size={32} />}
              title="Billing System"
              description="Generate professional invoices and bills instantly with customizable templates and automated calculations."
            />
            <FeatureCard 
              icon={<Users className="text-teal-600" size={32} />}
              title="Supply Chain"
              description="Manage suppliers, track orders, and maintain seamless supply chain operations effortlessly."
            />
            <FeatureCard 
              icon={<Bell className="text-teal-600" size={32} />}
              title="Smart Notifications"
              description="Stay updated with instant notifications for important events, low stock, and pending tasks."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-teal-600" size={32} />}
              title="Secure & Reliable"
              description="Your data is protected with enterprise-grade security and automatic backups."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500">Get started in 4 simple steps</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <StepCard number="01" title="Sign Up" description="Create your free account in seconds with email or Google sign-in." />
            <StepCard number="02" title="Set Up Your Business" description="Add your business details, products, and inventory to get started." />
            <StepCard number="03" title="Start Managing" description="Begin tracking sales, managing inventory, and generating reports instantly." />
            <StepCard number="04" title="Grow & Scale" description="Use insights and analytics to make data-driven decisions and scale your business." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-[#0a3d54] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-10 text-xl">Join thousands of businesses already using H5 ERP</p>
          <button 
            onClick={onStartTrial}
            className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-2 mx-auto active:scale-95 shadow-xl"
          >
            Get Started Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-8 pb-12">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded">
                <span className="text-slate-900 font-bold text-sm">H5</span>
              </div>
              <span className="text-white font-bold text-lg">ERP</span>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-white">Dashboard</a>
              <a href="#" className="hover:text-white">Inventory</a>
              <a href="#" className="hover:text-white">Sales</a>
              <a href="#" className="hover:text-white">Bills</a>
              <a href="#" className="hover:text-white">Reports</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2026 H5 ERP. Student Project - Not a business.</p>
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
      <div className="w-16 h-16 bg-[#0a3d54] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
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
