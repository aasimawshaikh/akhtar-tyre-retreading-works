import { Helmet } from "react-helmet-async";
import { company } from "../data/company";

function SEO({
  title,
  description,
  canonical,
  structuredData = true,
}) {
  const siteName = "Akhtar Tyre Retreading Works";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const { address } = company;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.akhtartyre.shop/#business",
    name: company.name,
    url: "https://www.akhtartyre.shop/",
    telephone: "+918830938317",
    email: company.email,
    foundingDate: "1987",
    founder: {
      "@type": "Person",
      name: company.proprietor,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.road}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;