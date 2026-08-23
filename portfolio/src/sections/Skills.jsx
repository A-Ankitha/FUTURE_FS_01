import { skillCategories } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="eyebrow">skills</div>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-cat" key={cat.name}>
              <h3>// {cat.name}</h3>
              <div className="chip-row">
                {cat.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
