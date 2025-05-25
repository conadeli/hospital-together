import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const features = {
    basic: [
      '픽업지 직접 방문 가능 (서울, 경기권)',
      '버스터미널/기차역 마중픽업',
      '대중교통 이용 시 비용 추가 발생',
      '최소 이용시간 4시간부터',
      '20시간 일괄 구매 시 10% 할인',
    ],
    special: [
      '자택 픽업 및 드랍 서비스',
      '버스터미널/기차역 픽업 및 드랍',
      '병원 내 이동 동행',
      '최소 이용시간 4시간부터',
      '20시간 일괄 구매 시 10% 할인',
    ],
  };

  return (
    <section className="section bg-white" id="pricing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-primary-700">서비스 요금</h2>
          <p className="subtitle">
            합리적인 가격의 건강한학교 병원동행서비스를 경험해보세요.
            필요에 맞게 기본 서비스와 스페셜 서비스 중 선택하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Service */}
          <motion.div 
            className="card relative border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">기본 서비스</h3>
              <div className="text-sm text-gray-600 mb-6">일반적인 병원 동행이 필요하신 분들을 위한 서비스</div>
              <div className="flex items-end mb-6">
                <div className="text-4xl font-bold text-primary-600">₩20,000</div>
                <div className="text-gray-500 ml-2 mb-1">/ 시간</div>
              </div>
              <div className="text-sm text-accent-600 font-semibold mb-6 inline-block bg-accent-50 px-3 py-1 rounded-full">
                할인 가격 (기존 ₩24,000)
              </div>
              <ul className="space-y-3 mb-8">
                {features.basic.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary w-full text-center"
              >
                예약하기
              </button>
            </div>
          </motion.div>

          {/* Special Service */}
          <motion.div 
            className="card relative border border-primary-200 bg-primary-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
              추천
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">스페셜 서비스</h3>
              <div className="text-sm text-gray-600 mb-6">더 높은 수준의 케어가 필요하신 분들을 위한 프리미엄 서비스</div>
              <div className="flex items-end mb-6">
                <div className="text-4xl font-bold text-primary-600">₩30,000</div>
                <div className="text-gray-500 ml-2 mb-1">/ 시간</div>
              </div>
              <div className="h-8 mb-6"></div>
              <ul className="space-y-3 mb-8">
                {features.special.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn bg-primary-600 hover:bg-primary-700 text-white w-full text-center"
              >
                예약하기
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gray-100 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">추가 안내사항</h4>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>지방픽업 및 드랍은 별도 상담이 필요합니다.</li>
                <li>모든 서비스 기본 이용시간은 4시간부터입니다.</li>
                <li>투석환자, 암환자, 서울 경기권 대형병원 정기 외래진료자에게 추천드립니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;