import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./Main.css";

const Main = memo(({ className = "" }) => {
  const onImagesRemovebgPreviewClick = useCallback(() => {
    window.open("https://blog.naver.com/powerofmath_sodam");
  }, []);

  const onPngwingcom1ImageClick = useCallback(() => {
    window.open("https://www.instagram.com/powerofmath_sodam/");
  }, []);

  return (
    <section className={`main8 ${className}`}>
      <div className="connect-section">
        <div className="main8-div">
          <p className="main8-p">
            <span className="main8-span">수학의힘</span>
            <span>{`에 `}</span>
          </p>
          <p className="main8-p">더 자세한 소식을 알고 싶으시다면 ?</p>
        </div>
        <div className="card-2">
          <div className="div16">공식 인스타그램</div>
        </div>
        <div className="card-1">
          <div className="div17">전화번호</div>
          <div className="div18">044-715-5253</div>
        </div>
        <div className="card-3">
          <img
            className="images-removebg-preview-1-icon"
            alt=""
            src="/images-removebg-preview-1@2x.png"
            onClick={onImagesRemovebgPreviewClick}
          />
          <div className="div19">공식 블로그</div>
        </div>
        <img
          className="pngwingcom-1-icon"
          alt=""
          src="/pngwing-com-1@2x.png"
          onClick={onPngwingcom1ImageClick}
        />
        <div className="connect-section-child" />
        <div className="connect-section-item" />
      </div>
    </section>
  );
});

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
