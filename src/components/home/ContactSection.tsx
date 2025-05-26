import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-primary-500" />,
      title: '전화 문의',
      description: '빠른 상담이 필요하시면 전화로 문의해주세요.',
      buttonText: '전화하기',
      onClick: () => setShowPhonePopup(true),
      buttonClass: 'btn-primary',
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary-500" />,
      title: '카카오톡 문의',
      description: '편리한 카카오톡으로 문의하세요.',
      buttonText: '카카오톡 문의',
      link: 'https://open.kakao.com/o/sr7br8xh',
      buttonClass: 'bg-[#FFE812] hover:bg-[#FFE812]/90 text-[#3A1D1D] font-bold',
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-gray-100" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-primary-700">문의하기</h2>
          <p className="subtitle">
            궁금한 점이 있으신가요? 언제든지 문의해주세요.
            친절하게 상담해 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="card p-8 text-center hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-4 mb-6">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              {method.link ? (
                <a href={method.link} className={`btn ${method.buttonClass} w-full`}>
                  {method.buttonText}
                </a>
              ) : (
                <button onClick={method.onClick} className={`btn ${method.buttonClass} w-full`}>
                  {method.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* 상담 요청 폼 */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">상담 요청하기</h3>
            <form
              action="https://script.google.com/macros/s/AKfycbxeHNFGWgt8RPDHugofIqZXtdrCKmlZYprcOZlvWKFTfl-LAODDZDsnB6oujBVx3hNY/exec"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    상담 문의자 성함 *
                  </label>
                  <input
                    type="text"
                    name="entry.123456789"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="entry.987654321"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    상담 요청 일자 *
                  </label>
                  <input
                    type="date"
                    name="entry.111111111"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    상담 요청 시간 *
                  </label>
                  <input
                    type="time"
                    name="entry.222222222"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  환자 성별 *
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="entry.333333333"
                      value="남"
                      required
                      className="mr-2"
                    />
                    남
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="entry.333333333"
                      value="여"
                      required
                      className="mr-2"
                    />
                    여
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  환자 질병 *
                </label>
                <input
                  type="text"
                  name="entry.444444444"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  환자 상태 *
                </label>
                <select
                  name="entry.555555555"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">선택해주세요</option>
                  <option value="심각">심각</option>
                  <option value="보통">보통</option>
                  <option value="경증">경증</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  기타 문의사항
                </label>
                <textarea
                  name="entry.666666666"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 전화 상담 팝업 */}
      {showPhonePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">전화 상담 안내</h3>
            <p className="text-gray-600 mb-6">
              전화 상담 가능 시간은 오전 9시 ~ 오후 6시입니다.
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:010-8678-0842"
                className="btn btn-primary text-center"
                onClick={() => setShowPhonePopup(false)}
              >
                전화하기
              </a>
              <button
                onClick={() => {
                  setShowPhonePopup(false);
                  const form = document.getElementById('consultation-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-outline text-center"
              >
                상담 요청하기
              </button>
              <button
                onClick={() => setShowPhonePopup(false)}
                className="btn btn-outline text-center"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
