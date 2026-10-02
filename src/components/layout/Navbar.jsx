import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { company } from "../../data/company";
import Button from "../common/Button";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">AT</span>

          <span className="brand-text">
            <strong>AKHTAR</strong>
            <small>TYRE RETREADING WORKS</small>
          </span>
        </Link>

        <nav
          className={`main-navigation ${
            menuOpen ? "main-navigation-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            href={`tel:${company.phone}`}
            className="nav-call-button"
          >
            <Phone size={17} />
            Call Us
          </Button>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;