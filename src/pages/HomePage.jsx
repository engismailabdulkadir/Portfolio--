import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Testimonials from "../components/sections/Testimonials";
import ScrollToTop from "../components/ui/ScrollToTop";
import { navLinks } from "../data/site";

function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar links={navLinks} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer links={navLinks} />
      <ScrollToTop />
    </div>
  );
}

export default HomePage;
