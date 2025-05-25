import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Car, Shield, Check } from 'lucide-react';

const ServicePage = () => {
  useEffect(() => {
    document.title = '서비스 소개 - 건강한학교 병원동행서비스';
  }, []);

  const basicServices = [
    '픽업지 직접 방문 (서울, 경기권)',
    '버스터미널/기차역 마중픽업',
    '대중교통 이용 (비용 추가)',
    '병원 내 이동 동행',
    '진료 및 검사 동행',
    '처방전 수령 및 약 수령',
    '진료 결과 설명 도움',
  ];

  const specialServices = [
    '자택 픽업 및 드랍 서비스',
    '버스터미널/기차역 픽업 및 드랍',
    '개인 차량 이용 가능',
    '병원 내 이동 동행',
    '진료 및 검사 동행',
    '처방전 수령 및 약 수령',
    '진료 결과 설명 도움',
    'VIP 케어 서비스',
  ];

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-primary-500" />,
      title: '4시간부터 시작',
      description: '모든 서비스는 최소 4시간부터 이용 가능합니다. 병원 방문에 필요한 충분한 시간을 확보하여 여유롭게 진행합니다.',
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary-500" />,
      title: '서울 및 경기 지역 서비스',
      description: '현재 서울 및 경기도 내 모든 병원을 대상으로 서비스를 제공합니다. 지방에서 오시는 경우 별도 상담이 필요합니다.',
    },
    {
      icon: <Car className="h-10 w-10 text-primary-500" />,
      title: '다양한 이동 옵션',
      description: '대중교통, 택시, 개인차량 등 다양한 이동 방법을 통해 병원까지 안전하게 이동합니다.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-500" />,
      title: '안전한 서비스',
      description: '전문 자격을 갖춘 매니저들이 안전하고 친절하게 서비스를 제공합니다. 모든 매니저는 엄격한 검증 절차를 거쳤습니다.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">서비스 소개</h1>
            <p className="text-xl text-primary-100">
              건강한학교 병원동행서비스는 환자분들의 병원 방문을 더 편안하고
              효율적으로 만들어드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">서비스 비교</h2>
          <p className="subtitle">
            기본 서비스와 스페셜 서비스 중 필요에 맞는 서비스를 선택하세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Service */}
            <motion.div
              className="card border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-600 text-white p-6">
                <h3 className="text-2xl font-bold">기본 서비스</h3>
                <div className="text-3xl font-bold mt-2">₩20,000<span className="text-sm font-normal">/시간</span></div>
                <p className="text-primary-100 text-sm mt-1">4시간 최소 이용</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {basicServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Special Service */}
            <motion.div
              className="card border border-primary-300 overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-700 text-white p-6">
                <h3 className="text-2xl font-bold">스페셜 서비스</h3>
                <div className="text-3xl font-bold mt-2">₩30,000<span className="text-sm font-normal">/시간</span></div>
                <p className="text-primary-100 text-sm mt-1">4시간 최소 이용</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {specialServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="tel:010-8678-0842" 
              className="btn btn-primary mr-4"
            >
              전화 예약하기
            </a>
            <a 
              href="#" 
              className="btn btn-outline"
            >
              카카오톡 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">서비스 진행 과정</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스의 진행 과정을 알려드립니다.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            {[
              {
                title: '예약 신청',
                description: '전화, 카카오톡, 또는 예약 폼을 통해 서비스를 신청합니다.',
              },
              {
                title: '상담 및 일정 확인',
                description: '서비스 내용과 일정을 상담하고 확정합니다.',
              },
              {
                title: '매니저 배정',
                description: '전문 자격을 갖춘 적합한 매니저를 배정해 드립니다.',
              },
              {
                title: '서비스 제공',
                description: '약속된 날짜와 시간에 매니저가 동행하여 서비스를 제공합니다.',
              },
              {
                title: '피드백 및 사후관리',
                description: '서비스 완료 후 피드백을 받고 추가적인 도움이 필요한지 확인합니다.',
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 md:pr-8 md:pl-0 pl-12">
                  <div className={`p-6 bg-white rounded-lg shadow-md border ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index % 2 === 1 && (
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;