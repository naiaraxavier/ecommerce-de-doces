import ScrollContext from '../context/ScrollContext';
import CartContext from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from 'react';
import "../css/header.css";

function Header() {
  const { setScrollToSection } = useContext(ScrollContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link
          to="/"
          onClick={() => { window.scrollTo(0, 0), setScrollToSection('null') }}
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="header-btns">
        <FaShoppingCart
          className="icon-header"
          onClick={handleCartClick}
        />
        <Link to="/login">
          <MdPerson
            className="icon-header"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header;
