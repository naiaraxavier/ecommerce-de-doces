import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart');
      const data = await response.json();
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values = useMemo(() => ({
    cart,
    loading,
  }), [cart, loading]);

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider
