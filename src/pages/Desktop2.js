import { useCallback } from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import TestimonialSection from "../components/TestimonialSection";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import LargeButton from "../components/LargeButton";
import Footer from "../components/Footer";
import "./Desktop2.css";

const Desktop2 = () => {
  const onCurriculumTextClick = useCallback(() => {
    // Please sync "/curiiculum_el" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    // Please sync "/contact" to the project
  }, []);

  return (
    <div className="desktop3">
      <Nav
        property1="Desktop"
        navBorder="1px solid #558bcf"
        mainLogo="/main-logo@2x.png"
        onCurriculumTextClick={onCurriculumTextClick}
        onContactTextClick={onContactTextClick}
        homeColor="#fff"
      />
      <main className="main7">
        <HeroSection />
        <section className="services-section">
          <div className="services-section-child" />
          <IntroSection />
          <TestimonialSection />
          <div className="testimonial-section">
            <img className="icon" loading="lazy" alt="" src="/2@2x.png" />
            <h2 className="h2">
              우리 아이가 수학 공부를 스스로 잘할 수 있을까?
            </h2>
          </div>
          <section className="testimonial-section2">
            <div className="div">
              <div className="child" />
              <div className="wrapper">
                <h2 className="h22">수학 성적이 금방 오를 수 있을까?</h2>
              </div>
              <img className="item" alt="" src="/Polygon-1.svg" />
            </div>
          </section>
          <Section1 />
          <div className="section-5">
            <h2 className="h23">
              <span>{`왜 `}</span>
              <span className="span">수학의힘</span>
              <span> 인가요?</span>
            </h2>
          </div>
          <Section cardSpacer="/Card-Spacer@2x.png" />
          <div className="section-2">
            <div className="card">
              <div className="content7">
                <div className="text3">
                  <h2 className="h24">철저한 책임 수업제도</h2>
                  <div className="div2">
                    <p className="p">전담 교사제</p>
                    <p className="p2">{`-담임에게 반별 입학 인원 제한 권한 부여, 초등 10명, 중등  12명 정원제 `}</p>
                    <p className="p">{` `}</p>
                    <p className="p">
                      저학년이나 학업 성취도가 저조한 반의 경우 6명 선으로 담임
                      재량으로 정원 제한 가능
                    </p>
                  </div>
                </div>
              </div>
              <img className="image-icon" alt="" src="/Image2@2x.png" />
            </div>
          </div>
          <Section
            section1Height="unset"
            section1JustifyContent="unset"
            cardWidth="1020px"
            cardPadding="80px"
            cardSpacer="/1-100@2x.png"
            cardSpacerIconWidth="280px"
            divMargin="0"
            divFontWeight="400"
          />
          <div className="section-6">
            <img className="icon2" loading="lazy" alt="" src="/102-1@2x.png" />
            <div className="div3">
              <p className="p">대충하지 않습니다.</p>
              <p className="p">
                <span>{`철저한 `}</span>
                <span className="span">{`데이터 `}</span>
                <span className="span3">기반 학습</span>
              </p>
            </div>
            <h2 className="ai">A.I기반 취약점 분석으로 학생별 취약점 관리</h2>
            <div className="div4">
              <p className="p">대충하지 않습니다.</p>
              <p className="p">
                <span>{`철저한 `}</span>
                <span className="span">{`데이터 `}</span>
                <span className="span3">기반 학습</span>
              </p>
            </div>
          </div>
          <div className="section-7">
            <img
              className="unnamed-2-photoroom-1-icon"
              loading="lazy"
              alt=""
              src="/unnamed-2-Photoroom-1@2x.png"
            />
            <img
              className="unnamed-photoroom-1-icon"
              loading="lazy"
              alt=""
              src="/unnamed-Photoroom-1@2x.png"
            />
            <div className="div5">
              <p className="p">집에서도 빈틈 없게</p>
              <p className="p">
                <span className="span">취약점별</span>
                <span> 강의 제공</span>
              </p>
            </div>
          </div>
        </section>
        <section className="experts-section">
          <div className="content8">
            <h2 className="h25">
              <span>수학고민</span>
              <span className="span3"> 저희와 함께 해결해 보세요 !</span>
            </h2>
            <div className="div6">
              <p className="p">
                혼자서 해결하기 어려웠던 수학문제, 이제 저희와 함께 차근차근
                풀어가요.
              </p>
              <p className="p">
                아이의 눈높이에 맞춘 상담으로 함께 방향을 찾아 드립니다.
              </p>
            </div>
            <LargeButton property1="Default" />
          </div>
        </section>
        <section className="main-item" />
      </main>
      <Footer property1="Desktop" onContactTextClick={onContactTextClick} />
    </div>
  );
};

export default Desktop2;
