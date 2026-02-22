import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background Image */}
     
      <img
        src="/images/meals/Welcome.png"
        alt="Delicious Nigerian food background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          {/* H1 — Inter 48px bold */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
            The Heart of Nigerian Home Cooking
          </h1>

          {/* Subtitle — Inter 32px bold */}
          <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-8">
            Handcrafted with passion, delivered with care.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link to="/menu">

              <Button 
                className="w-full sm:w-auto bg-[#FF7A18] hover:bg-[#e66e16] text-white transition-colors" 
                size="md"
              >
                Discover what's new
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
