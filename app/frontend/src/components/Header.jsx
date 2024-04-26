import { PiShoppingCartSimple } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/header.css";

function Header() {
  return (
  <header className="header">
    <div className="header-logo">
      <Link to="/">
        <img src={ logo } alt="logo"/>
      </Link>
    </div>

    <div className="header-btns">
      <PiShoppingCartSimple
        className="icon-header"
      />
      <BsPerson
        className="icon-header"
      />
    </div>
  </header>
  )
}

export default Header;
