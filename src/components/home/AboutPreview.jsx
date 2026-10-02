import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import SectionHeading from "../common/SectionHeading";

const points = [
  "Truck tyre retreading",
  "Tractor tyre retreading",
  "Industrial and heavy-duty tyre services",
  "Puncture and tyre repair",
  "Old and used tyre purchase",
  "Tyre inspection and evaluation",
];

function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-panel">
            <span>AKHTAR</span>
            <strong>TYRE</strong>
            <span>RETREADING</span>
          </div>
        </div>

        <div className="about-content">
          <SectionHeading
            eyebrow="ABOUT OUR BUSINESS"
            title="Tyre Services Built Around Practical Commercial Needs"
            description="We provide tyre retreading and related services for customers in and around Hinganghat, Wardha, Maharashtra."
            align="left"
          />

          <p>
            {company.name} focuses on tyre retreading and related
            tyre services for trucks, tractors and industrial and
            heavy-duty vehicle applications.
          </p>

          <div className="about-points">
            {points.map((point) => (
              <div className="about-point" key={point}>
                <CheckCircle2 size={19} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="text-link">
            Learn more about us
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;