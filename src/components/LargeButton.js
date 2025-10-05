import { memo } from "react";
import PropTypes from "prop-types";
import "./LargeButton.css";

const LargeButton = memo(({ className = "", property1 = "Default" }) => {
  return (
    <div className={`large-button ${className}`} data-property1={property1}>
      <div className="large-button-connect-with-our">상담 신청하기</div>
    </div>
  );
});

LargeButton.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default LargeButton;
