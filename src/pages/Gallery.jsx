import { Helmet } from "react-helmet-async";
import { Camera, Image, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Gallery() {
  const canonical = "https://www.akhtartyre.shop/gallery";
  return <>
    <Helmet><title>Gallery | Akhtar Tyre Retreading Works, Hinganghat</title><meta name="description" content="Gallery for Akhtar Tyre Retreading Works in Hinganghat, Wardha. Contact us to discuss tyre retreading and related services." /><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>
    <section className="page-hero"><div className="container"><span className="section-eyebrow">GALLERY</span><h1>Our Tyre Services</h1><p>We are building this gallery around verified photographs of our actual premises, equipment and work. We do not use stock photos to represent work at the business.</p></div></section>
    <section className="section"><div className="container"><div className="gallery-placeholder">
      <div className="gallery-placeholder-icon"><Camera size={34} /></div><span className="section-eyebrow">PHOTOGRAPHS PENDING</span><h2>Authentic business photographs will appear here</h2>
      <p>We will add photographs of the workshop, retreading work, tyres and equipment after the images have been verified. Until then, this page avoids presenting illustrations or stock images as real business photographs.</p>
      <Link className="button button-primary" to="/contact"><Image size={18} /> Contact the business <MessageCircle size={18} /></Link>
    </div></div></section>
  </>;
}
export default Gallery;
