import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = '고객문의 - 건강한학교 병원동행서비스';
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would implement the actual form submission
    alert('문의사항이 접수되었습니다. 담당자가 확인 후 연락 드리겠습니다.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-primary-600" />,
      title: '전화',
      content: '010-8678-0842',
      link: 'tel:010-8678-0842',
    },
    {
      icon: <Mail className="h-8 w-8 text-primary-600" />,
      title: '이메일',
      content: 'contact@healthyschool.kr',
      link: 'mailto:contact@healthyschool.kr',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
      title: '카카오톡',
      content: '카카오톡 ID: healthyschool',
      link: '#',
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: '서비스 지역',
      content: '서울특별시 및 경기도 전 지역',
      link: '#',
    },
  ];

  const faqItems = [
    {
      question: '최소 이용 시간은 어떻게 되나요?',
      answer: '모든 서비스의 기본 이용 시간은 4시간부터입니다. 병원 진료 시간 및 이동 시간을 고려하여 충분한 서비스 시간을 제공하기 위해 최소 4시간으로 운영하고 있습니다.',
    },
    {
      question: '서비스 지역은 어디까지인가요?',
      answer: '현재 서울특별시와 경기도 지역의 병원을 대상으로 서비스를 제공하고 있습니다. 그 외 지역의 경우 별도 상담을 통해 가능 여부를 확인해 드리고 있습니다.',
    },
    {
      question: '예약은 얼마나 미리 해야 하나요?',
      answer: '원활한 서비스 제공을 위해 최소 2~3일 전에 예약해 주시기를 권장합니다. 급한 경우에도 최대한 도와드리도록 노력하고 있으니 문의주세요.',
    },
    {
      question: '결제는 어떻게 이루어지나요?',
      answer: '서비스 예약 확정 후 계좌이체로 선결제를 원칙으로 하고 있습니다. 정기 이용 고객의 경우 월별 결제도 가능하니 상담 시 문의해 주세요.',
    },
    {
      question: '매니저는 어떤 분들인가요?',
      answer: '모든 매니저는 병원행정사, 의료보험사, 병원동행매니저1급, 의무기록사, 위생사 등의 자격을 보유한 전문가들로 구성되어 있습니다. 또한 정기적인 교육을 통해 서비스 품질을 유지하고 있습니다.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">고객 문의</h1>
            <p className="text-xl text-primary-100">
              궁금하신 점이 있으신가요? 언제든지 문의해주세요.
              친절하게 답변해 드리겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="card p-6 hover:shadow-lg text-center transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-primary-600">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-700 mb-6">문의하기</h2>
              <p className="text-gray-600 mb-8">
                궁금하신 점이나 요청사항을 남겨주시면 빠른 시간 내에 답변 드리겠습니다.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="card p-6">
                <div className="mb-4">
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

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', { required: '이메일을 입력해주세요' })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>
                  )}
                </div>

                <div className="mb-4">
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

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    문의 제목 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('subject', { required: '제목을 입력해주세요' })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message?.toString()}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('message', { required: '문의 내용을 입력해주세요' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message?.toString()}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  문의하기
                </button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-700 mb-6">자주 묻는 질문</h2>
              <p className="text-gray-600 mb-8">
                고객님들이 자주 문의하시는 질문들에 대한 답변입니다.
                더 궁금한 점은 문의 양식을 통해 문의해주세요.
              </p>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.details
                    key={index}
                    className="card p-6 cursor-pointer group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <summary className="font-semibold text-gray-800 flex items-center justify-between list-none">
                      {faq.question}
                      <ArrowRight className="h-5 w-5 text-primary-500 transition-transform duration-300 group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </motion.details>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">더 궁금하신 점이 있으신가요?</h3>
                <p className="text-gray-600 mb-4">
                  아래 채널을 통해 언제든지 문의해주세요. 친절히 안내해 드리겠습니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:010-8678-0842"
                    className="btn btn-primary inline-flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    전화 문의하기
                  </a>
                  <a
                    href="#"
                    className="btn btn-accent inline-flex items-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    카카오톡 문의하기
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;