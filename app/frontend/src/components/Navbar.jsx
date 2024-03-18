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
          <a href="#about"> Sobre mim</a>
        </li>
        <li>
          <a href="#contacts"> Me contate </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
