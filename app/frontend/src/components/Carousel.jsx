import { useContext, useState, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import "../css/carousel.css";
import Loading from './Loading';

function Carousel() {
  const { products, loading } = useContext(ProductsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const transitionEndHandler = () => {
      setIsTransitioning(false);
    };
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.addEventListener('transitionend', transitionEndHandler);
    return () => {
      slideContainer.removeEventListener('transitionend', transitionEndHandler);
    };
  }, []);

  const goToPreviousSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    }
  };

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <>
            {products.map((product, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0,
                }}
              >
                <img src={product.image} alt={product.name} />
                <div className="caption">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <button className="prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  )
}

export default Carousel;
