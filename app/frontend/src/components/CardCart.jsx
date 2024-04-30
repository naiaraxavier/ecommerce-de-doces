import { useContext } from 'react';
import CartContext from '../context/CartContext';
import PropTypes from 'prop-types';
import '../css/cardcart.css'

function CardCart({ product }) {
  const { quantities, increaseQuantity, decreaseQuantity, removeCartItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeCartItem(product.product_id);
  };

  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={product.product_image} alt={product.product_name} />
      </div>

      <div className="info-product-cart">
        <p>{product.product_name}</p>

        <div className="cart-price">
          <span>
            {product.product_price && `R$ ${product.product_price.toLocaleString(
              'pt-BR',
              { minimumFractionDigits: 2 }
            )}`}
          </span>
          <div>
            <button id="increaseBtn" onClick={() => increaseQuantity(product.product_id)}>+</button>
            <span>{quantities[product.product_id] || 0}</span>
            <button id="decreaseBtn" onClick={() => decreaseQuantity(product.product_id)}>-</button>
          </div>
        </div>

        <div className="cart-btn-remove">
          <button onClick={handleRemoveItem}>Remover</button>
        </div>
      </div>
    </div>
  )
}

CardCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    product_id: PropTypes.number.isRequired,
    product_image: PropTypes.string.isRequired,
  }).isRequired
};

export default CardCart
