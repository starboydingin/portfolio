import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import WebProjects from './pages/WebProjects';
import VideoEditing from './pages/VideoEditing';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/web" element={<WebProjects />} />
        <Route path="/portfolio/video" element={<VideoEditing />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
