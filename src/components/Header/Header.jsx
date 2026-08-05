import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import logoImage from "../../assets/images/a1j-logo.webp";
import { business } from "../../utils/constants.js";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#home" aria-label="A1-J Construction home">
          <img className="header__logo" src={logoImage} alt="A1-J Construction gear and compass logo" />
          <span>{business.name}</span>
        </a>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

