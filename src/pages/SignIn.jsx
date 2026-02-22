import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../components/common/Button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to authentication API
    console.log('Sign in:', { email, password });
  };

  return (
    <main className="min-h-screen bg-neutral-bg flex">
      {/* Left — decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* TODO: Replace with actual hero food image from /images/hero-bg.jpg */}
        <img
          src="/images/hero-bg.jpg"
          alt="Delicious Nigerian food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-deep/70" />
        <div className="relative z-10 flex flex-col justify-center px-14">
          <span
            className="text-5xl text-primary mb-4 leading-none"
            style={{ fontFamily: '"Island Moments", cursive' }}
          >
            Chuks Kitchen
          </span>
          <p className="text-white text-2xl font-bold leading-snug mb-2">The Heart of Nigerian<br />Home Cooking</p>
          <p className="text-white/70 text-base">Handcrafted with passion, delivered with care.</p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-1 items-center justify-center px-6 py-14">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <span
              className="text-4xl text-primary"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8">
            <h1 className="text-dark font-bold text-2xl mb-1">Welcome back</h1>
            <p className="text-neutral-muted text-sm mb-7">Sign in to your account</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-dark-body font-semibold text-sm block mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-dark-body font-semibold text-sm block mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-placeholder hover:text-dark transition-colors"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <a href="#" className="text-accent text-xs font-medium mt-1.5 block text-right hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="accent" size="lg" fullWidth>
                Sign In
              </Button>
            </form>

            <p className="text-center text-neutral-muted text-sm mt-6">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="text-accent font-semibold hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
