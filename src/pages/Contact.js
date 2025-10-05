import { memo } from "react";
import ResponsiveNav from "../components/ResponsiveNav";
import ResponsiveFooter from "../components/ResponsiveFooter";
import "./Contact.css";

const Contact = memo(() => {
  const handleBlogClick = () => {
    window.open("https://blog.naver.com/powerofmath_sodam", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/powerofmath_sodam/", "_blank");
  };

  return (
    <div className="contact-page">
      <ResponsiveNav currentPage="contact" />

      <main className="contact-main">
        {/* Header Section */}
        <section className="contact-header-section">
          <div className="container">
            <h1 className="contact-page-title">Contact</h1>
            <p className="contact-page-subtitle">
              수학의힘에 더 자세한 소식을 알고 싶으시다면?
            </p>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="contact-cards-section">
          <div className="container">
            <div className="contact-cards-grid">
              {/* Phone Card */}
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <h3 className="contact-card-title">전화번호</h3>
                <a href="tel:044-715-5253" className="contact-card-value">
                  044-715-5253
                </a>
              </div>

              {/* Blog Card */}
              <div className="contact-card contact-card-clickable" onClick={handleBlogClick}>
                <div className="contact-card-icon">
                  <img src="/images-removebg-preview-1@2x.png" alt="Blog" />
                </div>
                <h3 className="contact-card-title">공식 블로그</h3>
                <p className="contact-card-link">방문하기 →</p>
              </div>

              {/* Instagram Card */}
              <div className="contact-card contact-card-clickable" onClick={handleInstagramClick}>
                <div className="contact-card-icon">
                  <img src="/pngwing-com-1@2x.png" alt="Instagram" />
                </div>
                <h3 className="contact-card-title">공식 인스타그램</h3>
                <p className="contact-card-link">팔로우하기 →</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <div className="container">
            <h2 className="location-title">오시는 길</h2>
            <div className="location-content">
              <div className="location-info">
                <div className="location-info-item">
                  <h3>주소</h3>
                  <p>세종시 한누리대로 2018 사이언스 타운 4층</p>
                </div>
                <a
                  href="https://map.naver.com/p/search/수학의힘/place/1938388947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-map-btn"
                >
                  네이버 지도에서 보기 →
                </a>
              </div>
              <div className="location-map">
                <div className="map-placeholder">
                  <p>지도</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <div className="container">
            <div className="contact-cta-content">
              <h2 className="contact-cta-title">상담 예약하기</h2>
              <p className="contact-cta-description">
                아이의 수학 실력 향상을 위한 첫 걸음,<br/>
                지금 바로 상담을 예약해보세요.
              </p>
              <a
                href="tel:044-715-5253"
                className="contact-cta-button"
              >
                전화로 상담 예약
              </a>
            </div>
          </div>
        </section>
      </main>

      <ResponsiveFooter />
    </div>
  );
});

export default Contact;