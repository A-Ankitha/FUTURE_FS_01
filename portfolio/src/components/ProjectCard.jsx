export default function ProjectCard({ project, onOpen }) {
  return (
    <button className="pcard" onClick={() => onOpen(project)}>
      <div className="pcard-top">
        <span className="tag">{project.tag}</span>
        {project.status && <span className="tag status">{project.status}</span>}
      </div>
      <h3>{project.name}</h3>
      <p className="desc">{project.desc}</p>
      <div className="chip-row">
        {project.tech.slice(0, 4).map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
      <div className="expand">View details →</div>
    </button>
  );
}
