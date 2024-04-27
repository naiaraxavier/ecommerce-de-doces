import PropTypes from 'prop-types';
import "../css/cardproduct.css"

function CardProduct({ product }) {
  return (
    <div className="card">
      <div className='img-product'>
        <img
          className="product-img"
          alt={ product.name }
          src={ product.image }
        />
      </div>
      <div className='product-content'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className='price'>
          R$ {product.price.toLocaleString(
            'pt-BR', 
            { minimumFractionDigits: 2 }
          )}
        </p>
        <button
          onClick={ () => {} }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default CardProduct
