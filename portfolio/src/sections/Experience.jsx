import { experience } from "../data/experience";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="eyebrow">experience</div>
        <h2 className="section-title">Timeline</h2>
        <div className="timeline">
          {experience.map((item) => (
            <div className="tl-item" key={item.org}>
              <div className="tl-head">
                <h3>{item.org}</h3>
                <span className="tl-date">{item.date}</span>
              </div>
              <div className="tl-org">{item.role}</div>
              {item.desc && <p>{item.desc}</p>}
              {item.placeholder && <div className="placeholder-note">{item.placeholder}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
