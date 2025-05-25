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
      title: '2025년 설 연휴 병원동행서비스 운영 안내',
      date: '2025-01-15',
      content: '설 연휴 기간 동안 병원동행서비스는 정상 운영됩니다. 예약은 최소 3일 전에 부탁드립니다.',
    },
    {
      id: 2,
      title: '서비스 이용 요금 안내',
      date: '2025-01-10',
      content: '2025년 1월부터 적용되는 새로운 서비스 요금제를 안내해드립니다.',
    },
    {
      id: 3,
      title: '코로나19 예방 수칙 안내',
      date: '2025-01-05',
      content: '안전한 서비스 이용을 위한 코로나19 예방 수칙을 안내해드립니다.',
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