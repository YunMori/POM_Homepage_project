import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = memo(
  ({
    className = "",
    section1Height,
    section1JustifyContent,
    cardWidth,
    cardPadding,
    cardSpacer,
    cardSpacerIconWidth,
    divMargin,
    divFontWeight,
  }) => {
    const section1Style = useMemo(() => {
      return {
        height: section1Height,
        justifyContent: section1JustifyContent,
      };
    }, [section1Height, section1JustifyContent]);

    const cardStyle = useMemo(() => {
      return {
        width: cardWidth,
        padding: cardPadding,
      };
    }, [cardWidth, cardPadding]);

    const cardSpacerIconStyle = useMemo(() => {
      return {
        width: cardSpacerIconWidth,
      };
    }, [cardSpacerIconWidth]);

    const divStyle = useMemo(() => {
      return {
        margin: divMargin,
        fontWeight: divFontWeight,
      };
    }, [divMargin, divFontWeight]);

    return (
      <div className={`section-1 ${className}`} style={section1Style}>
        <div className="section-1-card" style={cardStyle}>
          <img
            className="card-spacer-icon"
            loading="lazy"
            alt=""
            src={cardSpacer}
            style={cardSpacerIconStyle}
          />
          <div className="section-1-content">
            <div className="section-1-text">
              <div className="section-1-div" style={divStyle}>
                <p className="section-1-p">풀이노트 오답노트</p>
                <p className="section-1-p">바인더 관리</p>
              </div>
              <div className="contest">
                <p className="p23">
                  학생의 수학적 습관을 바꾸고 자신감 상슬 서술 능력과 철저한
                  관리를 위해 원장이 직접 정기적으로 검사 실시
                </p>
                <p className="section-1-p">&nbsp;</p>
                <p className="section-1-p">
                  @ 1년 2회 (3월/ 9월) 오답노트 / 풀이노트 Contest 실시
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Section.propTypes = {
  className: PropTypes.string,
  cardSpacer: PropTypes.string,

  /** Style props */
  section1Height: PropTypes.string,
  section1JustifyContent: PropTypes.string,
  cardWidth: PropTypes.string,
  cardPadding: PropTypes.string,
  cardSpacerIconWidth: PropTypes.string,
  divMargin: PropTypes.string,
  divFontWeight: PropTypes.string,
};

export default Section;
