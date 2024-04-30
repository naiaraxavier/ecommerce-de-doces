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

function App() {
  const { isCartOpen } = useContext(CartContext);

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
      </Routes>
      {isCartOpen && <Cart />}
    </>
  )
}

export default App;
