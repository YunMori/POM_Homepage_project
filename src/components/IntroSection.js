import { memo } from "react";
import PropTypes from "prop-types";
import "./IntroSection.css";

const IntroSection = memo(({ className = "" }) => {
  return (
    <div className={`intro-section ${className}`}>
      <div className="intro-section-content" />
      <div className="main1">
        <div className="email" />
        <div className="main1-child" />
        <div className="main1-item" />
        <div className="intro-section-div">
          <p className="intro-section-p">미래형창의융합</p>
          <p className="intro-section-p">인재교육</p>
        </div>
        <div className="div8">
          <p className="intro-section-p">상향평준화</p>
          <p className="intro-section-p">교육</p>
        </div>
        <div className="div9">
          <p className="intro-section-p">자기주도학습과</p>
          <p className="intro-section-p">실펀교육실현</p>
        </div>
        <h2 className="intro-section-h2">
          <span>{`“다른 학생에게 설명할 수 있게 하는 `}</span>
          <b className="b">실천 교육</b>
          <span>입니다.”</span>
        </h2>
      </div>
      <div className="content9">
        <div className="div10">상위권 수학 교육에 최적화된</div>
        <h1 className="h1">맞춤식 수학 학습!</h1>
        <div className="signup-with-google" />
        <div className="div11">
          창의융합형 미래 인재를 키우는 세종 최고의 수학학원!
        </div>
      </div>
      <h2 className="h26">가르침</h2>
      <div className="div12">
        <p className="p19">
          교육의 목적은 배움에 있지만, 배움의 완성은   에 있습니다.
        </p>
        <p className="intro-section-p">
          수학의힘이 지향하는 수학교육은 강의실에서 배우고 집에서 복습하며
          강이실에 들어와
        </p>
      </div>
    </div>
  );
});

IntroSection.propTypes = {
  className: PropTypes.string,
};

export default IntroSection;
