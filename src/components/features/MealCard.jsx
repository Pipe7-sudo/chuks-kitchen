import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';

/**
 * MealCard — Used in the Menu/Food Listing grid.
 * Compact card with image, name, rating, price, and Add button.
 */
const MealCard = ({ id, name, price, rating, imageSrc, badge }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-lg overflow-hidden transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden bg-neutral-bg">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
        {/* TODO: Replace with actual meal image from /images/meals/{id}.jpg */}
        <img
          src={imageSrc || `/images/meals/${id}.jpg`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-dark font-bold text-base mb-1 line-clamp-1">{name}</h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-3">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-neutral-muted text-xs font-medium">{rating}</span>
          </div>
        )}

        {/* Price + Add Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-dark font-bold text-base">₦{price?.toLocaleString()}</span>
          <Link to={`/food/${id}`}>
            <button className="bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors duration-200 shadow-sm active:scale-95">
              <Plus size={18} strokeWidth={2.5} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
