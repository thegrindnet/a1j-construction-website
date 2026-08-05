import "./Contact.css";
import { business } from "../../utils/constants.js";

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__content">
        <p className="eyebrow">Start a Conversation</p>
        <h2 id="contact-title">Have a project in mind? Talk directly with AJ.</h2>
        <p>
          Share what you are planning, whether it is a larger construction project,
          a renovation, or a repair that needs professional attention.
        </p>
        <div className="contact__actions">
          <a className="button button--primary" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
          <a className="button button--outline" href={`mailto:${business.email}`}>Send an Email</a>
        </div>
      </div>
      <aside className="contact__details" aria-label="Business contact details">
        <div><span>Owner</span><strong>{business.owner}</strong></div>
        <div><span>Phone</span><a href={business.phoneHref}>{business.phoneDisplay}</a></div>
        <div><span>Email</span><a href={`mailto:${business.email}`}>{business.email}</a></div>
        <div><span>Address</span><strong>{business.address}</strong></div>
        <div><span>Service Area</span><strong>{business.serviceArea}</strong></div>
      </aside>
    </section>
  );
}

export default Contact;

