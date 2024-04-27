import PropTypes from 'prop-types';
import "../css/cardproduct.css"
import Swal from 'sweetalert2'

function CardProduct({ product }) {


  // Função para adicionar o produto ao carrinho
  const addToCart = async () => {
    try {
      // Fazendo uma requisição POST para a rota de adicionar ao carrinho
      const response = await fetch(`http://localhost:5000/api/cart/add/${product.id}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar produto ao carrinho');
      }

      Swal.fire({
        position: "bottom-end",
        title: "Produto adicionado ao carrinho com sucesso!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'swal2-small',
          title: 'swal2-title-small',
          container: 'swal2-container',
        }
      });

    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      Swal.fire({
        position: "bottom-end",
        title: "Erro ao adicionar o produto ao carrinho, tente novamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'swal2-small',
          title: 'swal2-title-small',
          container: 'swal2-container',
        }
      });
    }
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
        <p className='price'>
          R$ {product.price.toLocaleString(
            'pt-BR',
            { minimumFractionDigits: 2 }
          )}
        </p>
        <button
          onClick={addToCart}
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
