import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';


const ChefCard = ({ id, name, description, price, imageSrc, badge }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-lg overflow-hidden transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-neutral-bg shrink-0">
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
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-dark font-bold text-base mb-1 line-clamp-2">{name}</h3>
        <p className="text-neutral-text text-sm leading-relaxed line-clamp-2 flex-1">{description}</p>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#FF7A18] font-bold text-lg">₦{price?.toLocaleString()}</span>
          <Link to={`/food/${id}`}>
            <button className="flex items-center gap-2 bg-[#FF7A18] hover:bg-[#e66e16] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
              <ShoppingCart size={15} />
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
