import { ArrowRight, Phone, MapPin } from "lucide-react";
import { company } from "../../data/company";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-shape hero-shape-one" />
      <div className="hero-background-shape hero-shape-two" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">
            TYRE RETREADING & TYRE SERVICES
          </span>

          <h1>
            Reliable Tyre Solutions for
            <span> Commercial & Heavy-Duty Vehicles</span>
          </h1>

          <p className="hero-description">
            {company.description}
          </p>

          <div className="hero-actions">
            <Button to="/services">
              Explore Our Services
              <ArrowRight size={18} />
            </Button>

            <Button
              href={`tel:${company.phone}`}
              variant="secondary"
            >
              <Phone size={18} />
              Call {company.phoneDisplay}
            </Button>
          </div>

          <div className="hero-location">
            <MapPin size={18} />
            <span>
              Hinganghat, Wardha, Maharashtra
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-tyre-card">
            <div className="hero-tyre-ring">
              <div className="hero-tyre-inner">
                <span>AT</span>
              </div>
            </div>

            <div className="hero-card-label">
              <strong>TYRE RETREADING</strong>
              <span>
                Trucks • Tractors • Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;