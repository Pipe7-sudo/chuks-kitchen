import { useState } from 'react';
import { CheckCircle, ChevronRight, MapPin, CreditCard, Banknote, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

// ── Order steps ──────────────────────────────────────────────────────────────
const STEPS = ['Order Summary', 'Delivery Details', 'Payment', 'Confirmation'];

const MOCK_ORDER = {
  id: '123RGR231567Y',
  items: [
    { name: 'Jollof Rice & Fried Chicken', qty: 1, price: 3200 },
    { name: 'Eba & Egusi Soup (Goat Meat)', qty: 2, price: 2800 },
  ],
  subtotal: 8800,
  deliveryFee: 500,
  total: 9300,
};

const PAYMENT_METHODS = [
  { id: 'card', label: 'Card', icon: <CreditCard size={20} /> },
  { id: 'bank', label: 'Bank', icon: <Building2 size={20} /> },
  { id: 'transfer', label: 'Transfer', icon: <Banknote size={20} /> },
];
// ─────────────────────────────────────────────────────────────────────────────

// Step indicator
const StepIndicator = ({ currentStep }) => (
  <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
    {STEPS.map((step, idx) => (
      <div key={step} className="flex items-center">
        <div className="flex flex-col items-center gap-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              idx < currentStep
                ? 'bg-primary text-white'
                : idx === currentStep
                ? 'bg-primary text-white ring-4 ring-primary/30'
                : 'bg-neutral-border text-neutral-muted'
            }`}
          >
            {idx < currentStep ? <CheckCircle size={16} /> : idx + 1}
          </div>
          <span
            className={`text-xs font-medium whitespace-nowrap ${
              idx === currentStep ? 'text-primary' : idx < currentStep ? 'text-dark' : 'text-neutral-muted'
            }`}
          >
            {step}
          </span>
        </div>
        {idx < STEPS.length - 1 && (
          <div className={`w-10 sm:w-16 h-0.5 mx-1 mb-5 ${idx < currentStep ? 'bg-primary' : 'bg-neutral-border'}`} />
        )}
      </div>
    ))}
  </div>
);

// ── Step content components ───────────────────────────────────────────────────

const OrderSummaryStep = ({ order, onNext }) => (
  <div className="bg-white rounded-2xl shadow-card p-6 max-w-lg mx-auto">
    <h2 className="text-dark font-bold text-xl mb-5">Order Summary</h2>
    <div className="space-y-3 mb-5">
      {order.items.map((item) => (
        <div key={item.name} className="flex justify-between text-sm">
          <span className="text-neutral-text">{item.name} × {item.qty}</span>
          <span className="text-dark font-semibold">₦{(item.price * item.qty).toLocaleString()}</span>
        </div>
      ))}
    </div>
    <div className="border-t border-neutral-border pt-4 space-y-2 mb-6">
      <div className="flex justify-between text-sm text-neutral-text">
        <span>Subtotal</span><span>₦{order.subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm text-neutral-text">
        <span>Delivery Fee</span><span>₦{order.deliveryFee.toLocaleString()}</span>
      </div>
      <div className="flex justify-between font-bold text-dark">
        <span>Total</span><span className="text-primary text-xl">₦{order.total.toLocaleString()}</span>
      </div>
    </div>
    <Button variant="primary" size="lg" fullWidth onClick={onNext}>
      Proceed to Delivery <ChevronRight size={18} className="ml-1" />
    </Button>
  </div>
);

const DeliveryDetailsStep = ({ onNext }) => {
  const [form, setForm] = useState({ name: '', address: '', phone: '', note: '' });
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 max-w-lg mx-auto">
      <h2 className="text-dark font-bold text-xl mb-5 flex items-center gap-2">
        <MapPin size={20} className="text-primary" /> Delivery Details
      </h2>
      <div className="space-y-4 mb-6">
        {[
          { key: 'name', label: 'Full Name', placeholder: 'Your full name' },
          { key: 'address', label: 'Delivery Address', placeholder: '12 Kitchen Road, Lagos' },
          { key: 'phone', label: 'Phone Number', placeholder: '+234 800 000 0000' },
        ].map(({ key, label, placeholder }) => (
          <div key={key}>
            <label className="text-dark font-semibold text-sm block mb-1.5">{label}</label>
            <input
              type="text"
              value={form[key]}
              onChange={(e) => update(key, e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        ))}
        <div>
          <label className="text-dark font-semibold text-sm block mb-1.5">Delivery Note (Optional)</label>
          <textarea
            value={form.note}
            onChange={(e) => update('note', e.target.value)}
            placeholder="e.g. Call when you arrive"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
        </div>
      </div>
      <Button variant="primary" size="lg" fullWidth onClick={onNext}>
        Proceed to Payment <ChevronRight size={18} className="ml-1" />
      </Button>
    </div>
  );
};

const PaymentStep = ({ onNext }) => {
  const [selected, setSelected] = useState('card');

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 max-w-lg mx-auto">
      <h2 className="text-dark font-bold text-xl mb-5">Pay With:</h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {PAYMENT_METHODS.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
              selected === id
                ? 'border-primary text-primary bg-orange-50'
                : 'border-neutral-border text-neutral-text hover:border-primary hover:text-primary'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
      {selected === 'card' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-dark font-semibold text-sm block mb-1.5">Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-dark font-semibold text-sm block mb-1.5">Expiry</label>
              <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label className="text-dark font-semibold text-sm block mb-1.5">CVV</label>
              <input type="text" placeholder="···" className="w-full px-4 py-3 rounded-lg border border-neutral-border text-dark text-sm placeholder:text-neutral-placeholder focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
          </div>
        </div>
      )}
      {selected === 'transfer' && (
        <div className="bg-neutral-bg rounded-xl p-4 mb-6 text-sm text-dark">
          <p className="font-semibold mb-1">Bank Transfer Details</p>
          <p className="text-neutral-text">Account: <span className="font-bold">0123456789</span></p>
          <p className="text-neutral-text">Bank: <span className="font-bold">First Bank PLC</span></p>
          <p className="text-neutral-text">Name: <span className="font-bold">Chuks Kitchen Ltd</span></p>
        </div>
      )}
      <Button variant="primary" size="lg" fullWidth onClick={onNext}>
        Complete Payment
      </Button>
    </div>
  );
};

const ConfirmationStep = ({ order }) => (
  <div className="bg-white rounded-2xl shadow-card p-8 max-w-lg mx-auto text-center">
    {/* TODO: Replace with order-confirmation illustration from /images/order-confirmed.png */}
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <CheckCircle size={40} className="text-green-500" />
    </div>
    <h2 className="text-dark font-bold text-2xl mb-2">Order Confirmed!</h2>
    <p className="text-neutral-text text-sm mb-1">Your order has been placed successfully.</p>
    <p className="text-primary font-bold text-base mb-6">Order #{order.id}</p>
    <div className="flex flex-col gap-3">
      <Button variant="primary" size="lg" fullWidth>
        Generate Receipt
      </Button>
      <Link to="/">
        <Button variant="secondary" size="lg" fullWidth>
          Back to Home
        </Button>
      </Link>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

const Orders = () => {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen bg-neutral-bg py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <StepIndicator currentStep={step} />
        {step === 0 && <OrderSummaryStep order={MOCK_ORDER} onNext={() => setStep(1)} />}
        {step === 1 && <DeliveryDetailsStep onNext={() => setStep(2)} />}
        {step === 2 && <PaymentStep onNext={() => setStep(3)} />}
        {step === 3 && <ConfirmationStep order={MOCK_ORDER} />}
      </div>
    </main>
  );
};

export default Orders;
