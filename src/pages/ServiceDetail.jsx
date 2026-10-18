import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { services } from "../data/services";
import { company } from "../data/company";
import WhatsAppEnquiry from "../components/common/WhatsAppEnquiry";
import { trackEnquiry } from "../utils/trackEnquiry";

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.id === slug);
  if (!service) return <Navigate to="/services" replace />;
  const canonical = `https://www.akhtartyre.shop/services/${service.id}`;
  const description = `${service.shortDescription} Contact Akhtar Tyre Retreading Works in Hinganghat, Wardha, Maharashtra to discuss suitability and availability.`;
  const Icon = service.icon;
  const schema = {
    "@context": "https://schema.org", "@type": "Service", name: service.title, description,
    provider: { "@type": "LocalBusiness", "@id": "https://www.akhtartyre.shop/#business", name: company.name, telephone: "+918830938317", url: "https://www.akhtartyre.shop/" },
    areaServed: { "@type": "AdministrativeArea", name: "Hinganghat, Wardha, Maharashtra, India" }, url: canonical
  };
  return <>
    <Helmet><title>{service.title} in Hinganghat | Akhtar Tyre Retreading Works</title><meta name="description" content={description} /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /><meta property="og:title" content={`${service.title} | Akhtar Tyre Retreading Works`} /><meta property="og:description" content={description} /><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <section className="page-hero service-page-hero"><div className="container">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/services">Services</Link><span>/</span><span>{service.title}</span></div>
      <span className="section-eyebrow">TYRE SERVICES · HINGANGHAT</span><h1>{service.title}</h1><p>{service.shortDescription}</p>
      <div className="hero-actions"><a className="button button-primary" href="#service-enquiry"><MessageCircle size={18} /> Enquire on WhatsApp</a><a className="button button-secondary" href={`tel:${company.phone}`} onClick={() => trackEnquiry("phone_click", { service: service.title })}><Phone size={18} /> Call us</a></div>
    </div></section>
    <section className="section"><div className="container service-detail-layout">
      <article className="service-copy"><div className="service-feature-icon"><Icon size={32} /></div><h2>About {service.title.toLowerCase()}</h2><p>{service.description}</p>
        <h2>What to share with us</h2><p>To help us understand your requirement, share the tyre type or size if known, quantity, vehicle application and a brief description of the issue. Service suitability and availability are confirmed after discussion and, where required, inspection.</p>
        <ul className="service-check-list"><li><CheckCircle2 size={18} /> Tyre type and application</li><li><CheckCircle2 size={18} /> Quantity and vehicle details</li><li><CheckCircle2 size={18} /> Condition, damage or service requirement</li><li><CheckCircle2 size={18} /> Location and preferred next step</li></ul>
        <h2>Service area</h2><p>Contact Akhtar Tyre Retreading Works in Hinganghat, Wardha, Maharashtra to discuss this service and confirm whether your requirement can be handled.</p><Link className="text-link" to="/contact">View contact details <ArrowRight size={16} /></Link>
      </article><aside className="service-enquiry-card" id="service-enquiry"><WhatsAppEnquiry defaultService={service.id} compact /></aside>
    </div></section>
  </>;
}
export default ServiceDetail;
