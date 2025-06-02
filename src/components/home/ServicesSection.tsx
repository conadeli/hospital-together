import { motion } from 'framer-motion';
import { Clock, MapPin, Car, User, CreditCard, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const serviceItems = [
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      title: '시간당 서비스',
      description: '기본 서비스 20,000원, 스페셜 서비스 30,000원의 합리적인 가격으로 이용 가능합니다.',
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary-500" />,
      title: '서울 및 경기 지역',
      description: '현재 서울 및 경기도 지역 내 병원 동행 서비스를 제공하고 있습니다.',
    },
    {
      icon: <Car className="h-8 w-8 text-primary-500" />,
      title: '픽업 서비스',
      description: '기본 서비스는 직접 방문 및 대중교통 픽업, 스페셜 서비스는 자택 픽업/드랍도 가능합니다.',
    },
    {
      icon: <User className="h-8 w-8 text-primary-500" />,
      title: '전문 매니저',
      description: '병원행정사, 의료보험사, 의무기록사 등 다양한 자격을 갖춘 전문 매니저가 동행합니다.',
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary-500" />,
      title: '할인 혜택',
      description: '20시간 단위 일괄 구매 시 10% 할인 혜택을 제공합니다.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: '특수 환자 케어',
      description: '투석환자, 암환자 및 대형병원 정기 외래진료자에게 특화된 서비스를 제공합니다.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-primary-700">서비스 소개</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스는 환자분들의 병원 내원을 편안하게 도와드립니다.
            전문 매니저들이 함께하는 맞춤형 서비스로 병원 방문의 어려움을 해소해 드립니다.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceItems.map((item, index) => (
            <motion.div 
              key={index}
              className="card hover:shadow-lg p-6 flex flex-col items-start"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-lg">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
        <button
  onClick={() => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="btn btn-primary inline-flex items-center"
>
  추천매니저 특징
  <ArrowRight className="ml-2 h-4 w-4" />
</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
