import { site } from "../data/site";
import { useContactForm } from "../hooks/useContactForm";
import "./Contact.css";

export default function Contact() {
  const { values, errors, status, statusMessage, submitting, update, handleSubmit } = useContactForm();

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="eyebrow">contact</div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>Let's build something useful.</h2>
          <p>Open to internships, freelance work, and roles where I can keep building things like this. The fastest way to reach me is email.</p>
          <div className="contact-links">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email <span>↗</span>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className={`field ${errors.name ? "invalid" : ""}`}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>

          <div className={`field ${errors.email ? "invalid" : ""}`}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          <div className={`field ${errors.message ? "invalid" : ""}`}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={values.message} onChange={(e) => update("message", e.target.value)} />
            {errors.message && <div className="field-error">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </button>

          {status && (
            <div className={`submit-status ${status}`} role="status">{statusMessage}</div>
          )}
        </form>
      </div>
    </section>
  );
}
