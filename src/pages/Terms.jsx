import { Helmet } from "react-helmet-async";
import { company } from "../data/company";

function Terms() {
  const canonical = "https://www.akhtartyre.shop/terms";
  return <>
    <Helmet><title>Terms & Conditions | Akhtar Tyre Retreading Works</title><meta name="description" content="Terms for using the Akhtar Tyre Retreading Works website, including service suitability, enquiry details and product availability." /><link rel="canonical" href={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">LEGAL INFORMATION</span><h1>Terms & Conditions</h1><p>General terms for use of this website.</p></div></section>
    <section className="section"><div className="container legal-content">
      <h2>Website information</h2><p>The information published on this website is intended to provide general information about {company.name}, its services and its products.</p>
      <h2>Service suitability</h2><p>Tyre repair and retreading suitability depends on tyre type, casing condition, damage, application and other technical considerations. A service should not be considered confirmed until the tyre has been assessed.</p>
      <h2>Product availability</h2><p>Product descriptions and availability may change. Customers should contact us to confirm current availability, specifications and applicable pricing.</p>
      <h2>Enquiries</h2><p>Website enquiry forms prepare a message for the customer to review and send through WhatsApp. Opening WhatsApp does not guarantee that a message has been sent or received.</p>
      <h2>Contact</h2><p>For enquiries, contact <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a> or <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
    </div></section>
  </>;
}
export default Terms;
