import { ArrowRight, Phone, MapPin, MessageCircle } from "lucide-react";
import { company } from "../../data/company";
import heroImage from "../../assets/hero.png";
import Button from "../common/Button";
import { trackEnquiry } from "../../utils/trackEnquiry";

function Hero() {
  return <section className="hero">
    <div className="hero-background-shape hero-shape-one" /><div className="hero-background-shape hero-shape-two" />
    <div className="container hero-grid">
      <div className="hero-content"><span className="hero-eyebrow">TYRE RETREADING & TYRE SERVICES</span>
        <h1>Reliable Tyre Solutions for<span> Commercial & Heavy-Duty Vehicles</span></h1>
        <p className="hero-description">{company.description}</p>
        <div className="hero-actions">
          <Button to="/services">Explore Our Services <ArrowRight size={18} /></Button>
          <Button href="https://wa.me/918830938317" variant="secondary" target="_blank" rel="noopener noreferrer" onClick={() => trackEnquiry("whatsapp_click")}><MessageCircle size={18} /> WhatsApp Enquiry</Button>
          <Button href={`tel:${company.phone}`} variant="secondary" onClick={() => trackEnquiry("phone_click")}><Phone size={18} /> Call {company.phoneDisplay}</Button>
        </div>
        <div className="hero-location"><MapPin size={18} /><span>Hinganghat, Wardha, Maharashtra</span></div>
      </div>
      <div className="hero-visual"><img src={heroImage} alt="Tyre retreading and commercial tyre services" style={{ width: "min(460px, 100%)", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 80px rgba(20, 29, 43, 0.22)" }} /></div>
    </div>
  </section>;
}
export default Hero;
