import { Helmet } from "react-helmet-async";
import { company } from "../data/company";

function SEO({
  title,
  description,
  canonical,
}) {
  const siteName = "Akhtar Tyre Retreading Works";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const { address } = company;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    legalName: company.legalName,
    url: canonical || "https://akhtartyre.shop/",
    telephone: `+91-${company.phone}`,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.road}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    areaServed: company.serviceArea.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "GSTIN",
        value: company.gstin,
      },
      {
        "@type": "PropertyValue",
        propertyID: "CIN",
        value: company.cin,
      },
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;