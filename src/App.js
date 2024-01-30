import React, {useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import RecentProjects from './pages/recentprojects';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-RHDB6EHHSC"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function App(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
    return(
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects/:projectName" element={<ProjectPage />}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )

}

