import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Google Apps Script Web App URL (배포된 웹앱 URL로 교체)
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzN8rCAHbMb-tWLuP7QK0-Yk0-Z_fH_asnMJ_p0eni4r19Z4-6RnEbQS5XW1vrVUSsQ/exec';

const ContactSection: React.FC = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.status === 'OK') {
        alert('상담 요청이 성공적으로 접수되었습니다! 빠른 시일 내에 연락드리겠습니다.');
        form.reset();
      } else {
        alert('상담 요청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인한 후 다시 시도해주세요.');
    }
  };

  return (
    <section id="contact" className="bg-white p-8 rounded-lg shadow-md">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">상담 요청하기</h2>
        {/* onSubmit으로 JS fetch 처리하여 페이지 리로드 없이 알림창 표시 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 그리드 레이아웃: 이름, 연락처, 날짜, 시간 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1">상담 문의자 성함 *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="상담 문의자 성함"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">연락처 *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-0000-0000"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">상담 요청 일자 *</label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1">상담 요청 시간 *</label>
              <input
                id="time"
                name="time"
                type="time"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          {/* 성별 선택 */}
          <div>
            <span className="block mb-1">환자 성별 *</span>
            <label className="inline-flex items-center mr-4">
              <input type="radio" name="gender" value="남" className="mr-1" required /> 남
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="여" className="mr-1" /> 여
            </label>
          </div>

          {/* 환자 질병 */}
          <div>
            <label htmlFor="disease" className="block mb-1">환자 질병 *</label>
            <input
              id="disease"
              name="disease"
              type="text"
              placeholder="환자 질병"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* 환자 상태 */}
          <div>
            <label htmlFor="status" className="block mb-1">환자 상태 *</label>
            <select
              id="status"
              name="status"
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">선택해주세요</option>
              <option value="경증">경증</option>
              <option value="중등증">중등증</option>
              <option value="중증">중증</option>
              <option value="위독">위독</option>
            </select>
          </div>

          {/* 기타 문의사항 */}
          <div>
            <label htmlFor="comment" className="block mb-1">기타 문의사항</label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              placeholder="기타 문의사항"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-3"
          >
            상담 신청하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
