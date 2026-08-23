import { site } from "../data/site";
import { trackEvent } from "../lib/analytics";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-box">
          <h2>Want the short version?</h2>
          <p>One page, PDF, everything above without the scrolling.</p>
          <div className="resume-actions">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => trackEvent("resume_view")}
            >
              View Resume ↗
            </a>
            <a
              href={site.resumeUrl}
              download
              className="btn btn-ghost"
              onClick={() => trackEvent("resume_download")}
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
