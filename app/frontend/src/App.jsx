import CartContext from './context/CartContext';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Cart from './components/Cart'
import { useContext } from 'react';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AuthContext from './context/AuthContext';
import BtnProfile from './components/BtnProfile';

function App() {
  const { isCartOpen } = useContext(CartContext);
  const { isProfileBtnOpen } = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/policy-and-privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {isCartOpen && <Cart />}
      {isProfileBtnOpen && <BtnProfile />}
    </>
  )
}

export default App;
