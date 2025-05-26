import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    gender: '',
    disease: '',
    status: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwKFrXnw-vbiKByD9pv5hfoks6lixZJkZRzPiZ4mwBVBOklO1fzzwHGnBn7_XOpQU28/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      alert('상담 신청이 완료되었습니다!');
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        gender: '',
        disease: '',
        status: '',
        note: '',
      });
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

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
        {/* ... 연락 카드 섹션 동일 ... */}

        {/* 상담 요청 폼 */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">상담 요청하기</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" placeholder="성함" value={formData.name} onChange={handleChange} required />
                <input name="phone" placeholder="연락처" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
              </div>

              <div className="flex space-x-4">
                <label>
                  <input type="radio" name="gender" value="남" checked={formData.gender === '남'} onChange={handleChange} required />
                  남
                </label>
                <label>
                  <input type="radio" name="gender" value="여" checked={formData.gender === '여'} onChange={handleChange} required />
                  여
                </label>
              </div>

              <input name="disease" placeholder="환자 질병" value={formData.disease} onChange={handleChange} required />

              <select name="status" value={formData.status} onChange={handleChange} required>
                <option value="">선택해주세요</option>
                <option value="심각">심각</option>
                <option value="보통">보통</option>
                <option value="경증">경증</option>
                <option value="기타">기타</option>
              </select>

              <textarea name="note" placeholder="기타 문의사항" value={formData.note} onChange={handleChange} rows={4}></textarea>

              <button type="submit" className="btn btn-primary w-full">상담 신청하기</button>
            </form>
          </div>
        </div>

        {/* 전화 팝업은 기존 그대로 유지 */}
        {showPhonePopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">전화 상담 안내</h3>
              <p className="text-gray-600 mb-6">
                전화 상담 가능 시간은 오전 9시 ~ 오후 6시입니다.
              </p>
              <div className="flex flex-col space-y-3">
                <a href="tel:010-8678-0842" className="btn btn-primary text-center" onClick={() => setShowPhonePopup(false)}>
                  전화하기
                </a>
                <button onClick={() => setShowPhonePopup(false)} className="btn btn-outline text-center">
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
