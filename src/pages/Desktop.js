import { useCallback } from "react";
import Nav from "../components/Nav";
import ButtonOnDark from "../components/ButtonOnDark";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop = () => {
  const onContactTextClick = useCallback(() => {
    // Please sync "/contact" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "홈" to the project
  }, []);

  const onButtonOnDarkClick = useCallback(() => {
    // Please sync "/curiiculum-mid" to the project
  }, []);

  return (
    <div className="desktop">
      <Nav
        property1="Desktop"
        navBorder="unset"
        mainLogo="/main-logo@2x.png"
        onContactTextClick={onContactTextClick}
        onHomeTextClick={onHomeTextClick}
        homeColor="#f9f9f9"
      />
      <section className="main">
        <div className="content">
          <div className="content2">
            <div className="text">
              <h1 className="curriculum">Curriculum</h1>
            </div>
          </div>
        </div>
        <ButtonOnDark
          property1="Default"
          connectWithOurExperts="초등부 커리큘럼"
        />
        <ButtonOnDark
          property1="Default"
          onButtonOnDarkClick={onButtonOnDarkClick}
          buttonOnDarkLeft="682px"
          buttonOnDarkTop="195px"
          connectWithOurExperts="중등부 커리큘럼"
          connectWithOurTextDecoration="unset"
        />
      </section>
      <main className="main2">
        <section className="gray-box-one" />
        <img className="st-img-1-icon" alt="" src="/1st-img-1@2x.png" />
        <img className="st-img-2-icon" alt="" src="/1st-img-2@2x.png" />
        <img className="st-img-3-1-icon" alt="" src="/1st-img-3-1@2x.png" />
      </main>
      <div className="main3">
        <div className="content3" />
        <div className="gray-box-three" />
      </div>
      <Footer property1="Desktop" />
    </div>
  );
};

export default Desktop;
