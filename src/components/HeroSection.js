import { memo } from "react";
import ButtonOnDark from "./ButtonOnDark";
import PropTypes from "prop-types";
import "./HeroSection.css";

const HeroSection = memo(({ className = "" }) => {
  return (
    <section className={`hero-section ${className}`}>
      <div className="hero-section-content">
        <section className="block">
          <div className="hero-section-text">
            <div className="hero-section-div">
              <p className="hero-section-p">수학은 습관!</p>
              <p className="hero-section-p">성적은 데이터!</p>
            </div>
            <div className="div7">
              진단→개별맞춤→오답코칭 루프로 매주 성장합니다. 학부모 리포트로
              변화가 보입니다.
            </div>
          </div>
          <ButtonOnDark
            property1="Default"
            buttonOnDarkLeft="280px"
            buttonOnDarkTop="260.8px"
            connectWithOurExperts="View Curriculum"
            connectWithOurTextDecoration="underline"
          />
        </section>
        <img
          className="hero-section-image-icon"
          loading="lazy"
          alt=""
          src="/Image@2x.png"
        />
      </div>
    </section>
  );
});

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
