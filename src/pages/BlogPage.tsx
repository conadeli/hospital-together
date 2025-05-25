import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  useEffect(() => {
    document.title = '블로그 - 건강한학교 병원동행서비스';
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: '투석 환자가 알아두면 좋은 병원 방문 팁',
      excerpt: '투석 환자가 병원을 방문할 때 알아두면 좋은 정보들과 준비물, 주의사항에 대해 알려드립니다.',
      date: '2025-03-15',
      image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '김은지 매니저',
      readTime: '5분',
      category: '건강정보',
    },
    {
      id: 2,
      title: '병원 동행 서비스가 필요한 순간들',
      excerpt: '병원 방문 시 동행 서비스가 특히 도움이 될 수 있는 상황과 그 이유에 대해 알아봅니다.',
      date: '2025-03-10',
      image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '박준호 매니저',
      readTime: '4분',
      category: '서비스 안내',
    },
    {
      id: 3,
      title: '서울 주요 대형병원 이용 가이드',
      excerpt: '서울 지역 주요 대형병원의 특징과 이용 방법, 찾아가는 길에 대한 상세 정보를 안내합니다.',
      date: '2025-03-05',
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '이지윤 매니저',
      readTime: '7분',
      category: '병원 정보',
    },
    {
      id: 4,
      title: '고령 환자의 병원 방문 시 주의사항',
      excerpt: '고령 환자가 병원을 방문할 때 가족과 보호자가 알아두면 좋은 정보와 주의사항을 소개합니다.',
      date: '2025-02-28',
      image: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '김은지 매니저',
      readTime: '6분',
      category: '건강정보',
    },
    {
      id: 5,
      title: '병원 진료 예약 및 접수 효율적으로 하는 방법',
      excerpt: '병원 방문 시 대기 시간을 줄이고 효율적으로 진료를 받을 수 있는 예약 및 접수 방법을 안내합니다.',
      date: '2025-02-20',
      image: 'https://images.pexels.com/photos/7088499/pexels-photo-7088499.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '박준호 매니저',
      readTime: '5분',
      category: '팁과 노하우',
    },
    {
      id: 6,
      title: '병원 검사 전 준비사항 가이드',
      excerpt: '주요 병원 검사별 사전 준비사항과 주의사항에 대한 상세 가이드를 제공합니다.',
      date: '2025-02-15',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: '이지윤 매니저',
      readTime: '8분',
      category: '건강정보',
    },
  ];

  const categories = [
    { name: '전체', count: 12 },
    { name: '건강정보', count: 5 },
    { name: '서비스 안내', count: 3 },
    { name: '병원 정보', count: 2 },
    { name: '팁과 노하우', count: 2 },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">블로그</h1>
            <p className="text-xl text-primary-100">
              건강한학교 병원동행서비스의 유용한 정보들을 확인하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 mb-8 sticky top-24">
                <h2 className="text-xl font-bold mb-4 text-primary-700">카테고리</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold mb-4 mt-8 text-primary-700">추천 링크</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      <span>네이버 지식인</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      <span>건강정보 포털</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="card overflow-hidden hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-primary-50 text-primary-600 text-xs px-2.5 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary-600 transition-colors duration-200">
                        <a href="#">{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>읽는 시간 {post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    이전
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-primary-500 bg-primary-500 text-white rounded-md"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    다음
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;