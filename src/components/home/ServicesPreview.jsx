import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";

function ServicesPreview() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Our Tyre Services"
          description="Tyre-related services for commercial, agricultural and industrial applications."
        />

        <div className="services-grid">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon size={25} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.shortDescription}</p>

                <Link to="/services">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;