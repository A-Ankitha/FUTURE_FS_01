import Navbar from "../components/Navbar";

// Future-ready stub. Not linked from the nav yet — add a route in App.jsx
// (already present, commented out) and a nav entry in data/site.js once
// there's real content. Swap the empty state for a list of posts read
// from src/data/posts.js (create it) or a headless CMS.
export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 140, minHeight: "60vh" }} className="container">
        <div className="eyebrow">blog</div>
        <h1 className="section-title">Writing</h1>
        <p style={{ color: "var(--text-dim)" }}>Nothing published yet — this page is wired up and ready for posts.</p>
      </main>
    </>
  );
}
