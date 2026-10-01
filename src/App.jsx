import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoadBand from './components/RoadBand';
import ServicesSection from './components/ServicesSection';
import VehiclesSection from './components/VehiclesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <RoadBand />
        <ServicesSection />
        <VehiclesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
