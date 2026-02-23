import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone, Lock } from 'lucide-react';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', form);
  };

  return (
    <main className="h-screen overflow-hidden flex">

      {/* ── Left panel — image (desktop only) ── */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt="Delicious Nigerian food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FF7A18]/60" />
        <div className="relative z-10 flex flex-col  justify-center h-full px-12 pb-12">
          <h2
            className="text-white font-bold mb-2 text-center"
            style={{ fontFamily: '"Island Moments", cursive', fontSize: '2.8rem' }}
          >
            Chuks Kitchen
          </h2>
          <p className="text-white mx-auto text-center text-sm leading-relaxed text-semibold max-w-xs">
            Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
          </p>
        </div>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex flex-1 items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="text-center mb-0.5">
            <span
              className="text-[#FF7A18] text-3xl"
              style={{ fontFamily: '"Island Moments", cursive' }}
            >
              Chuks Kitchen
            </span>
          </div>

          <h1 className="text-center text-dark font-bold text-lg mb-4">Create Your Account</h1>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Email */}
            <div>
              <label className="text-dark font-semibold text-xs block mb-1">Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="name@gmail.com"
                  required
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18]/20 transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-dark font-semibold text-xs block mb-1">Phone number</label>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="8123340890"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18]/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-dark font-semibold text-xs block mb-1">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  placeholder="QWE123#"
                  required
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-gray-200 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#FF7A18] focus:ring-1 focus:ring-[#FF7A18]/20 transition-all"
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors">
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-dark font-semibold text-xs block mb-1">Confirm password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={(e) => update('confirmPassword', e.target.value)}
                  placeholder="QWE123#"
                  required
                  className={`w-full pl-9 pr-10 py-2.5 rounded-lg border text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 transition-all ${
                    form.confirmPassword && form.password !== form.confirmPassword
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#FF7A18] focus:ring-[#FF7A18]/20'
                  }`}
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors">
                  {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={form.terms}
                onChange={(e) => update('terms', e.target.checked)}
                className="mt-0.5 accent-[#FF7A18] w-3.5 h-3.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-gray-500 text-xs leading-relaxed cursor-pointer">
                I agree to the{' '}
                <a href="#" className="text-[#FF7A18] font-semibold hover:underline">Terms &amp; Conditions</a>
                {' '}and{' '}
                <a href="#" className="text-[#FF7A18] font-semibold hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!form.terms || form.password !== form.confirmPassword}
              className="w-full bg-[#FF7A18] hover:bg-[#e66e16] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-xs">Or continue with</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Social buttons */}
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-2.5 border border-gray-200 rounded-xl py-2.5 text-sm text-dark font-medium hover:bg-gray-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.015 17.64 11.708 17.64 9.2z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.048 13.56C11.24 14.1 10.211 14.419 9 14.419c-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center gap-2.5 border border-gray-200 rounded-xl py-2.5 text-sm text-dark font-medium hover:bg-gray-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.4-155.5-127.4C46 716.9 0 630.1 0 547.5c0-219.1 144-334.5 285.5-334.5 76 0 139.4 50.2 186.9 50.2 46.6 0 120.5-52.6 209.4-52.6z"/>
                <path d="M549.5 128.2c23.1-27.7 40-66.5 40-105.3 0-5.2-.4-10.5-1.3-14.7-38.1 1.4-83.5 25.4-110.7 57.7-20.9 24.4-40.9 63.1-40.9 102.5 0 5.8.9 11.7 1.3 13.6 2.3.3 6 .9 9.8.9 34.1 0 77.1-22.3 101.8-54.7z"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-gray-500 text-xs mt-3">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#FF7A18] font-semibold hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
};

export default SignUp;
