import { memo } from "react";
import PropTypes from "prop-types";
import "./TestimonialSection.css";

const TestimonialSection = memo(({ className = "" }) => {
  return (
    <section className={`testimonial-section3 ${className}`}>
      <h2 className="testimonial-section3-h2">혹시, 이런 고민 중이신가요?</h2>
      <div className="testimonial-section3-div">
        <div className="inner" />
        <h2 className="h27">우리 아이가 수학 공부를 스스로 잘할 수 있을까?</h2>
        <img
          className="polygon-icon"
          loading="lazy"
          alt=""
          src="/Polygon-1.svg"
        />
      </div>
      <div className="div13">
        <div className="rectangle-div" />
        <div className="div14">수학 학원은 언제부터 다니는 게 좋을까?</div>
      </div>
    </section>
  );
});

TestimonialSection.propTypes = {
  className: PropTypes.string,
};

export default TestimonialSection;
