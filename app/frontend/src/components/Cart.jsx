import CartContext from '../context/CartContext';
import logo from "../images/logo.png"
import { useContext } from 'react';
import CardCart from './CardCart'
import Loading from './Loading'
import '../css/cart.css'

function Cart() {
  const { cart, loading } = useContext(CartContext);

  return (
    <div className="cart-modal" id="shopping-cart">
      <div className="cart-content">
        <span className="close">&times;</span>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <p>*Total de <span>2</span> itens no carrinho</p>
          <p className="title-shop-cart">Carrinho de <span>compras</span></p>

          {loading ? (
            <Loading loading={loading} />
          ) : (
            <div className="product-list">
              {cart.map((product, index) => (
                <CardCart key={index} product={product} />
              ))}
            </div>
          )}

          <div className="total-shop-cart">
            <p><strong>TOTAL: R$ 20,00</strong></p>
            <p>*Total de <span>2</span> itens</p>
          </div>

          <div className="btn-finalize">
            <a href="./checkout.html">Finalizar Compra</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
