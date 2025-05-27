import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
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
        <ServicesSection />
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">빠른 문의</h3>
            <p className="text-gray-600 mt-2">
              전화나 카카오톡으로 빠르게 문의하실 수 있습니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card p-8 text-center hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-4 mb-6">
                <Phone className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">전화 문의</h3>
              <p className="text-gray-600 mb-6">빠른 상담이 필요하시면 전화로 문의해주세요.</p>
              <a 
                href="tel:010-8678-0842"
                className="btn btn-primary w-full"
              >
                전화하기
              </a>
            </motion.div>

            <motion.div 
              className="card p-8 text-center hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-4 mb-6">
                <MessageSquare className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">카카오톡 문의</h3>
              <p className="text-gray-600 mb-6">편리한 카카오톡으로 문의하세요.</p>
              <a 
                href="https://open.kakao.com/o/sr7br8xh" 
                className="btn bg-[#FFE812] hover:bg-[#FFE812]/90 text-[#3A1D1D] font-bold w-full"
              >
                카카오톡 문의
              </a>
            </motion.div>
          </div>
        </div>
        <ManagersSection />
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
