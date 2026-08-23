# Ankitha A. — Portfolio (React + Vite)

A recruiter-focused developer portfolio, built as a React + Vite single-page
app. See the live section-by-section brief this was built from for full
context; this README covers the codebase itself.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Structure

```
src/
├── components/   # Reusable UI: Navbar, ProjectCard, ProjectModal
├── sections/     # One component per page section (Hero, About, Skills, ...)
├── pages/        # Route-level components (Home = the current MVP page)
├── data/         # Content — edit these, not the components, to update copy
├── hooks/        # useTheme, useScrollSpy, useContactForm
├── lib/          # analytics.js, github.js — small integration stubs
├── App.jsx       # Router setup
├── main.jsx      # Entry point, wraps App in ThemeProvider
└── index.css     # Design tokens (CSS variables) + global styles
```

Content lives in `src/data/` specifically so it can be updated without
touching any component: `site.js` (identity, links, nav), `skills.js`,
`projects.js`, `experience.js` (also holds `education`, and the currently-
unused `certifications` / `achievements` arrays — see below).

## Before you publish

- [ ] Set real values in `src/data/site.js` (email, GitHub, LinkedIn)
- [ ] Add your real GitHub/demo links to each project in `src/data/projects.js`
- [ ] Fill in `src/data/experience.js` → `education` (college, graduation)
- [ ] Add any internships/workshops to `src/data/experience.js`, or delete
      the placeholder entry if you don't have any yet
- [ ] Drop your resume into `public/resume.pdf` (replaces `RESUME_GOES_HERE.txt`)
- [ ] Update the two projects marked "Edit: describe your specific role"

## Future-ready architecture

The brief asked for the codebase to be *structured* for these features
without necessarily building all of them now. Here's what's actually in
place versus what's a placeholder:

| Feature | Status |
|---|---|
| **Dark/light mode** | Live. `src/hooks/useTheme.jsx` + CSS variables in `index.css` (`[data-theme="dark"]` / `[data-theme="light"]`). Toggle is in the Navbar. |
| **Backend-powered contact form** | Wired, not connected. `src/hooks/useContactForm.js` posts to `import.meta.env.VITE_CONTACT_ENDPOINT` if set (e.g. a Formspree URL or a serverless function). Falls back to a friendly "not connected yet" message otherwise. |
| **Project case studies** | Stub page at `src/pages/ProjectCaseStudy.jsx`, reads from `src/data/projects.js` by `slug`. Route is written but commented out in `App.jsx` — uncomment when the content is ready. |
| **Blog** | Stub page at `src/pages/Blog.jsx`, same pattern — route commented out in `App.jsx`. |
| **GitHub integration** | `src/lib/github.js` exports `fetchRepoStats(owner, repo)` (stars, last-updated). Not called anywhere yet; wire it into `ProjectCard.jsx` when wanted. |
| **Analytics** | `src/lib/analytics.js` exports `trackEvent()` / `trackPageview()`. Currently logs to console in dev only. A few real call sites already exist (project modal opens, resume view/download) so switching providers later is a one-file change. |
| **Certifications / Achievements** | Data arrays exist in `src/data/experience.js`, empty, with the shape commented in. No section renders them yet — add a `Certifications.jsx` section following the `Skills.jsx` pattern when there's content. |
| **More projects** | Just add another object to the `projects` array in `src/data/projects.js` — cards and the modal both read from it automatically. |
| **Custom domain** | Deployment concern, not code — point your domain's DNS at wherever you deploy (Vercel/Netlify/etc.) and it works as-is. |

## Notes

- No authentication and no database — intentionally, per the brief.
- Styling is plain CSS with variables, not Tailwind, so there's no build
  step beyond Vite itself.
- The design is dark-by-default; light mode uses the same component tree,
  just different token values.
