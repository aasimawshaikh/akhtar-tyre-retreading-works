import { Search, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Inspection",
    description:
      "The tyre or casing is examined to understand its condition and requirements.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Suitability for repair or retreading is considered based on the tyre's condition and application.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Service",
    description:
      "The appropriate tyre service is carried out according to the requirements of the tyre.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Completion",
    description:
      "The completed tyre is checked before being returned to the customer.",
  },
];

function Process() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="From Inspection to Service"
          description="A straightforward approach helps us understand the tyre and the service required."
        />

        <div className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>

                <div className="process-icon">
                  <Icon size={23} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;