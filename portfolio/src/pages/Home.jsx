import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

// This is the current MVP: a single scrolling page built from the section
// components below. Kept as its own "page" component (rather than inlined
// in App.jsx) so it slots cleanly into the router alongside future pages
// like Blog and ProjectCaseStudy.
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Ankitha A. — built with React + Vite.</p>
      </footer>
    </>
  );
}
