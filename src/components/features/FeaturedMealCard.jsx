import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * FeaturedMealCard — Responsive card:
 *  Mobile  → column (image top, content bottom)
 *  Desktop → row    (image left, content right)
 */
const FeaturedMealCard = ({ id, name, description, price, imageSrc, badge }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-lg overflow-hidden transition-all duration-300 flex flex-col lg:flex-row">

      {/* Meal Image */}
      <div className="relative w-full lg:w-44 xl:w-52 shrink-0 h-48 lg:h-auto overflow-hidden bg-neutral-bg">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <img
          src={imageSrc || `/images/meals/${id}.png`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-dark font-bold text-base lg:text-lg mb-1.5 line-clamp-2">{name}</h3>
          <p className="text-neutral-text text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-primary font-bold text-xl">₦{price?.toLocaleString()}</span>
          <Link to={`/food/${id}`}>
            <button className="flex items-center gap-1.5 text-accent font-semibold text-sm hover:text-blue-700 transition-colors">
              Order Now
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMealCard;

