import { Search } from 'lucide-react';

const SearchBar = ({
  value = '',
  onChange,
  placeholder = 'What are you craving for today?',
  className = '',
  onSubmit,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSubmit) onSubmit(value);
  };

  return (
    <div className={`relative flex items-center w-full bg-white rounded-lg shadow-md border border-gray-200 focus-within:border-blue-500 focus-within:shadow-lg transition-all duration-200 ${className}`}>
      {/* Search icon */}
      <div className="absolute left-4 text-gray-400 pointer-events-none">
        <Search size={20} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full pl-12 pr-5 py-4 bg-transparent text-gray-800 placeholder:text-gray-400 text-base focus:outline-none rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
