import { Helmet } from "react-helmet-async";
import { company } from "../data/company";

function PrivacyPolicy() {
  const canonical = "https://www.akhtartyre.shop/privacy-policy";
  return <>
    <Helmet><title>Privacy Policy | Akhtar Tyre Retreading Works</title><meta name="description" content="Learn how Akhtar Tyre Retreading Works handles information provided through website enquiries and how WhatsApp and analytics services may process data." /><link rel="canonical" href={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">LEGAL INFORMATION</span><h1>Privacy Policy</h1><p>Information about how this website handles visitor information and customer enquiries.</p></div></section>
    <section className="section"><div className="container legal-content">
      <p><strong>Last reviewed:</strong> 18 October 2026</p>
      <h2>Introduction</h2><p>{company.name} respects the privacy of visitors to this website. This page describes the information you may choose to provide when contacting the business.</p>
      <h2>Information you provide</h2><p>If you use the enquiry form, information you enter—such as your name, phone number, customer type, service requirement, tyre details, location and message—is used to prepare a WhatsApp message. The website opens WhatsApp so you can review and send that message yourself. The form does not submit the information to a website server.</p>
      <h2>WhatsApp and other third-party services</h2><p>If you choose to open or send a WhatsApp message, WhatsApp may process your information under its own terms and privacy policy. Calls, emails, map links and social links are handled by the relevant service providers.</p>
      <h2>Analytics and enquiry measurement</h2><p>The website includes basic enquiry event hooks for phone clicks, WhatsApp clicks and opening a prepared WhatsApp enquiry. If an analytics platform is configured, those events may be sent to that platform to understand how visitors use the contact options. Analytics configuration and any consent requirements should be reviewed before enabling third-party analytics. Do not include customer names, phone numbers or message contents in analytics events.</p>
      <h2>How information is used</h2><p>Information you choose to send directly to the business may be used to respond to enquiries, discuss service suitability and availability, and provide customer support. Avoid including confidential or unnecessary personal information in an enquiry.</p>
      <h2>Retention and security</h2><p>The website form itself does not store or transmit form entries to a business database. Information you send through WhatsApp, email or another service is handled through that service and the business's communication practices.</p>
      <h2>Changes to this policy</h2><p>This policy may be updated when website functionality or information practices change. The latest version will be published on this page.</p>
      <h2>Contact</h2><p>For privacy-related questions, contact <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
    </div></section>
  </>;
}
export default PrivacyPolicy;
