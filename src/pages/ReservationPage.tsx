import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, MessageSquare, Calendar, Clock, MapPin, User, Mail, FileText, ChevronRight } from 'lucide-react';

const ReservationPage = () => {
  useEffect(() => {
    document.title = '예약과정 - 건강한학교 병원동행서비스';
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would implement the actual form submission
    alert('예약 신청이 접수되었습니다. 담당자가 확인 후 연락 드리겠습니다.');
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">예약과정</h1>
            <p className="text-xl text-primary-100">
              건강한학교 병원동행서비스를 이용하는 방법을 알려드립니다.
              원하시는 방법으로 편리하게 예약해보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">예약 방법</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스는 다양한 방법으로 예약이 가능합니다.
            가장 편리한 방법을 선택해보세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="card p-6 hover:shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Phone className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">전화 예약</h3>
              <p className="text-gray-600 mb-6">
                가장 빠른 예약을 원하신다면 전화로 직접 문의해주세요.
                상담원이 친절하게 안내해드립니다.
              </p>
              <a
                href="tel:010-8678-0842"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                010-8678-0842
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="card p-6 hover:shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <MessageSquare className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">카카오톡 문의</h3>
              <p className="text-gray-600 mb-6">
                편리한 카카오톡으로 문의하시면 빠른 시간 내에
                답변과 함께 예약을 도와드립니다.
              </p>
              <a
                href="#"
                className="btn btn-accent w-full flex items-center justify-center"
              >
                카카오톡 문의하기
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="card p-6 hover:shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">온라인 예약</h3>
              <p className="text-gray-600 mb-6">
                아래의 예약 양식을 작성하시면 확인 후
                빠른 시간 내에 연락드립니다.
              </p>
              <a
                href="#reservation-form"
                className="btn btn-outline w-full flex items-center justify-center"
              >
                예약 양식 작성하기
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">예약 및 진행 과정</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스의 예약부터 서비스 완료까지의 과정을 안내해드립니다.
          </p>

          <div className="max-w-4xl mx-auto mt-12">
            {[
              {
                title: '예약 문의',
                description: '전화, 카카오톡, 온라인 폼 중 편하신 방법으로 문의해주세요.',
                icon: <Phone className="h-6 w-6 text-white" />,
              },
              {
                title: '상담 및 일정 조율',
                description: '필요한 서비스 내용과 방문 일정, 시간을 상담합니다.',
                icon: <Calendar className="h-6 w-6 text-white" />,
              },
              {
                title: '매니저 매칭',
                description: '고객님의 요구사항에 가장 적합한 전문 매니저를 배정합니다.',
                icon: <User className="h-6 w-6 text-white" />,
              },
              {
                title: '서비스 확정',
                description: '최종 일정과 서비스 내용을 확인하고 예약을 확정합니다.',
                icon: <Check className="h-6 w-6 text-white" />,
              },
              {
                title: '서비스 제공',
                description: '예정된 일자에 매니저가 방문하여 병원동행 서비스를 제공합니다.',
                icon: <Heart className="h-6 w-6 text-white" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex mb-8 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600">
                    {step.icon}
                  </div>
                  {index < 4 && (
                    <div className="h-full w-0.5 bg-primary-200 mx-auto my-2"></div>
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation-form" className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-primary-700">예약 양식</h2>
          <p className="subtitle">
            아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
          </p>

          <motion.div 
            className="max-w-3xl mx-auto mt-8 card p-8 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('name', { required: '이름을 입력해주세요' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="010-0000-0000"
                    {...register('phone', { required: '연락처를 입력해주세요' })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message?.toString()}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    {...register('email')}
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
                    서비스 유형 *
                  </label>
                  <select
                    id="serviceType"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('serviceType', { required: '서비스 유형을 선택해주세요' })}
                  >
                    <option value="">서비스 선택</option>
                    <option value="basic">기본 서비스</option>
                    <option value="special">스페셜 서비스</option>
                    <option value="custom">맞춤 상담 필요</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceType.message?.toString()}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    희망 날짜 *
                  </label>
                  <input
                    type="date"
                    id="date"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('date', { required: '날짜를 선택해주세요' })}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message?.toString()}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    희망 시간 *
                  </label>
                  <input
                    type="time"
                    id="time"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('time', { required: '시간을 선택해주세요' })}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message?.toString()}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="hospital" className="block text-gray-700 font-medium mb-2">
                  방문 병원 *
                </label>
                <input
                  type="text"
                  id="hospital"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.hospital ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="병원명 및 위치"
                  {...register('hospital', { required: '방문 병원을 입력해주세요' })}
                />
                {errors.hospital && (
                  <p className="text-red-500 text-sm mt-1">{errors.hospital.message?.toString()}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  추가 요청사항
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="필요한 서비스나 특별한 요청사항이 있으시면 적어주세요."
                  {...register('message')}
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    {...register('agreement', { required: '이용약관에 동의해주세요' })}
                  />
                  <span className="text-gray-700 text-sm">
                    개인정보 수집 및 이용에 동의합니다. *
                  </span>
                </label>
                {errors.agreement && (
                  <p className="text-red-500 text-sm mt-1">{errors.agreement.message?.toString()}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                예약 신청하기
              </button>
            </form>
          </motion.div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              예약 관련 문의사항은 <a href="tel:010-8678-0842" className="text-primary-600 font-semibold">010-8678-0842</a>로 연락주세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;