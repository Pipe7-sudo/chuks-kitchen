import { User, ShoppingBag, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  { icon: <ShoppingBag size={20} />, label: 'My Orders', to: '/orders' },
  { icon: <Settings size={20} />, label: 'Account Settings', to: '/profile/settings' },
];

const Profile = () => {
  return (
    <main className="min-h-screen bg-neutral-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-6 flex items-center gap-5">
          {/* Avatar */}
          {/* TODO: Replace with actual user avatar from /images/avatar.jpg */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
            <img
              src="/images/avatar.jpg"
              alt="User avatar"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <User size={36} className="text-primary" />
          </div>
          <div>
            <h1 className="text-dark font-bold text-xl">Welcome, User!</h1>
            <p className="text-neutral-muted text-sm">user@example.com</p>
            <Link to="/signin" className="text-accent text-xs font-semibold hover:underline mt-1 block">
              Sign In / Create Account
            </Link>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-6">
          {MENU_ITEMS.map(({ icon, label, to }, idx) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-neutral-bg text-dark transition-colors ${
                idx < MENU_ITEMS.length - 1 ? 'border-b border-neutral-border' : ''
              }`}
            >
              <span className="text-primary">{icon}</span>
              <span className="text-dark font-medium text-sm flex-1">{label}</span>
              <ChevronRight size={16} className="text-neutral-muted" />
            </Link>
          ))}
        </div>

        {/* Sign out */}
        <button className="w-full flex items-center gap-3 justify-center bg-white rounded-2xl shadow-card px-6 py-4 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </main>
  );
};

export default Profile;
