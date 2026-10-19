import { Navigate, Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, BookOpen, Clock3, MessageCircle } from "lucide-react";

const articles = {
  "tyre-retreading-basics": {
    title: "Tyre Retreading: A Practical Overview",
    description: "A plain-language overview of tyre retreading, casing inspection and questions to ask before arranging a service.",
    readTime: "4 min read", category: "Retreading basics",
    intro: "Tyre retreading involves renewing the tread on a suitable existing tyre casing. Not every used tyre is suitable: casing condition, damage history, intended application and the technical process all matter.",
    sections: [
      ["Why casing condition matters", "A casing needs to be assessed before retreading. Cuts, exposed cords, structural damage, previous repairs and other conditions may affect suitability. Do not assume a tyre can be retreaded based only on its outside appearance."],
      ["What information to share", "When making an enquiry, share the tyre type and size if known, vehicle application, approximate quantity and any visible damage. Photographs can help explain the initial question, but they do not replace an in-person technical assessment."],
      ["Ask before proceeding", "Confirm whether the tyre is suitable for the intended application, what work is proposed, what the service includes and what limitations apply. Follow vehicle and tyre manufacturer guidance and applicable safety requirements."]
    ]
  },
  "when-to-inspect-a-tyre": {
    title: "When Should a Tyre Be Inspected?",
    description: "Understand common reasons to arrange a tyre inspection and why damage and unusual wear should not be ignored.",
    readTime: "3 min read", category: "Tyre care",
    intro: "Regular attention to tyre condition can help identify visible problems before a tyre is returned to service. Inspection frequency should follow manufacturer guidance, operating conditions and applicable fleet safety procedures.",
    sections: [
      ["Signs that need attention", "Visible cuts, bulges, cracks, exposed cords, repeated pressure loss, embedded objects or unusual tread wear are reasons to stop and seek an appropriate assessment. A bulge or suspected structural damage can indicate a serious safety issue."],
      ["Do not rely on appearance alone", "Some damage is not obvious from the outside. Do not continue using a tyre that appears unsafe or has a suspected structural problem; arrange professional evaluation and follow vehicle safety procedures."],
      ["Information to provide", "Share the tyre size if known, vehicle application, operating conditions and symptoms noticed. An inspection is needed to determine the appropriate next step."]
    ]
  },
  "preparing-a-fleet-tyre-enquiry": {
    title: "How to Prepare a Fleet Tyre Enquiry",
    description: "A checklist to help fleet operators share clear tyre service requirements.",
    readTime: "3 min read", category: "Fleet planning",
    intro: "A clear enquiry helps a tyre service provider understand the scale and nature of a fleet requirement. You do not need every technical detail to start a conversation, but the information below can help.",
    sections: [
      ["Vehicle and tyre details", "List vehicle types, tyre sizes where known, approximate quantities and whether the tyres are in service, removed or awaiting assessment."],
      ["Condition and required service", "Describe whether you are enquiring about retreading, inspection, puncture repair or old tyre purchase. Note visible damage or recurring issues without assuming a tyre is safe to repair."],
      ["Location and scheduling", "Include your location, whether tyres are at one site or multiple sites, and your preferred timing. Avoid sending confidential fleet or driver information that is not needed for the enquiry."]
    ]
  }
};

function Guides() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;
  if (slug && !article) return <Navigate to="/guides" replace />;
  const canonical = article ? `https://www.akhtartyre.shop/guides/${slug}` : "https://www.akhtartyre.shop/guides";
  if (!article) return <>
    <Helmet><title>Tyre Care & Retreading Guides | Akhtar Tyre Retreading Works</title><meta name="description" content="Practical guides to tyre retreading, tyre inspection and preparing fleet tyre service enquiries from Akhtar Tyre Retreading Works in Hinganghat." /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">KNOWLEDGE CENTRE</span><h1>Tyre Care & Retreading Guides</h1><p>Practical information to help customers prepare tyre service enquiries. Service suitability always depends on the tyre and a professional assessment.</p></div></section>
    <section className="section"><div className="container"><div className="guide-grid">{Object.entries(articles).map(([key, guide]) => <article className="guide-card" key={key}><div className="guide-card-meta"><span>{guide.category}</span><span><Clock3 size={15} /> {guide.readTime}</span></div><BookOpen size={26} /><h2>{guide.title}</h2><p>{guide.description}</p><Link className="text-link" to={`/guides/${key}`}>Read guide <ArrowRight size={16} /></Link></article>)}</div></div></section>
  </>;
  return <>
    <Helmet><title>{article.title} | Akhtar Tyre Retreading Works</title><meta name="description" content={article.description} /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <article className="section guide-article"><div className="container content-narrow"><Link className="text-link" to="/guides"><ArrowLeft size={16} /> All guides</Link><span className="section-eyebrow">TYRE CARE GUIDE</span><h1>{article.title}</h1><p className="guide-article-intro">{article.intro}</p>{article.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="guide-article-cta"><h2>Have a tyre service question?</h2><p>Contact the team to discuss your specific tyre or fleet requirement.</p><Link className="button button-primary" to="/contact"><MessageCircle size={18} /> Contact us</Link></div><p className="guide-disclaimer">This guide is general information, not a technical inspection or safety certification. Follow tyre and vehicle manufacturer guidance and applicable professional advice.</p></div></article>
  </>;
}
export default Guides;
