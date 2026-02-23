import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/images/promo/promo-banner.png"
        alt="Promotional banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay — strong on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-14 sm:py-20 max-w-2xl">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-3">
          Introducing Our New Menu Additions!
        </h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
          Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
        </p>
        <Link to="/menu">
          <button className="bg-[#FF7A18] hover:bg-[#e66e16] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
            Discover what&apos;s new
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromoBanner;

