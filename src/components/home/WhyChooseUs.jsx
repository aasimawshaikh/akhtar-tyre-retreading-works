import {
  ClipboardCheck,
  ShieldCheck,
  Settings,
  Handshake,
} from "lucide-react";

import SectionHeading from "../common/SectionHeading";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Inspection First",
    description:
      "Tyre and casing condition should be assessed before determining the appropriate service.",
  },
  {
    icon: Settings,
    title: "Practical Service",
    description:
      "Our services are focused on real-world commercial, agricultural and industrial tyre requirements.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description:
      "We aim to provide clear communication about tyre condition, service suitability and requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Approach",
    description:
      "We avoid recommending repair or retreading where the tyre is not considered suitable for the required service.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="OUR APPROACH"
          title="A Practical Approach to Tyre Services"
          description="We focus on inspection, suitability and the requirements of each tyre application."
        />

        <div className="reasons-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="reason-card" key={reason.title}>
                <Icon size={27} />

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;