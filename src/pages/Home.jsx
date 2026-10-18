import { Helmet } from "react-helmet-async";
import { company } from "../data/company";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import ContactCTA from "../components/home/ContactCTA";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.akhtartyre.shop/#business",
  name: company.name,
  url: "https://www.akhtartyre.shop/",
  description: company.description,
  telephone: "+918830938317",
  email: company.email,
  foundingDate: "1987",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.street}, ${company.address.road}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: "IN"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00"
  },
  sameAs: [company.social.facebook],
  identifier: { "@type": "PropertyValue", propertyID: "GSTIN", value: company.gstin }
};

function Home() {
  return <>
    <Helmet>
      <title>Tyre Retreading in Hinganghat | Akhtar Tyre Retreading Works</title>
      <meta name="description" content="Explore truck and tractor tyre retreading, industrial tyre services, tyre inspection, puncture repair and old tyre purchase in Hinganghat, Wardha, Maharashtra." />
      <link rel="canonical" href="https://www.akhtartyre.shop/" />
      <meta property="og:url" content="https://www.akhtartyre.shop/" />
      <meta property="og:title" content="Akhtar Tyre Retreading Works | Hinganghat, Wardha" />
      <meta property="og:description" content={company.description} />
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    </Helmet>
    <Hero /><AboutPreview /><ServicesPreview /><WhyChooseUs /><Process /><ContactCTA />
  </>;
}
export default Home;
