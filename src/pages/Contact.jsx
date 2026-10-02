import {
  MapPin,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";

import { company } from "../data/company";
import Button from "../components/common/Button";

function Contact() {
  const { address } = company;

  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.road}, ${address.city}, ${address.district}, ${address.state} ${address.postalCode}, India`
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">CONTACT US</span>

          <h1>Contact Akhtar Tyre Retreading Works</h1>

          <p>
            Get in touch about tyre retreading, tyre repair,
            puncture services or old tyre purchase.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <Phone size={23} />
              </div>

              <div>
                <span>Phone</span>

                <a href={`tel:${company.phone}`}>
                  {company.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <Mail size={23} />
              </div>

              <div>
                <span>Email</span>

                <a href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin size={23} />
              </div>

              <div>
                <span>Business Address</span>

                <address>
                  {address.street}
                  <br />
                  {address.road}
                  <br />
                  {address.city}, {address.district}
                  <br />
                  {address.state} - {address.postalCode}
                </address>
              </div>
            </div>

            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={18} />
              Get Directions
            </Button>
          </div>

          <div className="contact-panel">
            <span className="section-eyebrow">
              BUSINESS INFORMATION
            </span>

            <h2>Akhtar Tyre Retreading Works</h2>

            <p>
              Contact us to discuss your tyre requirements,
              retreading requirements, repair needs or used tyre
              enquiries.
            </p>

            <div className="contact-business-details">
              <div>
                <strong>GSTIN</strong>
                <span>{company.gstin}</span>
              </div>

              <div>
                <strong>CIN</strong>
                <span>{company.cin}</span>
              </div>

              <div>
                <strong>Service Area</strong>
                <span>
                  Hinganghat, Wardha, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;