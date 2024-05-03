import { useRef, useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { Link } from "react-router-dom";
import Loading from "../components/Loading"
import "../css/carousel.css"

function Carousel() {
  const { products, loading } = useContext(ProductsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === products.length - 1) {
        carousel.current.scrollLeft = 0; // Volta para o início do carrossel
        setCurrentIndex(0); // Reinicia o índice
      } else {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 4000); //4 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, [currentIndex, products]);

  if (!products || !products.length) return [];

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {loading ? (
          <Loading />
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="item"
            >
              <img src={product.image} alt={product.name} />
              <div className="info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/products">
                    <button>Ver produtos</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="buttons">
        <button className="prev" onClick={handleLeftClick}>
          &#10094;
        </button>
        <button className="next" onClick={handleRightClick}>
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default Carousel
