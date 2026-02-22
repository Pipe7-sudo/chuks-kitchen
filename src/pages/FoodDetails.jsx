import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import Button from '../components/common/Button';

// ── Sample meal data (replace with API) ──────────────────────────────────────
const MEAL_DATA = {
  1: {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    description:
      'Our signature Jollof rice, slow-cooked in seasoned tomato sauce, served with crispy fried chicken, plantain, and coleslaw. A Nigerian classic you will love.',
    price: 3200,
    rating: 4.8,
    proteins: ['Fried Chicken', 'Grilled Chicken', 'Fish', 'Goat Meat', 'Assorted Meat'],
    extras: ['Extra Plantain (+₦200)', 'Extra Coleslaw (+₦150)', 'Fried Egg (+₦250)', 'Puff Puff (+₦300)'],
  },
  2: {
    id: 2,
    name: 'Eba & Egusi Soup (Goat Meat)',
    description:
      'Freshly made eba paired with rich, hearty egusi soup cooked with tender goat meat, stockfish, and dry fish. A true taste of home.',
    price: 2800,
    rating: 4.7,
    proteins: ['Goat Meat', 'Assorted Meat', 'Stockfish', 'Chicken', 'Beef'],
    extras: ['Extra Ponmo (+₦200)', 'Extra Stockfish (+₦300)', 'Extra Eba (+₦150)'],
  },
};

const DEFAULT_MEAL = {
  id: 0,
  name: 'Delicious Nigerian Meal',
  description: 'A freshly prepared authentic Nigerian dish made with quality ingredients.',
  price: 2500,
  rating: 4.5,
  proteins: ['Chicken', 'Beef', 'Fish', 'Goat Meat'],
  extras: ['Extra Sauce (+₦150)', 'Extra Serving (+₦200)'],
};
// ─────────────────────────────────────────────────────────────────────────────

const FoodDetails = () => {
  const { id } = useParams();
  const meal = MEAL_DATA[id] || DEFAULT_MEAL;

  const [quantity, setQuantity] = useState(1);
  const [selectedProtein, setSelectedProtein] = useState(meal.proteins?.[0] || '');
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const total = meal.price * quantity;

  return (
    <main className="min-h-screen bg-neutral-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-neutral-text hover:text-primary text-sm font-medium mb-6 transition-colors"
        >
          <ChevronLeft size={18} />
          Back to Menu
        </Link>

        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Image */}
            <div className="relative w-full h-72 md:h-full min-h-[320px] bg-neutral-bg">
              {/* TODO: Replace with actual meal image from /images/meals/{id}.jpg */}
              <img
                src={`/images/meals/${meal.id}.jpg`}
                alt={meal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-2">{meal.name}</h1>
              <p className="text-neutral-text text-sm leading-relaxed mb-5">{meal.description}</p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-dark font-semibold text-sm">Quantity:</span>
                <div className="flex items-center gap-3 bg-neutral-bg rounded-full px-3 py-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-dark hover:text-primary transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-dark font-bold w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Choose Your Protein */}
              {meal.proteins && (
                <div className="mb-6">
                  <h3 className="text-dark font-bold text-base mb-3">Choose Your Protein</h3>
                  <div className="flex flex-wrap gap-2">
                    {meal.proteins.map((protein) => (
                      <button
                        key={protein}
                        onClick={() => setSelectedProtein(protein)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                          selectedProtein === protein
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-neutral-text border-neutral-border hover:border-primary hover:text-primary'
                        }`}
                      >
                        {protein}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Sides */}
              {meal.extras && (
                <div className="mb-8">
                  <h3 className="text-dark font-bold text-base mb-3">Extra Sides <span className="text-neutral-muted font-normal">(Optional)</span></h3>
                  <div className="flex flex-wrap gap-2">
                    {meal.extras.map((extra) => (
                      <button
                        key={extra}
                        onClick={() => toggleExtra(extra)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                          selectedExtras.includes(extra)
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-neutral-text border-neutral-border hover:border-primary hover:text-primary'
                        }`}
                      >
                        {extra}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price + Add to Cart */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-muted text-sm">Total</span>
                  <span className="text-primary font-bold text-2xl">₦{total.toLocaleString()}</span>
                </div>
                <Button variant="primary" size="lg" fullWidth>
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodDetails;
