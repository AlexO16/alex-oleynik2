import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


function App() {
  const [currTab, setCurrTab] = useState("Home")

  return (
    <div>
      <Router>
        <Navbar currTab={currTab} setCurrTab={setCurrTab} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
