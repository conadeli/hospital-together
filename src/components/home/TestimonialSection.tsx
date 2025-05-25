import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: '김복남',
      position: '정기 이용 고객',
      image: '/re1.jpg?auto=compress&cs=tinysrgb&w=150',
      quote: '투석 치료를 받으면서 정기적으로 병원을 방문해야 하는데, 건강한학교 매니저님의 도움으로 훨씬 편하게 다니고 있습니다. 전문적인 지식으로 의료진과의 소통도 원활하게 도와주셔서 감사합니다.',
      rating: 5,
    },
    {
      name: '박현우',
      position: '암환자 가족',
      image: '/re2.jpg?auto=compress&cs=tinysrgb&w=150',
      quote: '어머니의 암 치료 과정에서 병원동행서비스를 이용했습니다. 바쁜 일정으로 항상 함께하지 못했는데, 매니저님께서 세심하게 케어해주셔서 안심할 수 있었습니다. 정말 큰 도움이 되었습니다.',
      rating: 5,
    },
    {
      name: '이미란',
      position: '고객',
      image: '/re3.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: '지방에 살고 있어서 서울의 큰 병원에 갈 때마다 걱정이 많았는데, 스페셜 서비스로 기차역 픽업부터 병원 동행까지 모든 과정을 도와주셔서 정말 편했습니다.',
      rating: 5,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-primary-700">고객 후기</h2>
          <p className="subtitle">
            건강한학교 병원동행서비스를 이용해주신 고객분들의 생생한 후기를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <div>
                  <Quote className="h-6 w-6 text-primary-300" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;