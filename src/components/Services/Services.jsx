import "./Services.css";
import { services } from "../../utils/constants.js";

function Services() {
  return (
    <section
      id="services"
      className="section services-section"
      aria-labelledby="services-title"
    >
      <div className="section__heading">
        <div>
          <p className="eyebrow">What We Do</p>
          <h2 id="services-title">
            Strong work starts with a capable approach.
          </h2>
        </div>
        <p>
          From a focused repair to a larger construction or renovation project,
          A1-J Construction is prepared to understand the work and help move it
          forward.
        </p>
      </div>
      <div className="services">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            {/* <span className="service-card__number">{service.number}</span> */}
            {/* <div className="service-card__line" /> */}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
