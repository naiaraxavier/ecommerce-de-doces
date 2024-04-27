import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values = useMemo(() => ({
    products,
    loading,
  }), [products, loading]);

  return (
    <ProductsContext.Provider value={values}>
    {children}
  </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider
