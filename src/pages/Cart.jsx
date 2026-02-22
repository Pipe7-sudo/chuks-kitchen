import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ChevronLeft, Tag } from 'lucide-react';
import Button from '../components/common/Button';


const INITIAL_CART = [
  { id: 1, name: 'Jollof Rice & Fried Chicken', price: 3200, quantity: 1, protein: 'Fried Chicken' },
  { id: 2, name: 'Eba & Egusi Soup (Goat Meat)', price: 2800, quantity: 2, protein: 'Goat Meat' },
  { id: 1, name: 'Jollof Rice & Fried Chicken', price: 3200, quantity: 1, protein: 'Fried Chicken' },
  { id: 2, name: 'Eba & Egusi Soup (Goat Meat)', price: 2800, quantity: 2, protein: 'Goat Meat' },
];


const Cart = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const discount = promoApplied ? 300 : 0;
  const total = subtotal + deliveryFee - discount;

  return (
    <main className=" bg-[#F3F4F6] py-8">
      <div className="max-w-6xl mx-auto bg-[#FFFFFF] rounded-xl shadow-md px-4 sm:px-6 lg:px-12 py-8">

        {/* Back */}
        {/* <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-neutral-text hover:text-primary text-sm font-medium mb-6 transition-colors"
        >
          <ChevronLeft size={18} />
          Continue Shopping
        </Link> */}

        <h1 className="hidden lg:block text-3xl font-bold text-dark mb-8">Your CART</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-card p-16 flex flex-col items-center text-center">
            <span className="text-6xl mb-4">🛒</span>
            <h2 className="text-dark font-bold text-xl mb-2">Your cart is empty</h2>
            <p className="text-neutral-muted text-sm mb-6">Add some delicious meals to get started!</p>
            <Link to="/menu"><Button variant="primary">Browse Menu</Button></Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-3 space-y-4">
        

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-card p-4 lg:p-5 flex items-center lg:items-center lg:justify-between gap-4"
                >
                  {/* Image — pinned left on all screen sizes */}
                  <div className="w-20 h-20 lg:w-30 lg:h-30 rounded-xl overflow-hidden bg-neutral-bg shrink-0">
                    <img
                      src={`/images/meals/${item.id}.png`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                 
                  <div className="flex flex-col flex-1 min-w-0 gap-2 lg:contents">

                    {/* Name + protein */}
                    <div className="lg:flex lg:flex-col lg:min-w-0">
                      <h3 className="text-dark font-semibold text-sm lg:text-base leading-snug line-clamp-2">{item.name}</h3>
                      {item.protein && (
                        <p className="text-neutral-muted text-xs mt-0.5">With {item.protein}</p>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between lg:gap-4">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-[#BDBDBD] text-dark hover:bg-gray-400 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-dark font-bold text-sm w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-[#BDBDBD] text-dark hover:bg-gray-400 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* MOBILE ONLY — price + delete share this row */}
                    <div className="flex items-center justify-between lg:hidden">
                      <p className="text-[#FF7A18] font-bold text-base">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 flex items-center justify-center rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {/* DESKTOP ONLY — price standalone (delete is rendered separately below) */}
                    <p className="hidden lg:block text-[#FF7A18] font-bold text-lg">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* DESKTOP ONLY — delete standalone */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hidden lg:flex w-7 h-7 items-center justify-center rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>

                  </div>
                </div>
              ))}
            </div>
  </div>
            
        )}
      </div>
    </main>
  );
};

export default Cart;
