import { useContext } from 'react';
import { Link } from "react-router-dom";
import ScrollContext from '../context/ScrollContext';
import "../css/navbar.css";

function Navbar() {
  const { setScrollToSection } = useContext(ScrollContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" onClick={() => setScrollToSection('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setScrollToSection('products')}>
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setScrollToSection('about')}>
            Sobre
          </Link>
        </li>
        <li>
          <a href="#contacts"> Contatos </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
