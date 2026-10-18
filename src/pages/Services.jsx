import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "../components/common/SectionHeading";
import ContactCTA from "../components/home/ContactCTA";

function Services() {
  const canonical = "https://www.akhtartyre.shop/services";
  return <>
    <Helmet><title>Tyre Retreading & Repair Services in Hinganghat | Akhtar Tyre Retreading Works</title><meta name="description" content="Explore truck and tractor tyre retreading, industrial tyre services, tyre inspection, puncture repair and old tyre purchase in Hinganghat, Wardha, Maharashtra." /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">OUR SERVICES</span><h1>Tyre Retreading & Tyre Services</h1><p>Services for commercial, agricultural and industrial tyre applications. Suitability depends on tyre condition and the intended use.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="SERVICES" title="What We Provide" description="Choose a service to learn more and prepare a detailed enquiry." />
      <div className="services-detail-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-detail-card" key={service.id}><div className="service-icon"><Icon size={27} /></div><h2>{service.title}</h2><p>{service.description}</p><div className="vehicle-tags">{service.vehicleTypes.map((vehicle) => <span key={vehicle}>{vehicle}</span>)}</div><Link className="text-link" to={`/services/${service.id}`}>Explore service <ArrowRight size={16} /></Link></article>; })}</div>
    </div></section><ContactCTA />
  </>;
}
export default Services;
