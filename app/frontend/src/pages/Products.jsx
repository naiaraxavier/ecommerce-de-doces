import { useEffect, useRef, useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import ScrollContext from '../context/ScrollContext';
import CardProduct from '../components/CardProduct';
import Loading from '../components/Loading';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../css/products.css"

function Products() {
  const { products, loading } = useContext(ProductsContext);
  const { scrollToSection } = useContext(ScrollContext);
  const [searchTerm, setSearchTerm] = useState('');

  const productsRef = useRef(null);

  useEffect(() => {
    if (scrollToSection === 'products') {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToSection]);

  const filteredProducts = products ? products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <>
      <Header />
      <Navbar />
      <div ref={productsRef} className='products-container'>
        <div className="search-input">
          <input
            type="text"
            placeholder="Buscar por nome de produto..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>

        {loading ? (
          <Loading loading={loading} />
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <p>Não encontramos produtos com esse nome</p>
            ) : (
              <div className="product-list">
                {filteredProducts.map((product, index) => (
                  <Link to={`/products/${product.id}`} key={index}>
                    <CardProduct key={index} product={product} />
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Products
