import { memo, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./Nav.css";

const Nav = memo(
  ({
    className = "",
    property1 = "Desktop",
    navBorder,
    mainLogo,
    onCurriculumTextClick,
    onContactTextClick,
    onHomeTextClick,
    homeColor,
  }) => {
    const navStyle = useMemo(() => {
      return {
        border: navBorder,
      };
    }, [navBorder]);

    const homeStyle = useMemo(() => {
      return {
        color: homeColor,
      };
    }, [homeColor]);

    const onCurriculumTextClick1 = useCallback(() => {
      // Please sync "/curiiculum_el" to the project
    }, []);

    const onHomeTextClick1 = useCallback(() => {
      // Please sync "홈" to the project
    }, []);

    return (
      <section
        className={`nav ${className}`}
        data-property1={property1}
        style={navStyle}
      >
        <div className="nav-labels">
          <img
            className="main-logo-icon"
            loading="lazy"
            alt=""
            src={mainLogo}
          />
          <div className="nav-curriculum" onClick={onCurriculumTextClick}>
            Curriculum
          </div>
          <div className="contact" onClick={onContactTextClick}>
            Contact
          </div>
          <a
            className="blog"
            href="https://blog.naver.com/powerofmath_sodam"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/powerofmath_sodam/"
            target="_blank"
          >
            Instagram
          </a>
          <div className="home" onClick={onHomeTextClick} style={homeStyle}>
            Home
          </div>
        </div>
      </section>
    );
  }
);

Nav.propTypes = {
  className: PropTypes.string,
  mainLogo: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  navBorder: PropTypes.string,
  homeColor: PropTypes.string,

  /** Action props */
  onCurriculumTextClick: PropTypes.func,
  onContactTextClick: PropTypes.func,
  onHomeTextClick: PropTypes.func,
};

export default Nav;
