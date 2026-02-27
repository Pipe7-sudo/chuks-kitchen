import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar cartCount={2} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/onboarding"  element={<Onboarding />} />
          <Route path="/signin"      element={<SignIn />} />
          <Route path="/signup"      element={<SignUp />} />
          <Route path="/menu"        element={<Menu />} />
          <Route path="/food/:id"    element={<FoodDetails />} />
          <Route path="/cart"        element={<Cart />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;