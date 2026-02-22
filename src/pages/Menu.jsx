import { useState } from 'react';
import MealCard from '../components/features/MealCard';
import SearchBar from '../components/common/SearchBar';

// ── Sample menu data (replace with API calls) ─────────────────────────────────
const ALL_MEALS = [
  { id: 1, name: 'Jollof Rice & Fried Chicken', price: 3200, rating: 4.8, badge: 'Popular', category: 'rice' },
  { id: 2, name: 'Eba & Egusi Soup (Goat Meat)', price: 2800, rating: 4.7, badge: "Chef's Pick", category: 'swallow' },
  { id: 3, name: 'Pepper Soup (Catfish)', price: 3500, rating: 4.9, category: 'soup' },
  { id: 4, name: 'Ofada Rice & Stew', price: 2600, rating: 4.6, badge: 'New', category: 'rice' },
  { id: 5, name: 'Pounded Yam & Egusi', price: 3100, rating: 4.8, category: 'swallow' },
  { id: 6, name: 'Suya Platter', price: 2200, rating: 4.5, badge: 'Popular', category: 'grilled' },
  { id: 7, name: 'Moin Moin', price: 800, rating: 4.4, category: 'snack' },
  { id: 8, name: 'Akara & Pap', price: 1200, rating: 4.3, category: 'snack' },
  { id: 9, name: 'Banga Soup & Starch', price: 3300, rating: 4.7, category: 'soup' },
  { id: 10, name: 'Fried Rice & Coleslaw', price: 2900, rating: 4.6, category: 'rice' },
  { id: 11, name: 'Ofe Onugbu (Bitter Leaf Soup)', price: 2700, rating: 4.5, category: 'soup' },
  { id: 12, name: 'Grilled Tilapia', price: 4000, rating: 4.9, badge: 'New', category: 'grilled' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'rice', label: 'Rice' },
  { id: 'swallow', label: 'Swallow' },
  { id: 'soup', label: 'Soups' },
  { id: 'grilled', label: 'Grilled' },
  { id: 'snack', label: 'Snacks' },
];
// ─────────────────────────────────────────────────────────────────────────────

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = ALL_MEALS.filter((meal) => {
    const matchCat = activeCategory === 'all' || meal.category === activeCategory;
    const matchSearch = meal.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-1">Our Menu</h1>
          <p className="text-neutral-text text-base">Authentic Nigerian flavors, made fresh daily</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search meals…"
          className="max-w-lg mb-8"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-neutral-text border border-neutral-border hover:border-primary hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-neutral-muted text-sm mb-6">
          Showing <span className="font-semibold text-dark">{filtered.length}</span> items
        </p>

        {/* Meal Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">🍽️</span>
            <h3 className="text-dark font-bold text-xl mb-2">No meals found</h3>
            <p className="text-neutral-muted text-sm">Try a different search or category</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
