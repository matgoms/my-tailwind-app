import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import RecentProjects from "./pages/recentprojects";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-0D2Y2FDLNY";
ReactGA.initialize(TRACKING_ID);

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
