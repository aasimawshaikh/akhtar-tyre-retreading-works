import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta-inner">
        <div>
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>
            Need Tyre Retreading or Tyre Services?
          </h2>

          <p>
            Contact {company.name} in Hinganghat, Wardha,
            Maharashtra to discuss your tyre requirements.
          </p>
        </div>

        <div className="contact-cta-actions">
          <a
            href={`tel:${company.phone}`}
            className="button button-secondary"
          >
            <Phone size={18} />
            Call Us
          </a>

          <Link to="/contact" className="button button-light">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="contact-cta-location">
          <MapPin size={18} />
          {company.address.city}, {company.address.district},{" "}
          {company.address.state}
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;