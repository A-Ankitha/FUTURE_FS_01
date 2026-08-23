import DeveloperGraphic from "../components/DeveloperGraphic";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">

        <div className="about-text">
          <div className="eyebrow">about</div>

          <h2 className="section-title">
            Who I am
          </h2>

          <p>
            I like turning ideas that start as rough sketches
            into things people can actually use. As a Computer
            Science Engineering student, I've found myself
            especially drawn to the space where{" "}
            <strong>
              web development, AI, and cybersecurity
            </strong>{" "}
            meet.
          </p>

          <p>
            Most of my projects begin with a simple question:
            <em> "Can I build this?"</em> From a MERN task
            manager and an AI-assisted resume builder to
            ClickDefender and CogniFi, I've been learning by
            taking ideas from an empty repository to working
            applications — designing the interface, building
            the APIs, connecting the data, and figuring out
            what breaks along the way.
          </p>

          <p>
            I'm still building my foundation, and I'm honest
            about that. I don't believe knowing everything is
            the goal.{" "}
            <strong>
              Understanding, experimenting, debugging,
              and improving
            </strong>{" "}
            are. Every project gives me another opportunity
            to turn something I didn't know yesterday into
            something I can build today.
          </p>

          <div className="about-mantra">
            <span>BUILD</span>
            <i />
            <span>DEBUG</span>
            <i />
            <span>LEARN</span>
            <i />
            <span>REPEAT</span>
          </div>
        </div>

        <div className="about-visual">
          <DeveloperGraphic />
        </div>

      </div>
    </section>
  );
}