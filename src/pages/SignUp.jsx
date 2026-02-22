import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [showPw, setShowPw] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const pwStrong = form.password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to registration API
    console.log('Sign up:', form);
  };

  return (
    <main className="min-h-screen bg-neutral-bg flex">
      {/* Left panel */}
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
          <p className="text-white text-2xl font-bold leading-snug mb-2">Join the Family</p>
          <p className="text-white/70 text-base">Create an account and enjoy authentic Nigerian flavors delivered to your door.</p>
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
            <h1 className="text-dark font-bold text-2xl mb-1">Create Account</h1>
            <p className="text-neutral-muted text-sm mb-7">Sign up to get started</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-dark-body font-semibold text-sm block mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-dark-body font-semibold text-sm block mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
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
                    value={form.password}
                    onChange={(e) => update('password', e.target.value)}
                    placeholder="Create a strong password"
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
                <p className={`text-xs mt-1.5 flex items-center gap-1 ${pwStrong ? 'text-green-600' : 'text-neutral-muted'}`}>
                  {pwStrong && <CheckCircle size={12} />}
                  Use 8+ characters with a mix of letters and numbers.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-dark-body font-semibold text-sm block mb-1.5">Confirm Password</label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => update('confirmPassword', e.target.value)}
                  placeholder="Re-enter your password"
                  required
                  className={`w-full px-4 py-3 rounded-lg border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:ring-2 transition-all ${
                    form.confirmPassword && form.password !== form.confirmPassword
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-neutral-border focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {form.confirmPassword && form.password !== form.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => update('terms', e.target.checked)}
                  className="mt-0.5 accent-primary w-4 h-4 cursor-pointer"
                />
                <label htmlFor="terms" className="text-neutral-muted text-xs leading-relaxed cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-accent font-semibold hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-accent font-semibold hover:underline">Privacy Policy</a>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={!form.terms || form.password !== form.confirmPassword}
                className="mt-2"
              >
                Create Account
              </Button>
            </form>

            <p className="text-center text-neutral-muted text-sm mt-6">
              Already have an account?{' '}
              <Link to="/signin" className="text-accent font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
