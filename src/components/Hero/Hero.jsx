import "./Hero.css";
import heroImage from "../../assets/images/a1j-winter-house-hero.webp";
import { business } from "../../utils/constants.js";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img className="hero__image" src={heroImage} alt="Warmly lit home surrounded by snow at night" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Construction • Renovations • Repairs</p>
        <h1 id="hero-title">
          Built for every project. <span>Ready for every season.</span>
        </h1>
        <p className="hero__text">
          A1-J Construction brings hands-on industry experience, determined
          workmanship, and a ready-to-work mindset to projects both big and small.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
          <a className="button button--outline" href="#services">Explore Services</a>
        </div>
      </div>
      <a className="hero__scroll" href="#services" aria-label="Scroll to services">
        <span>Discover</span><span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;

