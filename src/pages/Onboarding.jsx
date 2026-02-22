import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Onboarding = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-deep">
      {/* Background image */}
      {/* TODO: Replace with actual onboarding food image from /images/onboarding-bg.jpg */}
      <img
        src="/images/onboarding-bg.jpg"
        alt="Chuks Kitchen welcome"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12 max-w-lg mx-auto">
        {/* Logo */}
        <span
          className="block text-6xl sm:text-7xl text-primary mb-6 leading-none"
          style={{ fontFamily: '"Island Moments", cursive' }}
        >
          Chuks Kitchen
        </span>

        {/* Tagline */}
        <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-3">
          The Heart of Nigerian
          <br />
          Home Cooking
        </h1>
        <p className="text-white/75 text-base sm:text-lg font-medium mb-10">
          Handcrafted with passion, delivered with care.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button variant="primary" size="lg" className="min-w-[160px]">
              Get Started
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="secondary" size="lg" className="min-w-[160px]">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Skip */}
        <Link to="/" className="block text-white/50 hover:text-white text-sm mt-8 transition-colors">
          Skip →
        </Link>
      </div>
    </main>
  );
};

export default Onboarding;
