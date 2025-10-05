import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./ButtonOnDark.css";

const ButtonOnDark = memo(
  ({
    className = "",
    property1 = "Default",
    onButtonOnDarkClick,
    buttonOnDarkLeft,
    buttonOnDarkTop,
    connectWithOurExperts,
    connectWithOurTextDecoration,
  }) => {
    const buttonOnDarkStyle = useMemo(() => {
      return {
        left: buttonOnDarkLeft,
        top: buttonOnDarkTop,
      };
    }, [buttonOnDarkLeft, buttonOnDarkTop]);

    const connectWithOurStyle = useMemo(() => {
      return {
        textDecoration: connectWithOurTextDecoration,
      };
    }, [connectWithOurTextDecoration]);

    return (
      <div
        className={`button-on-dark ${className}`}
        data-property1={property1}
        onClick={onButtonOnDarkClick}
        style={buttonOnDarkStyle}
      >
        <div className="connect-with-our" style={connectWithOurStyle}>
          {connectWithOurExperts}
        </div>
      </div>
    );
  }
);

ButtonOnDark.propTypes = {
  className: PropTypes.string,
  connectWithOurExperts: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  buttonOnDarkLeft: PropTypes.string,
  buttonOnDarkTop: PropTypes.string,
  connectWithOurTextDecoration: PropTypes.string,

  /** Action props */
  onButtonOnDarkClick: PropTypes.func,
};

export default ButtonOnDark;
