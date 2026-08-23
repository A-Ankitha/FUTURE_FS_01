import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { trackEvent } from "../lib/analytics";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(null);

  function openProject(p) {
    setActive(p);
    trackEvent("project_opened", { slug: p.slug });
  }

  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow">featured work</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={openProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
