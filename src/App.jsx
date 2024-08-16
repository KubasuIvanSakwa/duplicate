import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeSkeleton from './components/homeskeleton/HomeSkeleton';
import About from './components/about/About';
import Services from './components/services/Services';
import Pages from './components/pages/Pages';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Importing the ManiPedi component
import ManiPedi from './components/MainServices/ManiPedi';

// Importing the Massage component
import Massage from './components/massage/Massage';

// Importing the NailArt component
import NailArt from './components/nailart/NailArt';

// Importing the NailExtension component
import NailExtension from './components/nailextension/NailExtension';

// Importing the MicroBlading component
import MicroBlading from './components/MicroBlading';
import Gallery from './components/gallery/Gallery';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes className="content">
        <Route path="/" element={<HomeSkeleton />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pedicure-manicure" element={<ManiPedi />} />
        {/* Adding the new route for Massage */}
        <Route path="/massage" element={<Massage />} />

        {/* Adding a Nail Art route */}
        <Route path="/nail-art" element={<NailArt />} />

        {/* Adding Nail Extension */}
        <Route path="/nail-extension" element={<NailExtension />} />

        {/* Adding MicroBlading */}
        <Route path="/microblading" element={<MicroBlading />} />

        {/* Add Gallery route */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;