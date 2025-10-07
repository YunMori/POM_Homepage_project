import { memo } from "react";
import ResponsiveNav from "../components/ResponsiveNav";
import ResponsiveHero from "../components/ResponsiveHero";
import ResponsiveFooter from "../components/ResponsiveFooter";
import "./ResponsiveHome.css";

const ResponsiveHome = memo(() => {
  return (
    <div className="responsive-home">
      <ResponsiveNav currentPage="home" />
      
      <main className="home-main">
        {/* Hero Section */}
        <ResponsiveHero />

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="features-header">
              <p className="features-subtitle">상위권 수학 교육에 최적화된</p>
              <h2 className="features-title">맞춤식 수학 학습!</h2>
              <p className="features-description">
                창의융합형 미래 인재를 키우는 세종 최고의 수학학원!
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3 className="feature-title">미래형창의융합<br/>인재교육</h3>
              </div>
              <div className="feature-card feature-card-highlight">
                <div className="feature-icon">📈</div>
                <h3 className="feature-title">상향평준화<br/>교육</h3>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">자기주도학습과<br/>실천교육실현</h3>
              </div>
            </div>

            <div className="features-quote">

              <div className="quote-subtitle">
                교육의 목적은 배움에 있지만, 배움의 완성은 <span className="highlight" >가르침</span>에 있습니다.<br></br>
                수학의힘이 자향하는 수학교육은 강의실에서 배우고 집에서 복습하며 강의실에 들어와
              </div>
              
              <h3 className="quote-text">
                "다른 학생에게 설명할 수 있게 하는 <span className="highlight">실천 교육</span>입니다."
              </h3>
            </div>
          </div>
        </section>

        {/* Concerns Section */}
        <section className="concerns-section">
          <div className="container">
            <h2 className="concerns-title">혹시, 이런 고민 중이신가요?</h2>
            <div className="concerns-grid">
              <div className="concern-card">
                <p>우리 아이가 수학 공부를 스스로 잘할 수 있을까?</p>
              </div>
              <div className="concern-card">
                <p>수학 학원은 언제부터 다니는 게 좋을까?</p>
              </div>
              <div className="concern-card">
                <p>수학 성적이 금방 오를 수 있을까?</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <div className="results-content">
              <h2 className="results-title">
                <span>고민의 끝,</span>
                <div>결국은 <span className="highlight">수학의힘!</span></div>
              </h2>

              <div className="crapes-img">
                <img
                  className="crapes-image"
                  src="/crapes.png"
                  alt="상장 이미지"
                  loading="eager"
                />
              </div>
              <div className="results-badge">
                <h3>해법 수학 학력평가 세종시 <span className="highlight">1등!!</span></h3>
                <p>결과로 증명합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="why-us-section">
          <div className="container">
            <h2 className="section-title">
              왜 <span className="highlight">수학의힘</span> 인가요?
            </h2>

            <div className="why-us-cards">
              {/* Card 1 */}
              <div className="why-card">
                <div className="why-card-image-left">
                  <img src="/Card-Spacer@2x.png" alt="풀이노트 관리" />
                </div>
                <div className="why-card-content-right">
                  <h3 className="why-card-title">
                    풀이노트 오답노트<br/>바인더 관리
                  </h3>
                  <p className="why-card-text">
                    학생의 수학적 습관을 바꾸고 자신감 상승 서술 능력과 철저한 관리를 위해 
                    원장이 직접 정기적으로 검사 실시
                  </p>
                  <p className="why-card-note">
                    @ 1년 2회 (3월/ 9월) 오답노트 / 풀이노트 Contest 실시
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="why-card why-card-reverse">
                <div className="why-card-image-left">
                  <img src="/Image2@2x.png" alt="책임 수업제도" />
                </div>
                <div className="why-card-content-right">
                  <h3 className="why-card-title">철저한 책임 수업제도</h3>
                  <p className="why-card-text">
                    전담 교사제<br/>
                    담임에게 반별 입학 인원 제한 권한 부여, 초등 10명, 중등 12명 정원제<br/>
                    저학년이나 학업 성취도가 저조한 반의 경우 6명 선으로 
                    담임 재량으로 정원 제한 가능
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="why-card">
                <div className="why-card-image-left">
                  <img src="/tea.png" alt="Detention" />
                </div>
                <div className="why-card-content-right">
                  <h3 className="why-card-title">Detention</h3>
                  <p className="why-card-text">
                    Daily Test 점수 평균 이하 학생, 과제물 미제출 학생,<br/>
                    수업태도 불량 학생, 지각생, 결석생을 대상으로 엄격하게 실시
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="data-section">
          <div className="container">
            <h2 className="data-title">
              <span>대충하지 않습니다.</span>
              <div>철저한 <span className="highlight">데이터</span> 기반 학습</div>
            </h2>
            <div className="data-image">
              <img src="/Aiimge.png" alt="모바일 교육환경 이미지" />
            </div>
            <div className="data-feature">
              <p className="data-subtitle">A.I기반 취약점 분석으로 학생별 취약점 관리</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                <spen className="highlight">수학고민</spen> <br/>
                저희와 함께 해결해 보세요!
              </h2>
              <p className="cta-description">
                혼자서 해결하기 어려웠던 수학문제, 이제 저희와 함께 차근차근 풀어가요.<br/>
                아이의 눈높이에 맞춘 상담으로 함께 방향을 찾아 드립니다.
              </p>
              <button className="cta-button">상담 신청하기</button>
            </div>
          </div>
        </section>
      </main>

      <ResponsiveFooter />
    </div>
  );
});

export default ResponsiveHome;