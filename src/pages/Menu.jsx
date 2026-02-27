import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star, ChevronRight } from 'lucide-react';

// ── Menu Data ──────────────────────────────────────────────────────────────────

const MENU_CATEGORIES = [
  { id: 'popular',  label: 'Popular' },
  { id: 'jollof',   label: 'Jollof Rice & Entrees' },
  { id: 'swallow',  label: 'Swallow & Soups' },
  { id: 'grills',   label: 'Grills & sides' },
  { id: 'beverages',label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' },
];

const MENU_ITEMS = {
  popular: [
    {
      id: 1,
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
    {
      id: 2,
      name: 'Eba & Egusi Soup (Goat Meat)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
    {
      id: 3,
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
  ],
  jollof: [
    {
      id: 4,
      name: 'Jollof Rice & Basmati Fish (Ding)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
    {
      id: 5,
      name: 'Party Jollof Rice (King)',
      description: 'Smoky, party-style Jollof rice cooked in an open fire to perfection.',
      price: 3500,
    },
    {
      id: 6,
      name: 'Party Jollof Rice (King)',
      description: 'Smoky, party-style Jollof rice cooked in an open fire to perfection.',
      price: 3500,
    },
    {
      id: 7,
      name: 'Jollof Rice & Basmati Fish (Ding)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
    {
      id: 8,
      name: 'Party Jollof Rice (King)',
      description: 'Smoky, party-style Jollof rice cooked in an open fire to perfection.',
      price: 3500,
    },
    {
      id: 9,
      name: 'Party Jollof Rice (King)',
      description: 'Smoky, party-style Jollof rice cooked in an open fire to perfection.',
      price: 3500,
    },
  ],
  swallow: [
    {
      id: 2,
      name: 'Eba & Egusi Soup (Goat Meat)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
     {
      id: 2,
      name: 'Eba & Egusi Soup (Goat Meat)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
     {
      id: 2,
      name: 'Eba & Egusi Soup (Goat Meat)',
      description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
      price: 3500,
    },
  ],
  grills: [
    {
      id: 3,
      name: 'Suya Platter',
      description: 'Spiced grilled beef skewers with sliced onions and tomatoes.',
      price: 3500,
    },
    {
      id: 3,
      name: 'Grilled Tilapia',
      description: 'Whole grilled tilapia with spicy pepper sauce on the side.',
      price: 4000,
    },
    {
      id: 3,
      name: 'Peppered Gizzard',
      description: 'Tender chicken gizzard slow-cooked in rich pepper sauce.',
      price: 2800,
    },
  ],
  beverages: [
    {
      id: 4,
      name: 'Zobo Drink',
      description: 'Chilled hibiscus drink with ginger and pineapple extract.',
      price: 800,
    },
    {
      id: 4,
      name: 'Kunu Aya',
      description: 'Smooth tigernut milk drink, chilled and sweetened.',
      price: 700,
    },
    {
      id: 4,
      name: 'Chapman',
      description: 'Classic Nigerian cocktail drink with citrus and Angostura bitters.',
      price: 1200,
    },
  ],
  desserts: [
    {
      id: 4,
      name: 'Puff Puff',
      description: 'Deep-fried dough balls, lightly sweetened and golden brown.',
      price: 600,
    },
    {
      id: 4,
      name: 'Chin Chin',
      description: 'Crunchy fried dough snack, perfect for any time of day.',
      price: 500,
    },
    {
      id: 4,
      name: 'Coconut Candy',
      description: 'Traditional coconut sweet made with caramelized sugar.',
      price: 400,
    },
  ],
};

// ── Menu Meal Card ─────────────────────────────────────────────────────────────

const MenuMealCard = ({ id, name, description, price }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 flex flex-col">
    {/* Image */}
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-bg">
      <img
        src={`/images/meals/${id}.png`}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          e.currentTarget.src = `https://source.unsplash.com/400x300/?nigerian,food,${id}`;
        }}
      />
    </div>
    {/* Content */}
    <div className="p-3 flex flex-col flex-1">
      <h4 className="text-dark font-bold text-sm mb-1 line-clamp-1">{name}</h4>
      <p className="text-neutral-muted text-xs line-clamp-2 mb-3 flex-1">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-primary font-bold text-sm">₦{price?.toLocaleString()}</span>
        <Link to={`/food/${id}`}>
          <button className="bg-primary text-white rounded-full p-1.5 hover:bg-primary-dark transition-colors duration-200 active:scale-95">
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// ── Mobile compact list item ───────────────────────────────────────────────────

const MenuListItem = ({ id, name, description, price }) => (
  <div className="flex gap-3 py-4 border-b border-neutral-border last:border-b-0">
    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-bg">
      <img
        src={`/images/meals/${id}.png`}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://source.unsplash.com/200x200/?nigerian,food,${id}`;
        }}
      />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-dark font-bold text-sm mb-0.5 line-clamp-1">{name}</h4>
      <p className="text-neutral-muted text-xs line-clamp-2 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-sm">₦{price?.toLocaleString()}</span>
        <Link to={`/food/${id}`}>
          <button className="bg-primary text-white rounded-full p-1.5 hover:bg-primary-dark transition-colors duration-200 active:scale-95">
            <Plus size={14} strokeWidth={2.5} />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// ── Main Menu Page ─────────────────────────────────────────────────────────────

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sectionRefs = useRef({});
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Scroll to section when category is clicked
  const scrollToSection = useCallback((id) => {
    setActiveCategory(id);
    setDropdownOpen(false);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  // Highlight active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const cat of MENU_CATEGORIES) {
        const el = sectionRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLabel = MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? 'Popular';

  return (
    <main className="min-h-screen bg-neutral-bg">

      {/* ── Hero Banner ── */}
      <section className="relative w-full h-52 sm:h-64 md:h-72 overflow-hidden">
        <img
          src="/images/meals/Welcome.png"
          alt="Chuks Kitchen Menu"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://source.unsplash.com/1200x400/?nigerian,food,restaurant';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-6">
          <h1
            className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-1"
          >
            Chuks Kitchen
          </h1>
          <p className="text-white/80 text-xs sm:text-sm">
           Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </section>

      {/* ── Category Dropdown  ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="relative inline-block w-full sm:w-72" ref={dropdownRef}>
          {/* Trigger button */}
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="w-full flex items-center justify-between gap-3 bg-white border-1 border-[#FF7A18] hover:border-primary focus:border-primary rounded-xl px-4 py-3 shadow-card transition-all duration-200 group"
          >
            <div className="flex items-center gap-2.5">
              {/* Orange dot indicator */}
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-dark font-semibold text-sm">{activeLabel}</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-muted">
              <span className="text-xs text-neutral-muted">Menu Categories</span>
              <ChevronRight
                size={16}
                className={`text-primary transition-transform duration-300 ${
                  dropdownOpen ? 'rotate-90' : ''
                }`}
              />
            </div>
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-2xl shadow-card-lg border border-[#FF7A18] z-50 overflow-hidden animate-dropdown">
              <div className="px-4 py-2.5 border-b border-neutral-border bg-neutral-bg/60">
                <p className="text-xs font-semibold text-neutral-muted uppercase tracking-widest">Browse Categories</p>
              </div>
              <nav className="py-1.5">
                {MENU_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 text-sm transition-all duration-150 ${
                      activeCategory === cat.id
                        ? 'bg-[#FFF3E8] text-primary font-semibold'
                        : 'text-neutral-text hover:bg-neutral-bg hover:text-primary font-medium'
                    } ${
                      i < MENU_CATEGORIES.length - 1 ? 'border-b border-neutral-border/50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                          activeCategory === cat.id ? 'bg-primary' : 'bg-neutral-border'
                        }`}
                      />
                      {cat.label}
                    </div>
                    {activeCategory === cat.id && (
                      <ChevronRight size={14} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full">

          {MENU_CATEGORIES.map((cat) => {
            const items = MENU_ITEMS[cat.id] || [];
            return (
              <section
                key={cat.id}
                ref={(el) => (sectionRefs.current[cat.id] = el)}
                className="mb-10 scroll-mt-24"
              >
                {/* Section header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-dark font-bold text-base sm:text-lg">{cat.label}</h3>
                  {items.length > 3 && (
                    <Link
                      to={`/menu?cat=${cat.id}`}
                      className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline"
                    >
                      View All <ChevronRight size={12} />
                    </Link>
                  )}
                </div>

                {/* Desktop grid */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <MenuMealCard key={item.id} {...item} />
                  ))}
                </div>

                {/* Mobile list */}
                <div className="sm:hidden">
                  {items.slice(0, 3).map((item) => (
                    <MenuListItem key={item.id} {...item} />
                  ))}
                  {items.length > 3 && (
                    <Link
                      to={`/menu?cat=${cat.id}`}
                      className="block text-center text-primary text-sm font-semibold py-3 hover:underline"
                    >
                      View All →
                    </Link>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Menu;
