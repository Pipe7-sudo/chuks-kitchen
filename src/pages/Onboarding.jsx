import { Link } from 'react-router-dom';
import { UtensilsCrossed, Users, Bike } from 'lucide-react';

const features = [
  { icon: UtensilsCrossed, label: 'Freshly Prepared' },
  { icon: Users,           label: 'Support Local Business' },
  { icon: Bike,            label: 'Fast & Reliable Delivery' },
];

const Onboarding = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* ── Main Panel (Nav + Content) ── */}
        <div className="w-full md:w-[46%] md:order-2 bg-white flex flex-col md:min-h-screen">

          {/* Top bar (Nav) */}
          <div className="flex items-center justify-between px-8 sm:px-10 pt-7">
            <span
              className="text-[1.6rem] text-[#FF7A18] leading-none"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
            <Link
              to="/signin"
              className="text-xs font-medium text-[#1A1A1A] border border-[#D1D5DB] rounded px-4 py-1.5 hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* NEW: Mobile Image - Directly under Nav, Padded */}
          <div className="md:hidden px-8 sm:px-10 pt-6">
            <div className="h-54 sm:h-80 w-full overflow-hidden rounded-2xl">
              <img
                src="/images/meals/1.png"
                alt="Nigerian food spread"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-10 py-10">
            <h1 className="text-[#111827] text-2xl sm:text-3xl font-bold leading-snug mb-3">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              Experience homemade flavors delivered fresh to your desk or home. We
              bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {features.map(({ icon, label }) => {
                const Icon = icon;
                return (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#FFF3E8] flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#FF7A18]" strokeWidth={2} />
                    </span>
                    <span className="text-[#374151] text-xs font-medium">{label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                to="/signup"
                className="w-full bg-[#FF7A18] hover:bg-[#e86a10] active:scale-[0.99] text-white font-semibold py-3.5 rounded-lg text-center text-sm transition-all shadow-[0_2px_10px_rgba(255,122,24,0.35)]"
              >
                Start Your Order
              </Link>
              <Link
                to="/Home"
                className="w-full border border-[#FF7A18] text-[#FF7A18] hover:bg-[#FFF3E8] font-semibold py-3.5 rounded-lg text-center text-sm transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-8 sm:px-10 pb-6 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[#9CA3AF] text-[11px]">
              © {new Date().getFullYear()} Chuks Kitchen.
            </span>
            <div className="flex gap-4">
              <a href="#" className="text-[#6B7280] hover:text-[#FF7A18] text-[11px] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#FF7A18] text-[11px] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* ── Left: Desktop Photo (Hidden on mobile) ── */}
        <div className="hidden md:block md:w-[54%] md:order-1 relative md:min-h-screen">
          <img
            src="/images/hero-bg.png"
            alt="People enjoying Nigerian food"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </main>
  );
};

export default Onboarding;