import { useContext } from 'react';
import CartContext from '../context/CartContext';
import PropTypes from 'prop-types';
import "../css/cardproduct.css"

function CardProduct({ product }) {
  const { quantities, increaseQuantity, decreaseQuantity, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="card">
      <div className='img-product'>
        <img
          className="product-img"
          alt={product.name}
          src={product.image}
        />
      </div>
      <div className='product-content'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div>
          <p className='price'>
            {product.price && `R$ ${product.price.toLocaleString(
              'pt-BR',
              { minimumFractionDigits: 2 }
            )}`}
          </p>
          <div className='btn-in-de'>
            <button id="increaseBtn" onClick={() => increaseQuantity(product.id)}>+</button>
            <span id='span-quantity'>{quantities[product.id] || 0}</span>
            <button id="decreaseBtn" onClick={() => decreaseQuantity(product.id)}>-</button>
          </div>
        </div>
        <button
          className='btn-add-cart'
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default CardProduct
