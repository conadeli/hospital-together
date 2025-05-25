import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const ManagersPage = () => {
  useEffect(() => {
    document.title = '매니저 소개 - 건강한학교 병원동행서비스';
  }, []);

  const certifications = [
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: '병원행정사 자격',
      description: '병원 행정 업무 전반에 대한 전문 지식을 갖추고 있어 병원 이용 시 행정적인 도움을 제공합니다.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      title: '의료보험사 자격',
      description: '의료보험 청구 및 처리에 관한 전문 지식으로 보험 관련 문의에 도움을 드립니다.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: '병원동행매니저1급 자격',
      description: '환자 동행 및 병원 내 안내에 특화된 교육을 수료하여 최상의 동행 서비스를 제공합니다.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      title: '의무기록사 자격',
      description: '의무기록 관련 전문 지식을 통해 진료 기록 이해 및 설명에 도움을 드립니다.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: '위생사 자격',
      description: '의료 환경에서의 위생 관리에 대한 전문 지식으로 안전한 병원 이용을 돕습니다.',
    },
  ];

  const managers = [
    {
      name: '김은지 매니저',
      image: 'https://images.pexels.com/photos/5453818/pexels-photo-5453818.jpeg?auto=compress&cs=tinysrgb&w=300',
      role: '선임 병원동행 매니저',
      certifications: ['병원행정사', '의료보험사', '병원동행매니저1급'],
      experience: '7년',
      specialty: '대형병원 외래진료 동행, 정기검진 동행',
    },
    {
      name: '박준호 매니저',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=300',
      role: '수석 병원동행 매니저',
      certifications: ['의무기록사', '병원동행매니저1급'],
      experience: '5년',
      specialty: '암환자 진료 동행, 투석환자 정기 진료',
    },
    {
      name: '이지윤 매니저',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=300',
      role: '병원동행 매니저',
      certifications: ['병원행정사', '위생사', '병원동행매니저1급'],
      experience: '4년',
      specialty: '노인환자 동행, 재활치료 동행',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">전문 매니저 소개</h1>
            <p className="text-xl text-primary-100">
              건강한학교 병원동행서비스의 전문 자격을 갖춘 매니저들을 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">매니저 자격 사항</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스의 매니저들은 다음과 같은 전문 자격을 보유하고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="card p-6 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 bg-primary-50 inline-block rounded-lg">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-700">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Profiles */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">매니저 프로필</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스의 경험 많은 전문 매니저들을 만나보세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {managers.map((manager, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-700">{manager.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{manager.role}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">보유 자격증</h4>
                    <div className="flex flex-wrap gap-2">
                      {manager.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 font-semibold">경력</p>
                      <p className="text-gray-800">{manager.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">전문 분야</p>
                      <p className="text-gray-800">{manager.specialty}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary-700 mb-4">매니저 선발 과정</h3>
            <p className="text-gray-600 mb-6">
              건강한학교 병원동행서비스의 모든 매니저는 엄격한 선발 과정을 통해 선정됩니다.
              환자의 안전과 편안함을 최우선으로 생각하며, 전문 지식과 서비스 마인드를 갖춘
              인재만을 채용하고 있습니다.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>지원서 및 자격증 검토</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>의료 및 간병 지식 테스트</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>서비스 마인드 및 인성 면접</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>실습 교육 및 현장 트레이닝</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                <span>최종 선발 및 정기적인 교육</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagersPage;