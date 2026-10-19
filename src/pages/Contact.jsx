import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Navigation, Clock, MessageCircle } from "lucide-react";
import { company } from "../data/company";
import Button from "../components/common/Button";
import WhatsAppEnquiry from "../components/common/WhatsAppEnquiry";
import { trackEnquiry } from "../utils/trackEnquiry";

function Contact() {
  const { address } = company;
  const mapQuery = encodeURIComponent(`${address.street}, ${address.road}, ${address.city}, ${address.district}, ${address.state} ${address.postalCode}, India`);
  const canonical = "https://www.akhtartyre.shop/contact";
  return <>
    <Helmet><title>Contact & WhatsApp Enquiries | Akhtar Tyre Retreading Works</title><meta name="description" content="Contact Akhtar Tyre Retreading Works in Hinganghat, Wardha, Maharashtra for truck and tractor tyre retreading, industrial tyre services, inspection, puncture repair and old tyre purchase." /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">CONTACT US</span><h1>Talk to Us About Your Tyre Requirements</h1><p>Call directly or prepare a detailed enquiry message in WhatsApp. Our team can discuss the requirement and confirm suitability and availability.</p><div className="hero-actions"><a className="button button-primary" href="https://wa.me/918830938317?text=Hello%20Akhtar%20Tyre%20Retreading%20Works%2C%20I%20have%20a%20tyre%20service%20enquiry." target="_blank" rel="noopener noreferrer" onClick={() => trackEnquiry("whatsapp_click")}><MessageCircle size={18} /> WhatsApp us</a><a className="button button-secondary" href={`tel:${company.phone}`} onClick={() => trackEnquiry("phone_click")}><Phone size={18} /> {company.phoneDisplay}</a></div></div></section>
    <section className="section"><div className="container contact-grid">
      <div className="contact-details-column">
        <div className="contact-info-card"><div className="contact-icon"><Phone size={23} /></div><div><span>Phone</span><a href={`tel:${company.phone}`} onClick={() => trackEnquiry("phone_click")}>{company.phoneDisplay}</a></div></div>
        <div className="contact-info-card"><div className="contact-icon"><Mail size={23} /></div><div><span>Email</span><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
        <div className="contact-info-card"><div className="contact-icon"><MapPin size={23} /></div><div><span>Business address</span><address>{address.street}<br />{address.road}<br />{address.city}, {address.district}<br />{address.state} - {address.postalCode}, {address.country}</address></div></div>
        <div className="contact-info-card"><div className="contact-icon"><Clock size={23} /></div><div><span>Opening hours</span><p>Monday–Saturday, 10:00 AM–7:00 PM</p></div></div>
        <Button href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer"><Navigation size={18} /> Get directions</Button>
      </div>
      <div className="contact-panel"><span className="section-eyebrow">BUSINESS INFORMATION</span><h2>{company.name}</h2><p>{company.description}</p><div className="contact-business-details"><div><strong>GSTIN</strong><span>{company.gstin}</span></div><div><strong>Business history</strong><span>Established in {company.established}</span></div><div><strong>Service area</strong><span>Hinganghat, Wardha, Maharashtra</span></div><div><strong>Facebook</strong><a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Akhtar Tyre on Facebook</a></div></div><p className="small-note">Legal registration details can be provided after confirmation of the correct legal entity and registered-office information.</p></div>
    </div></section>
    <section className="section section-light"><div className="container enquiry-container"><WhatsAppEnquiry /></div></section>
  </>;
}
export default Contact;
