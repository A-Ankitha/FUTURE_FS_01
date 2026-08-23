import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Close project details">✕</button>

        <h3 id="modalTitle">{project.name}</h3>
        <span className="tag">{project.tag}</span>

        <h4>Problem</h4><p>{project.problem}</p>
        <h4>Solution</h4><p>{project.solution}</p>
        <h4>How it works</h4><p>{project.how}</p>

        <h4>Tech Stack</h4>
        <div className="chip-row">
          {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>

        <h4>Key Features</h4>
        <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>

        <h4>My Contribution</h4><p>{project.contribution}</p>

        <div className="modal-links">
          <a href={project.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          {project.demo && (
            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
          )}
        </div>
      </div>
    </div>
  );
}
