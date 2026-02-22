import { Link } from 'react-router-dom';

const CategoryCard = ({ id, name, slug, imageSrc }) => {
  return (
    <Link
      to={`/menu?category=${slug}`}
      className="group flex flex-col lg:flex-col items-center gap-4 lg:gap-3 bg-white lg:bg-transparent rounded-2xl lg:rounded-none shadow-card lg:shadow-none p-3 lg:p-0 cursor-pointer hover:shadow-card-lg lg:hover:shadow-none transition-all duration-300"
    >
      {/* Circular Image */}
      <div className="w-60 h-35 lg:w-full lg:h-30 shrink-0 rounded-xl overflow-hidden border-4 border-white shadow-card group-hover:border-primary group-hover:shadow-card-lg transition-all duration-300">
        <img
          src={imageSrc || `/images/meals/${id}.png`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Label */}
      <span className="text-sm lg:text-base font-semibold text-dark group-hover:text-primary transition-colors duration-200 lg:text-center">
        {name}
      </span>
    </Link>
  );
};

export default CategoryCard;
