import { useState } from 'react';
import HeroSection from '../components/features/HeroSection';
import CategoryCard from '../components/features/CategoryCard';
import FeaturedMealCard from '../components/features/FeaturedMealCard';
import ChefCard from '../components/features/ChefCard';
import PromoBanner from '../components/features/PromoBanner';
import SearchBar from '../components/common/SearchBar';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Sample data ─────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 1, name: 'Jollof Delights', slug: 'jollof' },
  { id: 2, name: 'Rice & Stew', slug: 'rice-stew' },
  { id: 3, name: 'Soups & Swallow', slug: 'soups' },
  { id: 4, name: 'Grilled & BBQ', slug: 'grilled' },
  { id: 5, name: 'Snacks', slug: 'snacks' },
  { id: 6, name: 'Drinks', slug: 'drinks' },
];

const FEATURED_MEALS = [
  {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
    price: 3200,
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Eba & Egusi Soup (Goat Meat)',
    description: 'Freshly pounded eba with rich melon-seed soup and tender goat meat.',
    price: 2800,
    badge: 'Chef\'s Pick',
  },
  {
    id: 3,
    name: 'Pepper Soup (Catfish)',
    description: 'Spicy, aromatic catfish pepper soup — the perfect comfort meal.',
    price: 3500,
  },
];

const CHEFS_SPECIALS = [
  {
    id: 4,
    name: 'Ofada Rice & Stew',
    description: 'Native ofada rice paired with the iconic designer stew.',
    price: 2600,
    badge: 'New',
  },
  {
    id: 5,
    name: 'Pounded Yam & Egusi',
    description: 'Smooth velvety pounded yam with assorted meat egusi soup.',
    price: 3100,
  },
  {
    id: 6,
    name: 'Suya Platter',
    description: 'Spiced grilled beef skewers with sliced onions and tomatoes.',
    price: 2200,
    badge: 'Popular',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Search ── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="What are you craving for today?"
        />
      </div>

      {/* ── Popular Categories ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between  mb-8">
          <h2 className="text-xl sm:text-3xl mx-auto font-bold text-dark">Popular Categories</h2>
  
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

     
 {/* ── Chef's Specials ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-dark">Chef&apos;s Specials</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHEFS_SPECIALS.map((meal) => (
            <ChefCard key={meal.id} {...meal} />
          ))}
        </div>
      </section>
      {/* ── Promo Banner ── */}
      <PromoBanner />

     

    </main>
  );
};

export default Home;
