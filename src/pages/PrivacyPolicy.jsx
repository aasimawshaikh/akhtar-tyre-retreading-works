import { company } from "../data/company";

function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">
            LEGAL INFORMATION
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Information about how this website handles visitor
            information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Introduction</h2>

          <p>
            {company.name} respects the privacy of visitors to this
            website. This page explains the general approach to
            information that may be provided through the website.
          </p>

          <h2>Information You Provide</h2>

          <p>
            If you contact us by phone or email, we may receive the
            information you voluntarily provide, such as your name,
            contact details and tyre service requirements.
          </p>

          <h2>Use of Information</h2>

          <p>
            Information provided directly to us may be used to
            respond to enquiries, communicate about requested
            services and provide customer support.
          </p>

          <h2>Contact</h2>

          <p>
            For privacy-related questions, contact us at{" "}
            <a href={`mailto:${company.email}`}>
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;