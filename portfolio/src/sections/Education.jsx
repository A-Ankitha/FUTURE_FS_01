import { education } from "../data/experience";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="eyebrow">education</div>
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="edu-card" key={index}>
              <div>
                <h3>{item.degree}</h3>

                <p className="mono faint">
                  {item.college} · {item.location}
                </p>

                <p className="edu-grade">
                  {item.grade}
                </p>
              </div>

              <span className="tl-date">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}