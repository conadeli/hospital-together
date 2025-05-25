import { motion } from 'framer-motion';
import { Award, ArrowRight, Star } from 'lucide-react';

const ManagersSection = () => {
  const certifications = [
    '병원행정사 자격',
    '의료보험사 자격',
    '병원동행매니저1급 자격',
    '의무기록사 자격',
    '위생사 자격',
  ];

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-secondary-50" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/hostoge1.jpg"
              alt="전문 병원 동행 매니저"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
              <Star className="h-5 w-5" />
              <span className="font-medium">전문 자격 보유</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              신뢰할 수 있는<br />
              <span className="text-primary-600">전문 병원동행 매니저</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              안녕하세요, 건강한학교 병원동행서비스를 운영하고 있는 전문 매니저입니다.
              다년간의 경험과 전문 자격을 바탕으로 환자분들의 편안하고 안전한 병원 방문을
              도와드리고 있습니다.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">보유 자격증</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-primary-100"
                  >
                    <Award className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn bg-primary-600 hover:bg-primary-700 text-white inline-flex items-center"
              >
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManagersSection;