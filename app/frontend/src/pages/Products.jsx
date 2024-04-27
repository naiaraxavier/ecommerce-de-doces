import { useEffect, useRef, useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import ScrollContext from '../context/ScrollContext';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import CardProduct from '../components/CardProduct';
import Loading from '../components/Loading';
import "../css/products.css"

function Products() {
  const { products, loading } = useContext(ProductsContext);

  const { scrollToSection } = useContext(ScrollContext);
  const productsRef = useRef(null);

  useEffect(() => {
    if (scrollToSection === 'products') {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToSection]);

  return (
    <>
    <Header />
    <Navbar />
      <div ref={productsRef} className='products-container'>
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <div className="product-list">
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Products
