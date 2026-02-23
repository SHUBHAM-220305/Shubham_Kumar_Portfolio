import LuxuryBackground from "./components/LuxuryBackground";
import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LuxuryBackground />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
