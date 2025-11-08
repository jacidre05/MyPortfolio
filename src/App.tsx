import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlowCursor from "./Components/GlowCursor";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      
      <GlowCursor />

      <Navbar />

      <AnimatePresence mode="wait">
        <div className="page-content">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
