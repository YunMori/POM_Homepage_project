'use client';

import { memo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import "./ResponsiveNav.css";

const ResponsiveNav = memo(() => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px 이상 스크롤되면 isScrolled를 true로 설정
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path ? "active" : "";

  return (
    <nav className={`responsive-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <img src="/main-logo@2x.png" alt="수학의힘 로고" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="메뉴 열기/닫기"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/curriculum/elementary" className={isActive("/curriculum/elementary")}>
              Curriculum
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
            <a
              href="https://blog.naver.com/powerofmath_sodam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              href="https://www.instagram.com/powerofmath_sodam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/curriculum/elementary" className={isActive("/curriculum/elementary")}>
            Curriculum
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
          <a
            href="https://blog.naver.com/powerofmath_sodam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://www.instagram.com/powerofmath_sodam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
});

ResponsiveNav.propTypes = {
  // currentPage prop is no longer needed but keeping it valid to avoid prop warning if passed
  currentPage: PropTypes.string,
};

export default ResponsiveNav;