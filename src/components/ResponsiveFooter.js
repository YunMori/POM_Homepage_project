'use client';

import { memo } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import "./ResponsiveFooter.css";

const ResponsiveFooter = memo(({ className = "" }) => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <footer className={`responsive-footer ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-main">
            <h2 className="footer-title">수학의힘 세종 소담점</h2>
            <button
              className="footer-contact-btn"
              onClick={handleContactClick}
            >
              상담 예약하기
            </button>
          </div>

          {/* Business Info */}
          <div className="footer-section">
            <h3 className="footer-heading">사업자등록번호</h3>
            <p className="footer-text">582-99-01596</p>
          </div>

          {/* Address */}
          <div className="footer-section">
            <h3 className="footer-heading">주소</h3>
            <p className="footer-text">
              세종시 한누리대로 2018 사이언스 타운 4층
            </p>
            <a
              className="footer-map-link"
              href="https://map.naver.com/p/search/수학의힘/place/1938388947"
              target="_blank"
              rel="noopener noreferrer"
            >
              지도 보기 →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>COPYRIGHT© 2025 MORI YUN | ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
});

ResponsiveFooter.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveFooter;