import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Projects from './sections/Projects.jsx';
import WhyChooseUs from './sections/WhyChooseUs.jsx';
import Stats from './sections/Stats.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-somcit-ink">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Stats />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
