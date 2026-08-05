import "./About.css";
import businessCard from "../../assets/images/a1j-business-card.webp";

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__visual">
        <div className="about__frame">
          <img src={businessCard} alt="A1-J Construction blue and white business card design" />
        </div>
        <p className="about__weather-note">
          <span>All-season mindset</span>
          Ready to discuss your project in every season.
        </p>
      </div>
      <div className="about__content">
        <p className="eyebrow">Built on Experience</p>
        <h2 id="about-title">A new business backed by real industry experience.</h2>
        <p>
          A1-J Construction may be a new company, but its foundation comes from
          hands-on experience gained while working with other construction companies.
          That experience now supports a business prepared to take on both big and small projects.
        </p>
        <ul className="about__list">
          <li>Construction, renovations, and repairs</li>
          <li>Projects considered in every season</li>
          <li>Big-project capability with attention to smaller work</li>
          <li>Direct communication with owner AJ</li>
        </ul>
        <a className="about__link" href="#contact">
          Talk about your project <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default About;

