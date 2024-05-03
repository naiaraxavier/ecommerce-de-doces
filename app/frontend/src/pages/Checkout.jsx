import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { FaHouse } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { FaEllipsisH } from "react-icons/fa";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { SiNubank } from "react-icons/si";
import { FaCcPaypal, FaRegCreditCard } from "react-icons/fa";
import CartContext from '../context/CartContext';
import { useContext } from 'react';
import "../css/checkout.css"
import Loading from "../components/Loading";

function Checkout() {
  const { cart, loading, quantities } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    // Verifica se o item existe e se possui preço definido
    if (item && item.product_price && quantities[item.product_id]) {
      // Multiplica o preço do item pela quantidade no carrinho
      return total + (item.product_price * quantities[item.product_id]);
    }
    return total;
  }, 0);

  return (
    <>
      <Header />
      <Navbar />
      <main className="main-checkout">
        <div className="container-checkout">
          <div className="content-checkout">
            <p className="title-checkout"><FaHouse /> / <span>Finalizar compra</span></p>
            <div>
              <h2 className="h2-checkout">Confirmação de <span>dados</span></h2>
              <p>Escolha a forma de pagamento e o endereço para entrega (se necessário)</p>
            </div>

            <div>
              <h2 className="h2-checkout"> <LuPlusCircle className="icon-plus" /> Endereço de <span>entrega</span></h2>

              <div>
                <div className="btn-edit-del">
                  <h3>Endereço 1</h3>
                  <FaEllipsisH className="icon-edit" />
                </div>
                <p>Aqui vem a descrição do endereço. Casa, número da rua e etc...</p>
              </div>

            </div>
            <div>
              <h2 className="h2-checkout"> <LuPlusCircle className="icon-plus" /> Forma de <span>pagamento</span></h2>
              <div className="pay">
                <div className="method-pay">
                  <div>
                    <BsToggle2On className="icons-pay" />
                    <SiNubank className="icons-pay" />
                  </div>
                  <div>
                    <div className="btn-edit-del">
                      <h3>Nubank</h3>
                      <FaEllipsisH className="icon-edit" />
                    </div>
                    <p>Aqui vem a descrição do cartão. Email, nome do/a títular e etc...</p>
                  </div>
                </div>

                <div className="method-pay">
                  <div>
                    <BsToggle2Off className="icons-pay" />
                    <FaCcPaypal className="icons-pay" />
                  </div>
                  <div>
                    <div className="btn-edit-del">
                      <h3>Paypal</h3>
                      <FaEllipsisH className="icon-edit" />
                    </div>
                    <p>Aqui vem a descrição do cartão. Email, nome do/a títular e etc...</p>
                  </div>
                </div>

                <div className="method-pay">
                  <div>
                    <BsToggle2Off className="icons-pay" />
                    <FaRegCreditCard className="icons-pay" />
                  </div>
                  <div>
                    <div className="btn-edit-del">
                      <h3>Bradesco</h3>
                      <FaEllipsisH className="icon-edit" />
                    </div>
                    <p>Aqui vem a descrição do cartão. Email, nome do/a títular e etc...</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="container-summary">
            <div className="summary">
              <h2 className="h2-checkout">Sumário de <span>compras</span></h2>

              <div>

                {loading ? (
                  <Loading loading={loading} />
                ) : (
                  cart.length === 0 ? (
                    <div>
                      <p>Seu carrinho está vazio.</p>
                    </div>
                  ) : (
                    <ul className="products">
                      {cart.map((product, index) => (
                        <li key={index}>
                          <div>
                            <span>{product.product_name}</span>
                            <strong>* {quantities[product.product_id] || 0}</strong>
                          </div>
                          <span>R$ {product.product_price.toLocaleString(
                            'pt-BR',
                            { minimumFractionDigits: 2 }
                          )}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}

                <ul className="total">
                  <li className="t-color">
                    <span>Total do pedido (item)</span>
                    <span>R$ {totalPrice.toLocaleString(
                      'pt-BR',
                      { minimumFractionDigits: 2 }
                    )}</span>
                  </li>
                  <li className="t-color">
                    <span>Total de entrega</span>
                    <span>R$ 00,00</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>R$ {totalPrice.toLocaleString(
                      'pt-BR',
                      { minimumFractionDigits: 2 }
                    )}</span>
                  </li>
                </ul>
              </div>

              <div className="btn-summary">
                <button>Finalizar compra</button>
              </div>
            </div>
            <div className="btn-summary-back">
              <button>Voltar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Checkout
