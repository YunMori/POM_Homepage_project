import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ResponsiveNav.css";

const ResponsiveNav = memo(({ currentPage = "home" }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);

  };

  return (
    <nav className="responsive-nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo" onClick={() => handleNavigation("/")}>
            <img src="/main-logo@2x.png" alt="수학의힘 로고" />
          </div>

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
            <button
              onClick={() => handleNavigation("/")}
              className={currentPage === "home" ? "active" : ""}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/curriculum/elementary")}
              className={currentPage === "curriculum" ? "active" : ""}
            >
              Curriculum
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className={currentPage === "contact" ? "active" : ""}
            >
              Contact
            </button>
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
          <button
            onClick={() => handleNavigation("/")}
            className={currentPage === "home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/curriculum/elementary")}
            className={currentPage === "curriculum" ? "active" : ""}
          >
            Curriculum
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className={currentPage === "contact" ? "active" : ""}
          >
            Contact
          </button>
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
  currentPage: PropTypes.string,
};

export default ResponsiveNav;