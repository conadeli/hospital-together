import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ManagersSection from '../components/home/ManagersSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialSection from '../components/home/TestimonialSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = '건강한학교 병원동행서비스 - 전문 병원 동행 서비스';
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ManagersSection />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;