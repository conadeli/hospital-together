import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import ManagersSection from './components/home/ManagersSection';
import PricingSection from './components/home/PricingSection';
import TestimonialSection from './components/home/TestimonialSection';
import ContactSection from './components/home/ContactSection';
import NoticeBoard from './components/home/NoticeBoard';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ManagersSection />
        <ServicesSection />
        <PricingSection />
        <NoticeBoard />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;