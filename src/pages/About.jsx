import { Helmet } from "react-helmet-async";
import { Building2, MapPin, FileText, Phone, Clock, CalendarDays } from "lucide-react";
import { company } from "../data/company";
import SectionHeading from "../components/common/SectionHeading";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.akhtartyre.shop/#business",
  name: company.name,
  url: "https://www.akhtartyre.shop/",
  mainEntityOfPage: "https://www.akhtartyre.shop/about",
  description: company.description,
  telephone: "+918830938317",
  email: company.email,
  foundingDate: "1987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite Abdullah Heights, near Bharat Petrol Pump and Nandori Chowk, National Highway 7",
    addressLocality: "Hinganghat",
    addressRegion: "Maharashtra",
    postalCode: "442301",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
      "https://schema.org/Saturday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/AkhtarTyre/",
    "https://www.akhtartyre.shop/",
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "GSTIN",
    value: company.gstin,
  },
};

function About() {
  const { address } = company;

  return (
    <>
      <Helmet>
        <title>About Us | Owner, Contact & Business Details | Akhtar Tyre Retreading Works</title>
        <meta
          name="description"
          content="Learn about Akhtar Tyre Retreading Works, established in 1987 and owned by Sayyeda Khatton Akhtar. Find our verified phone number, address, opening hours and business details in Hinganghat, Wardha."
        />
        <link rel="canonical" href="https://www.akhtartyre.shop/about" />
        <meta property="og:url" content="https://www.akhtartyre.shop/about" />
        <meta property="og:title" content="About Akhtar Tyre Retreading Works" />
        <meta
          property="og:description"
          content="Business details, proprietor, contact information and location for Akhtar Tyre Retreading Works in Hinganghat, Maharashtra. Established 1987."
        />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">ABOUT US · ESTABLISHED 1987</span>
          <h1>About Akhtar Tyre Retreading Works</h1>
          <p>
            A tyre retreading and tyre rebuilding business in Hinganghat,
            Wardha, Maharashtra, established in 1987.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <SectionHeading
            eyebrow="OUR BUSINESS"
            title="Tyre Retreading & Tyre Rebuilding"
            description={company.description}
            align="left"
          />

          <p>
            {company.name} is a tyre retreading and tyre rebuilding business
            serving customers in Hinganghat and the surrounding Wardha area
            of Maharashtra. The business was established in 1987 and is
            owned by {company.proprietor}.
          </p>

          <p>
            Our stated services include tyre retreading, tyre rebuilding and
            related services. Contact us to discuss your requirements and
            confirm service suitability.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container info-grid">
          <article className="info-card">
            <Building2 size={28} />
            <h2>Business Identity</h2>
            <dl>
              <div><dt>Business Name</dt><dd>{company.name}</dd></div>
              <div><dt>Owner / Proprietor</dt><dd>{company.proprietor}</dd></div>
              <div><dt>Established</dt><dd>1987</dd></div>
              <div><dt>GSTIN</dt><dd>{company.gstin}</dd></div>
            </dl>
          </article>

          <article className="info-card">
            <Phone size={28} />
            <h2>Contact Details</h2>
            <dl>
              <div>
                <dt>Business Mobile</dt>
                <dd><a href="tel:+918830938317">+91 88309 38317</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd><a href="https://www.akhtartyre.shop/">www.akhtartyre.shop</a></dd>
              </div>
              <div>
                <dt>Facebook</dt>
                <dd><a href="https://www.facebook.com/AkhtarTyre/" target="_blank" rel="noopener noreferrer">Akhtar Tyre on Facebook</a></dd>
              </div>
            </dl>
          </article>

          <article className="info-card">
            <MapPin size={28} />
            <h2>Business Address</h2>
            <address>
              {address.street}<br />
              {address.road}<br />
              {address.city}, {address.district}<br />
              {address.state} - {address.postalCode}<br />
              {address.country}
            </address>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Opposite%20Abdullah%20Heights%2C%20near%20Bharat%20Petrol%20Pump%20and%20Nandori%20Chowk%2C%20National%20Highway%207%2C%20Hinganghat%2C%20Wardha%2C%20Maharashtra%20442301"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </p>
          </article>

          <article className="info-card">
            <Clock size={28} />
            <h2>Opening Hours</h2>
            <dl>
              <div><dt>Monday – Saturday</dt><dd>10:00 AM – 7:00 PM</dd></div>
              <div><dt>Sunday</dt><dd>Hours not listed</dd></div>
            </dl>
          </article>

          <article className="info-card">
            <CalendarDays size={28} />
            <h2>Our History</h2>
            <p>
              Established in 1987, Akhtar Tyre Retreading Works serves the
              local area from Hinganghat, Wardha, Maharashtra.
            </p>
          </article>

          <article className="info-card">
            <FileText size={28} />
            <h2>Services</h2>
            <p>Tyre retreading, tyre rebuilding and related services.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;