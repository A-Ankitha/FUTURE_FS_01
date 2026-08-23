import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <Loader onComplete={handleLoaderComplete} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
// Future-ready: Blog and ProjectCaseStudy pages already exist in src/pages
// and are router-ready. Uncomment the imports and routes below once there's
// real content — no restructuring needed.
// import Blog from "./pages/Blog";
// import ProjectCaseStudy from "./pages/ProjectCaseStudy";
