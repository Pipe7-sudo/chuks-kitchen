import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = ({ cartCount = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/orders', label: 'Orders' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className="text-4xl text-primary leading-none"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(to)
                    ? 'text-primary border-b-2 border-primary pb-0.5'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-dark hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Sign In */}
            <Link
              to="/signin"
              className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${
                isActive(to) ? 'text-primary' : 'text-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-dark font-medium py-2"
          >
            <ShoppingCart size={20} />
            Cart
            {cartCount > 0 && (
              <span className="bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ml-1">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/signin"
            onClick={() => setMobileOpen(false)}
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
