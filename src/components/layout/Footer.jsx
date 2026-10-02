import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "../../data/company";

function Footer() {
  const { address } = company;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">AT</span>

            <div>
              <strong>AKHTAR</strong>
              <span>TYRE RETREADING WORKS</span>
            </div>
          </div>

          <p className="footer-description">
            Tyre retreading and related tyre services for trucks,
            tractors and industrial and heavy-duty vehicle applications
            in Hinganghat, Wardha, Maharashtra.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>
                {address.street}, {address.road}, {address.city},{" "}
                {address.district}, {address.state} -{" "}
                {address.postalCode}
              </span>
            </li>

            <li>
              <Phone size={18} />
              <a href={`tel:${company.phone}`}>
                {company.phoneDisplay}
              </a>
            </li>

            <li>
              <Mail size={18} />
              <a href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>

          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;