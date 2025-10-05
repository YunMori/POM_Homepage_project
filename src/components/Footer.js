import { memo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = memo(
  ({ className = "", property1 = "Desktop", onContactTextClick }) => {
    return (
      <footer className={`footer ${className}`} data-property1={property1}>
        <h1 className="footer-h1">수학의힘 세종 소담점</h1>
        <div className="footer-child" onClick={onContactTextClick} />
        <h2 className="footer-h2">사업자등록번호</h2>
        <h2 className="h29">주소</h2>
        <div className="footer-div">블라블라 알아서 적어</div>
        <div className="div20">세종시 한누리대로 2018 사이언스 타운 4층</div>
        <div className="copyright-2025-mori">
          COPYRIGHT© 2025 MORI YUN | ALL RIGHTS RESERVED
        </div>
        <a
          className="a"
          href={`https://map.naver.com/p/search/수학의힘/place/1938388947?c=15.00,0,0,0,dh&placePath=/ticket?fromPanelNum=2&locale=ko&searchText=수학의힘&svcName=map_pcv5&timestamp=202510050435&locale=ko&searchText=수학의힘&svcName=map_pcv5&timestamp=202510050435&from=map&fromPanelNum=2`}
          target="_blank"
        >
          상담 예약하기
        </a>
      </footer>
    );
  }
);

Footer.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Action props */
  onContactTextClick: PropTypes.func,
};

export default Footer;
