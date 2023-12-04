import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import About from "./pages/About";
export default function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/about" element={<About/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )

}

