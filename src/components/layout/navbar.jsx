import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Mock cart count 
  const cartItemCount = 3;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
           <span
              className="text-2xl lg:text-4xl text-[#FF7A18] leading-none"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-24">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-[#FF7A18]  ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-[#FF7A18]  ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-[#FF7A18] ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-[##FF7A18] ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
            >
              Profile
            </NavLink>
          </div>

          {/* login button */}
          <div className="hidden md:flex items-center space-x-4">
          <Link to='/signin'>
          <button
          className='bg-[#FF7A18] px-8 py-2 text-md text-white rounded-xl'>Login</button>
          </Link>
          </div>

          {/* Mobile Menu Button  */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none  rounded-lg  transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/orders"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/profile"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
