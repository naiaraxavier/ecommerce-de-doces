import PropTypes from 'prop-types';
import '../css/cardcart.css'

function CardCart({ product }) {
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={product.product_image} alt={product.product_name} />
      </div>

      <div className="info-product-cart">
        <p>{product.product_name}</p>

        <div className="cart-price">
          <span>
            R$ {product.product_price.toLocaleString(
              'pt-BR',
              { minimumFractionDigits: 2 }
            )}
          </span>
          <div>
            <button id="increaseBtn">+</button>
            <span>0</span>
            <button id="decreaseBtn">-</button>
          </div>
        </div>

        <div className="cart-btn-remove">
          <button>Remover</button>
        </div>
      </div>
    </div>
  )
}

CardCart.propTypes = {
  product: PropTypes.shape({
    product_name: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    product_image: PropTypes.string.isRequired,
  }).isRequired
};

export default CardCart
