import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoadBand from './components/RoadBand';
import ServicesSection from './components/ServicesSection';
import VehiclesSection from './components/VehiclesSection';
import RoutesSection from './components/RoutesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
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
        <RoutesSection />
        <HowItWorksSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
