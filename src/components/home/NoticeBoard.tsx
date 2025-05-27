import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

const NoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      id: 1,
      title: '2025년 첫 이용자 할인이벤트 안내',
      date: '2025-05-25',
      content: '처음으로 서비스를 이요하신 고객님들께는 30% 할인률을 적용해드립니다.',
    },
    {
      id: 2,
      title: '서비스 이용 방법',
      date: '2025-01-10',
      content: '통화가 가능하면 바로 전화주시고 , 통화중으로 연결이 어려우면 상담신청서식을 남겨주면 바로 연락드리겠습니다',
    },
    {
      id: 3,
      title: '사전 예약 서비스 진행중입니다.',
      date: '2025-01-05',
      content: '정기적으로 이용하시는 고객님은 추가 할인이 적용됩니다',
    },
  ];

  return (
    <section className="section bg-white" id="notice">
      <div className="container-custom">
        <h2 className="section-title">공지사항</h2>
        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden">
            <div className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <button
                    onClick={() => setSelectedNotice(selectedNotice?.id === notice.id ? null : notice)}
                    className="w-full px-6 py-4 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{notice.title}</h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {notice.date}
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          selectedNotice?.id === notice.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    {selectedNotice?.id === notice.id && (
                      <div className="mt-4 text-gray-600 bg-gray-50 p-4 rounded-lg">
                        {notice.content}
                      </div>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
