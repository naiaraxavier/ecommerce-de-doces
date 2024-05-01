import CartContext from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"
import { useContext } from 'react';
import CardCart from './CardCart'
import Loading from './Loading'
import '../css/cart.css'
import AuthContext from '../context/AuthContext';

function Cart() {
  const { cart, loading, setIsCartOpen, quantities, setIsCheckout } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext)
  // console.log(isAuthenticated);

  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => {
    // Verifica se o item existe e se possui preço definido
    if (item && item.product_price && quantities[item.product_id]) {
      // Multiplica o preço do item pela quantidade no carrinho
      return total + (item.product_price * quantities[item.product_id]);
    }
    return total;
  }, 0);

  const sumItens = Object.values(quantities).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const handleCheckout = () => {
    setIsCheckout(true)
    // Verifica se o usuário está logado
    if (isAuthenticated) {
      // Se o usuário estiver logado, redirecione para a página de checkout
      setIsCartOpen(false)
      navigate('/checkout');
    } else {
      // Se o usuário não estiver logado, redirecione para a página de login
      setIsCartOpen(false)
      navigate('/login');
    }
  };

  return (
    <div className="cart-modal" id="shopping-cart">
      <div className="cart-content">
        <span className="close" onClick={() => setIsCartOpen(false)}>&times;</span>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <p>*Total de <span>{sumItens}</span> itens no carrinho</p>
          <p className="title-shop-cart">Carrinho de <span>compras</span></p>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            cart.length === 0 ? (
              <div className="empty-cart-message" >
                <p>Seu carrinho está vazio.</p>
              </div>
            ) : (
              <div className="product-list">
                {cart.map((product) => (
                  <CardCart key={product.id} product={product} />
                ))}
              </div>
            )
          )}

          <div className="total-shop-cart">
            <p>
              <strong>
                TOTAL: R$ {totalPrice.toLocaleString(
                  'pt-BR',
                  { minimumFractionDigits: 2 }
                )}
              </strong>
            </p>
            <p>*Total de <span>{sumItens}</span> itens</p>
          </div>

          <div className="btn-finalize">
            <button onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
