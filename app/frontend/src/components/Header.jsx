import ScrollContext from '../context/ScrollContext';
import CartContext from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from 'react';
import "../css/header.css";
import AuthContext from '../context/AuthContext';

function Header() {
  const { setScrollToSection } = useContext(ScrollContext);
  const { isCartOpen, setIsCartOpen, quantities } = useContext(CartContext);
  const { isProfileBtnOpen, setIsProfileBtnOpen, isAuthenticated } = useContext(AuthContext)

  const sumItens = Object.values(quantities).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    if (isProfileBtnOpen) {
      setIsProfileBtnOpen(false)
    }
  };

  const handleProfileClick = () => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      setIsProfileBtnOpen(!isProfileBtnOpen)
    } else {
      setIsProfileBtnOpen(false)
      navigate('/login');
    }
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
        {sumItens > 0 && <span className="cart-item-count">{sumItens}</span>}

        <MdPerson
          className="icon-header"
          onClick={handleProfileClick}
        />
      </div>
    </header>
  )
}

export default Header;
