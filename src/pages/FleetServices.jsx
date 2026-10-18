import { Helmet } from "react-helmet-async";
import { ClipboardCheck, Truck, Users, MessageCircle } from "lucide-react";
import { company } from "../data/company";
import WhatsAppEnquiry from "../components/common/WhatsAppEnquiry";

function FleetServices() {
  const canonical = "https://www.akhtartyre.shop/fleet-services";
  return <>
    <Helmet><title>Fleet Tyre Service Enquiries | Akhtar Tyre Retreading Works</title><meta name="description" content="Discuss truck, tractor and industrial tyre requirements for your business or fleet with Akhtar Tyre Retreading Works in Hinganghat, Wardha." /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">BUSINESS & FLEET ENQUIRIES</span><h1>Tyre Service Enquiries for Fleets and Businesses</h1><p>Share your vehicle types, tyre quantities and service needs so we can understand your requirement and discuss the next step.</p><a className="button button-primary" href="#fleet-enquiry"><MessageCircle size={18} /> Start a fleet enquiry</a></div></section>
    <section className="section"><div className="container"><div className="feature-grid">
      <article className="feature-card"><Truck size={28} /><h2>Vehicle and tyre details</h2><p>Tell us whether your requirement concerns trucks, tractors or industrial vehicles, and include tyre sizes if available.</p></article>
      <article className="feature-card"><ClipboardCheck size={28} /><h2>Quantity and condition</h2><p>Share approximate quantities, tyre condition and whether you need retreading, inspection, repair or used tyre evaluation.</p></article>
      <article className="feature-card"><Users size={28} /><h2>Business requirements</h2><p>Use the enquiry form to describe your business, location and preferred way to discuss the requirement.</p></article>
    </div></div></section>
    <section className="section section-light" id="fleet-enquiry"><div className="container enquiry-container"><WhatsAppEnquiry /></div></section>
    <section className="section"><div className="container content-narrow"><h2>Discuss your requirement</h2><p>Akhtar Tyre Retreading Works is located in Hinganghat, Wardha, Maharashtra. Each enquiry is subject to service capability, tyre condition, technical suitability and availability. Call <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a> if you prefer to speak directly.</p></div></section>
  </>;
}
export default FleetServices;
