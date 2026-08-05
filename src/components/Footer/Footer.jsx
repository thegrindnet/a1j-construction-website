import "./Footer.css";
import logoImage from "../../assets/images/a1j-logo.webp";
import { business, navigationLinks } from "../../utils/constants.js";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__main">
        <a className="footer__brand" href="#home">
          <img src={logoImage} alt="" /><span>{business.name}</span>
        </a>
        <p>{business.tagline}</p>
        <nav className="footer__links" aria-label="Footer navigation">
          {navigationLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
      </div>
      <div className="footer__bottom">
        <p>© {currentYear} A1-J Construction. All rights reserved.</p>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </div>
    </footer>
  );
}

export default Footer;

