import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#3B2A2A] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <span
              className="text-3xl text-[#FF7A18] leading-none block mb-4"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
            <p className="text-[#C4A882] text-sm leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',    to: '/' },
                { label: 'Explore', to: '/explore' },
                { label: 'My Order',to: '/orders' },
                { label: 'Account', to: '/account' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[#C4A882] hover:text-[#FF7A18] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Us ── */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#C4A882] text-sm">
                <Phone size={14} className="shrink-0" />
                +234 801 234 5678
              </li>
              <li className="flex items-center gap-2 text-[#C4A882] text-sm">
                <Mail size={14} className="shrink-0" />
                hello@chukskitchen.com
              </li>
              <li className="flex items-start gap-2 text-[#C4A882] text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                123 Taste Blvd, Lagos, Nigeria
              </li>
            </ul>
          </div>

          {/* ── Social Links ── */}
          <div>
            <ul className="space-y-2.5">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    aria-label={platform}
                    className="text-[#C4A882] hover:text-[#FF7A18] text-sm transition-colors"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Dashed Divider ── */}
      <div className="border-t border-dashed border-[#7B4EA0]/60" />

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <p className="text-[#C4A882] text-xs">
          © {new Date().getFullYear()} Lift Media. All rights reserved.
        </p>

        {/* Scroll to top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#0081FE] hover:bg-[#e86a10] flex items-center justify-center transition-colors shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} strokeWidth={2.5} className="text-white" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;