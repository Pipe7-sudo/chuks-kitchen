import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="text-3xl text-primary leading-none block mb-3"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
            <p className="text-neutral-muted text-sm leading-relaxed">
           Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Facebook" className="text-neutral-muted hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-neutral-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-neutral-muted hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'Menu', 'Cart', 'Orders', 'Profile'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-neutral-muted hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Help</h3>
            <ul className="space-y-2.5">
              {['FAQ', 'Track Order', 'Return Policy', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-muted hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-muted text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                12 Kitchen Road, Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3 text-neutral-muted text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                +234 800 000 0000
              </li>
              <li className="flex items-center gap-3 text-neutral-muted text-sm">
                <Mail size={16} className="text-primary shrink-0" />
                hello@chukskitchen.ng
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-neutral-muted text-xs">
            © {new Date().getFullYear()} Chuks Kitchen. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-neutral-muted hover:text-primary text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-muted hover:text-primary text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;