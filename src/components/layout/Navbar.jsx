import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { company } from "../../data/company";
import Button from "../common/Button";
import { trackEnquiry } from "../../utils/trackEnquiry";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Fleet", path: "/fleet-services" },
  { label: "Products", path: "/products" },
  { label: "Guides", path: "/guides" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header">
    <div className="container navbar">
      <Link to="/" className="brand" onClick={closeMenu} aria-label="Akhtar Tyre Retreading Works home">
        <span className="brand-mark">AT</span><span className="brand-text"><strong>AKHTAR</strong><small>TYRE RETREADING WORKS</small></span>
      </Link>
      <nav className={`main-navigation ${menuOpen ? "main-navigation-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item) => <NavLink key={item.path} to={item.path} onClick={closeMenu} end={item.path === "/"} className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>{item.label}</NavLink>)}
        <Button href={`tel:${company.phone}`} className="nav-call-button" onClick={() => trackEnquiry("phone_click")}><Phone size={17} /> Call</Button>
        <Button href="https://wa.me/918830938317?text=Hello%20Akhtar%20Tyre%20Retreading%20Works%2C%20I%20have%20a%20tyre%20service%20enquiry." target="_blank" rel="noopener noreferrer" className="nav-whatsapp-button" onClick={() => trackEnquiry("whatsapp_click")}><MessageCircle size={17} /> WhatsApp</Button>
      </nav>
      <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={26} /> : <Menu size={26} />}</button>
    </div>
  </header>;
}
export default Navbar;
