import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

// Future-ready stub for deep-linkable, SEO-indexable project pages
// (as opposed to the in-page modal, which is great for browsing but not
// linkable). Route lives in App.jsx, commented out until this is fleshed
// out with real long-form case-study content per project.
export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 140, minHeight: "60vh" }} className="container">
        {project ? (
          <>
            <div className="eyebrow">case study</div>
            <h1 className="section-title">{project.name}</h1>
            <p style={{ color: "var(--text-dim)", maxWidth: 600 }}>{project.solution}</p>
          </>
        ) : (
          <>
            <h1 className="section-title">Project not found</h1>
            <Link to="/" className="btn btn-ghost">← Back home</Link>
          </>
        )}
      </main>
    </>
  );
}
