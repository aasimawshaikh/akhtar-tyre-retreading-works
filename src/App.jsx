import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import SEO from "./seo/SEO";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import FleetServices from "./pages/FleetServices";
import Gallery from "./pages/Gallery";
import Guides from "./pages/Guides";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return <div className="app">
    <ScrollToTop />
    <SEO title="Tyre Retreading & Commercial Tyre Services" description="Akhtar Tyre Retreading Works provides tyre retreading, tyre rebuilding and related services in Hinganghat, Wardha, Maharashtra." structuredData={false} />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/fleet-services" element={<FleetServices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<Guides />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </main>
    <Footer />
  </div>;
}
export default App;
