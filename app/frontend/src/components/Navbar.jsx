import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
        <a href="#home"> Home </a>
        </li>
        <li>
          <Link to="/products">
            Produtos
          </Link>
        </li>
        <li>
          <a href="#about"> Sobre </a>
        </li>
        <li>
          <a href="#contacts"> Contatos </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
