import { FaRoute, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaClock } from 'react-icons/fa';
import ScrollContext from '../context/ScrollContext';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import { useContext } from 'react';
import "../css/footer.css"

function Footer() {
  const { setScrollToSection } = useContext(ScrollContext);

  return (
    <footer className="footer">
      <div className="quick-links">
        <div className="column-1">
          <h6>Petit Four</h6>
          <Link
            to="/"
            onClick={() => { window.scrollTo(0, 0), setScrollToSection('null') }}
          >
            Home
          </Link>
          <Link to="/" onClick={() => setScrollToSection('about')}>Quem Sou</Link>
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>Produtos</Link>
        </div>

        <div className="column-2">
          <h6>Conta</h6>
          <Link to="/login">Login</Link>
          <Link to="/checkout">Carrinho</Link>
        </div>

        <div className="column-3">
          <h6>Informações</h6>
          <Link to="/policy-and-privacy" onClick={() => window.scrollTo(0, 0)} >Política de Privacidade</Link>
          <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} >Termos e Condições</Link>
          <Link to="/faq" onClick={() => window.scrollTo(0, 0)} >FAQ</Link>
        </div>

        <div className="column-4">
          <img src={logo} alt="logo" />
          <p>
            <FaRoute className='i' />
            Rua Sete de Setembro, 999, Florianópolis - SC
          </p>
          <div className="c-address">
            <FaClock className='i' />
            <div>
              <p>Terça – Domingo 13:00 – 22:00</p>
              <p>Segunda: fechado</p>
            </div>
          </div>
          <p>
            <FaWhatsapp className='i' />
            (48) 99999-9999
          </p>
        </div>
      </div>

      <div className="social-media">
        <div className="rights-reserved">
          <p>&copy; 2024 Petit Four | Todos os direitos reservados.</p>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank"><FaFacebook /></a>
          <a href="#" target="_blank"><FaInstagram /></a>
          <a href="#" target="_blank"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
