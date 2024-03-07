import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import { GoogleAnalytics } from "./components/google-analytics";
import Addproject from "./pages/addproject";

function App() {
  return (
    <div>
      <GoogleAnalytics />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" title="Home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addproject" element={<Addproject />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
