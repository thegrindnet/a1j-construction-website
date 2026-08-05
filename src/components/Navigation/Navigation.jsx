import { useEffect, useState } from "react";
import "./Navigation.css";
import { navigationLinks } from "../../utils/constants.js";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="navigation" aria-label="Primary navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
      <div
        className={`navigation__links ${isOpen ? "navigation__links--open" : ""}`}
        id="primary-navigation"
      >
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="navigation__contact" href="tel:+19708466958" onClick={() => setIsOpen(false)}>
          Call AJ
        </a>
      </div>
    </nav>
  );
}

export default Navigation;

