import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-7 w-7 text-primary-400" />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white">건강한학교</span>
                <span className="text-xs text-gray-400">병원동행서비스</span>
              </div>
            </Link>
            <p className="mb-4 text-sm leading-relaxed">
              건강한학교 병원동행서비스는 환자분들의 병원 방문을 더 편안하고 
              안전하게 도와드립니다. 전문 매니저들이 함께하는 맞춤형 서비스로 
              건강 관리를 돕겠습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors duration-200">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link to="/managers" className="hover:text-primary-400 transition-colors duration-200">
                  매니저 소개
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-primary-400 transition-colors duration-200">
                  예약과정
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors duration-200">
                  블로그
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  고객문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a href="tel:010-8678-0842" className="hover:text-primary-400 transition-colors duration-200">
                  010-8678-0842
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:contact@healthyschool.kr" className="hover:text-primary-400 transition-colors duration-200">
                  contact@healthyschool.kr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span>서울특별시 및 경기도 전 지역</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-primary-400" />
                <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                  카카오톡 문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 건강한학교 병원동행서비스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;