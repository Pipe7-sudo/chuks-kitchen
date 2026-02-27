import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Flame, Leaf, AlertCircle } from 'lucide-react';


const MEAL_DATA = {
  1: {
    id: 1,
    name: 'Jollof Rice with Fried Chicken',
    description:
      'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.',
    price: 2800,
    spice: 'Mildly spicy',
    vegetarian: true,
    proteins: [
      { id: 'fried-chicken', label: 'Fried Chicken', extra: 0, note: 'Default' },
      { id: 'grilled-fish',  label: 'Grilled Fish',  extra: 500 },
      { id: 'beef',          label: 'Beef',           extra: 700 },
    ],
    extras: [
      { id: 'plantain',       label: 'Fried Plantain',     extra: 700 },
      { id: 'coleslaw',       label: 'Coleslaw',            extra: 500 },
      { id: 'pepper-sauce',   label: 'Extra Pepper Sauce',  extra: 300 },
    ],
  },
  2: {
    id: 2,
    name: 'Eba & Egusi Soup (Goat Meat)',
    description:
      'Freshly made eba paired with rich, hearty egusi soup cooked with tender goat meat, stockfish, and dry fish. A true taste of home.',
    price: 2800,
    spice: 'Mildly spicy',
    vegetarian: false,
    proteins: [
      { id: 'goat',         label: 'Goat Meat',     extra: 0,   note: 'Default' },
      { id: 'assorted',     label: 'Assorted Meat', extra: 500 },
      { id: 'stockfish',    label: 'Stockfish',      extra: 300 },
    ],
    extras: [
      { id: 'ponmo',   label: 'Extra Ponmo',    extra: 200 },
      { id: 'fish',    label: 'Extra Stockfish', extra: 300 },
      { id: 'eba',     label: 'Extra Eba',       extra: 150 },
    ],
  },
};

const DEFAULT_MEAL = MEAL_DATA[1];

// ─────────────────────────────────────────────────────────────────────────────

const FoodDetails = () => {
  const { id } = useParams();
  const meal = MEAL_DATA[id] || DEFAULT_MEAL;

  const [selectedProtein, setSelectedProtein] = useState(meal.proteins[0].id);
  const [selectedExtras, setSelectedExtras]   = useState([]);
  const [instructions, setInstructions]       = useState('');
  const [quantity, setQuantity]               = useState(1);

  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId) ? prev.filter((e) => e !== extraId) : [...prev, extraId]
    );
  };

  const proteinExtra = meal.proteins.find((p) => p.id === selectedProtein)?.extra ?? 0;
  const sidesExtra   = meal.extras
    .filter((e) => selectedExtras.includes(e.id))
    .reduce((sum, e) => sum + e.extra, 0);
  const total = (meal.price + proteinExtra + sidesExtra) * quantity;

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <div className="max-w-5xl mx-auto py-6 px-4">

        {/* Back link */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-1.5 text-[#4B4B4B] hover:text-[#FF7A18] text-sm font-medium mb-5 transition-colors"
        >
          <ChevronLeft size={17} />
          Back to Menu
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: Food Image ── */}
            <div className=" hidden lg:flex relative  w-full h-64 sm:h-80 md:h-full min-h-[420px] bg-[#e8e0d8]">
              <img
                src={`/images/meals/${meal.id}.png`}
                alt={meal.name}
                className=" hidden lg:flex absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Details panel ── */}
            <div className="flex flex-col p-6 sm:p-8 overflow-y-auto max-h-[90vh] md:max-h-none">

              {/* Title + price */}
              <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1 leading-tight">{meal.name}</h1>
              <p className="text-[#FF7A18] font-bold text-xl mb-3">
                ₦{meal.price.toLocaleString()}
              </p>
              <p className="text-[#4B4B4B] text-sm leading-relaxed mb-4">
                {meal.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-4 mb-5 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-[#4B4B4B]">
                  <Flame size={13} className="text-[#FF7A18]" />
                  {meal.spice}
                </span>
                {meal.vegetarian && (
                  <span className="flex items-center gap-1.5 text-[#FF7A18]">
                    <Leaf size={13} />
                    Vegetarian option available
                  </span>
                )}
                <button className="flex items-center gap-1.5 text-[#FF7A18] hover:underline transition-all">
                  <AlertCircle size={13} />
                  View Allergies
                </button>
              </div>

              <hr className="border-[#E8E8E8] mb-5" />

              {/* Choose Your Protein */}
              <div className="mb-5">
                <h3 className="text-[#1A1A1A] font-bold text-sm mb-3">Choose Your Protein</h3>
                <div className="flex flex-col gap-2">
                  {meal.proteins.map((protein) => (
                    <label
                      key={protein.id}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
                        selectedProtein === protein.id
                          ? 'border-[#FF7A18] bg-[#FFF3E8]'
                          : 'border-[#E8E8E8] hover:border-[#FF7A18]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Custom radio */}
                        <span
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            selectedProtein === protein.id
                              ? 'border-[#FF7A18]'
                              : 'border-[#C0C0C0]'
                          }`}
                        >
                          {selectedProtein === protein.id && (
                            <span className="w-2 h-2 rounded-full bg-[#FF7A18] block" />
                          )}
                        </span>
                        <span className="text-[#1A1A1A] text-sm font-medium">{protein.label}</span>
                        {protein.note && (
                          <span className="text-xs text-[#9A9A9A]">({protein.note})</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-[#9A9A9A]">
                        {protein.extra === 0 ? '' : `+₦${protein.extra.toLocaleString()}`}
                      </span>
                      <input
                        type="radio"
                        name="protein"
                        value={protein.id}
                        checked={selectedProtein === protein.id}
                        onChange={() => setSelectedProtein(protein.id)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Sides */}
              <div className="mb-5">
                <h3 className="text-[#1A1A1A] font-bold text-sm mb-3">
                  Extra Sides{' '}
                  <span className="text-[#9A9A9A] font-normal">(Optional)</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {meal.extras.map((extra) => {
                    const checked = selectedExtras.includes(extra.id);
                    return (
                      <label
                        key={extra.id}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
                          checked
                            ? 'border-[#FF7A18] bg-[#FFF3E8]'
                            : 'border-[#E8E8E8] hover:border-[#FF7A18]/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Custom checkbox */}
                          <span
                            className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                              checked ? 'border-[#FF7A18] bg-[#FF7A18]' : 'border-[#C0C0C0]'
                            }`}
                          >
                            {checked && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[#1A1A1A] text-sm font-medium">{extra.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-[#9A9A9A]">
                          +₦{extra.extra.toLocaleString()}
                        </span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleExtra(extra.id)}
                          className="sr-only"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6">
                <h3 className="text-[#1A1A1A] font-bold text-sm mb-2">Special Instructions</h3>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder={`E.g no onion, food is too spicy, food is too hot hhhhhhhhhh\nfood is tasty`}
                  rows={3}
                  className="w-full border-2 border-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C0C0C0] resize-none focus:outline-none focus:border-[#FF7A18] transition-colors"
                />
              </div>

              {/* Quantity + Add to Cart */}
              <div className="mt-auto">
                {/* Quantity selector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#1A1A1A] font-semibold text-sm">Quantity</span>
                  <div className="flex items-center rounded-xl border-2 border-[#E8E8E8] overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#F7F5F2] transition-colors text-lg font-bold"
                    >
                      −
                    </button>
                    <span className="w-10 h-10 flex items-center justify-center font-bold text-[#1A1A1A] text-sm border-x-2 border-[#E8E8E8]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 flex items-center justify-center text-[#FF7A18] hover:bg-[#FFF3E8] transition-colors text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-[#FF7A18] hover:bg-[#e86a10] active:scale-[0.98] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_2px_8px_rgba(255,122,24,0.25)] text-sm sm:text-base">
                  <ShoppingCart size={18} strokeWidth={2.5} />
                  Add to Cart — ₦{total.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8E8E8] px-4 py-3 z-40 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-[#9A9A9A]">Total</p>
          <p className="text-[#FF7A18] font-bold text-lg">₦{total.toLocaleString()}</p>
        </div>
        <button className="flex-1 bg-[#FF7A18] hover:bg-[#e86a10] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
          <ShoppingCart size={16} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="md:hidden h-20" />
    </main>
  );
};

export default FoodDetails;