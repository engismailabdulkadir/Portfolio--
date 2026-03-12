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
import useTheme from "../hooks/useTheme";

function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar links={navLinks} theme={theme} toggleTheme={toggleTheme} />
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
