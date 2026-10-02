import { Building2, MapPin, FileText } from "lucide-react";
import { company } from "../data/company";
import SectionHeading from "../components/common/SectionHeading";

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">ABOUT US</span>
          <h1>About Akhtar Tyre Retreading Works</h1>
          <p>
            Tyre retreading and related tyre services in
            Hinganghat, Wardha, Maharashtra.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <SectionHeading
            eyebrow="OUR BUSINESS"
            title="Tyre Retreading & Related Services"
            description={company.description}
            align="left"
          />

          <p>
            {company.name} provides tyre retreading and related
            tyre services for trucks, tractors and industrial and
            heavy-duty vehicle applications.
          </p>

          <p>
            Our services include tyre inspection, suitable tyre
            retreading, puncture repair, tyre repair and the
            purchase of old or used tyres, subject to inspection,
            condition and suitability.
          </p>

          <p>
            We serve customers in Hinganghat and the surrounding
            areas of Wardha, Maharashtra.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container info-grid">
          <article className="info-card">
            <Building2 size={28} />

            <h2>Business Information</h2>

            <dl>
              <div>
                <dt>Business Name</dt>
                <dd>{company.name}</dd>
              </div>

              <div>
                <dt>GSTIN</dt>
                <dd>{company.gstin}</dd>
              </div>

              <div>
                <dt>Proprietor</dt>
                <dd>{company.proprietor}</dd>
              </div>
            </dl>
          </article>

          <article className="info-card">
            <FileText size={28} />

            <h2>Company Information</h2>

            <dl>
              <div>
                <dt>Legal Company Name</dt>
                <dd>{company.legalName}</dd>
              </div>

              <div>
                <dt>CIN</dt>
                <dd>{company.cin}</dd>
              </div>

              <div>
                <dt>Registration Number</dt>
                <dd>{company.registrationNumber}</dd>
              </div>
            </dl>
          </article>

          <article className="info-card">
            <MapPin size={28} />

            <h2>Location</h2>

            <address>
              {company.address.street}
              <br />
              {company.address.road}
              <br />
              {company.address.city}, {company.address.district}
              <br />
              {company.address.state} - {company.address.postalCode}
              <br />
              {company.address.country}
            </address>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;