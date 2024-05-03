import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartContext from '../context/CartContext';
import "../css/productdetails.css"

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { quantities, increaseQuantity, decreaseQuantity, addToCart } = useContext(CartContext);

  console.log(product);


  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <main className='main-detail'>
          <div className='content-detail'>
            <div className='img-detail'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='info-detail'>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <div className='price-qtd-detail'>
                <p>
                  <strong>
                    R$ {product.price.toLocaleString(
                      'pt-BR',
                      { minimumFractionDigits: 2 }
                    )}
                  </strong>
                </p>

                <div className='btn-in-de-detail'>
                  <button id="increaseBtn" onClick={() => increaseQuantity(product.id)}>+</button>
                  <span id='span-quantity'>{quantities[product.id] || 0}</span>
                  <button id="decreaseBtn" onClick={() => decreaseQuantity(product.id)}>-</button>
                </div>
              </div>

              <div className='button-detail'>
                <button
                  onClick={handleAddToCart}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  )
}

export default ProductDetails
