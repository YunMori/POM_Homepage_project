import { memo } from "react";
import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = memo(({ className = "" }) => {
  return (
    <div className={`section-4 ${className}`}>
      <div className="section-4-div">
        <img className="section-4-icon" alt="" src="/@2x.png" />
        <img className="icon3" alt="" src="/@2x.png" />
        <img className="icon4" alt="" src="/@2x.png" />
        <img className="icon5" alt="" src="/@2x.png" />
      </div>
      <div className="div15">
        <p className="section-4-p">고민의 끝,</p>
        <p className="section-4-p">
          <span>{`결국은 `}</span>
          <span className="section-4-span">수학의힘!</span>
        </p>
      </div>
      <h2 className="section-4-h2">
        <span>{`해법 수학 학력평가 세종시 `}</span>
        <span className="section-4-span">1등!!</span>
      </h2>
      <h2 className="h28">결과로 증명합니다.</h2>
    </div>
  );
});

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
