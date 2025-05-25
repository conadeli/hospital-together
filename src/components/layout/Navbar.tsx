import { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, BookOpen, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
    closeMenu();
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
            <Heart className="h-7 w-7 text-primary-500" />
            <div className="flex flex-col">
              <span className="text-lg font-heading font-bold text-primary-700">건강한학교</span>
              <span className="text-xs text-gray-600">병원동행서비스</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              매니저 소개
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              서비스 소개
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="nav-link"
            >
              서비스 요금
            </button>
            <button
              onClick={() => openExternalLink('https://blog.naver.com/allygo365_official')}
              className="nav-link flex items-center space-x-1"
            >
              <BookOpen className="h-4 w-4" />
              <span>블로그</span>
            </button>
            <button
              onClick={() => openExternalLink('https://kin.naver.com/profile/index.naver?u=rwbGmCY8eW6dSlwisO2Y9cR2%2BOZvLlU%2Fv%2Bf9YA5qKBg%3D')}
              className="nav-link flex items-center space-x-1"
            >
              <MessageSquare className="h-4 w-4" />
              <span>지식인 문의</span>
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:010-8678-0842"
              className="btn btn-primary flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>전화 상담</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 absolute w-full shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="mobile-nav-link"
              >
                매니저 소개
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="mobile-nav-link"
              >
                서비스 소개
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="mobile-nav-link"
              >
                서비스 요금
              </button>
              <button
                onClick={() => openExternalLink('https://blog.naver.com/allygo365_official')}
                className="mobile-nav-link flex items-center justify-center space-x-1"
              >
                <BookOpen className="h-4 w-4" />
                <span>블로그</span>
              </button>
              <button
                onClick={() => openExternalLink('https://kin.naver.com/profile/index.naver?u=rwbGmCY8eW6dSlwisO2Y9cR2%2BOZvLlU%2Fv%2Bf9YA5qKBg%3D')}
                className="mobile-nav-link flex items-center justify-center space-x-1"
              >
                <MessageSquare className="h-4 w-4" />
                <span>지식인 문의</span>
              </button>
              
              <a
                href="tel:010-8678-0842"
                className="btn btn-primary flex items-center justify-center space-x-2"
                onClick={closeMenu}
              >
                <Phone className="h-4 w-4" />
                <span>전화 상담</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;