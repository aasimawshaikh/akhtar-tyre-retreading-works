import { services } from "../data/services";
import SectionHeading from "../components/common/SectionHeading";
import ContactCTA from "../components/home/ContactCTA";

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">OUR SERVICES</span>

          <h1>Tyre Retreading & Tyre Services</h1>

          <p>
            Services for commercial, agricultural and industrial
            tyre applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES"
            title="What We Provide"
            description="Our services depend on tyre type, condition, application and technical suitability."
          />

          <div className="services-detail-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-detail-card"
                  key={service.id}
                >
                  <div className="service-icon">
                    <Icon size={27} />
                  </div>

                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <div className="vehicle-tags">
                    {service.vehicleTypes.map((vehicle) => (
                      <span key={vehicle}>{vehicle}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

export default Services;