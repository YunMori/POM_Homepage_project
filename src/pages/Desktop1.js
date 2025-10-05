import { useCallback } from "react";
import Nav from "../components/Nav";
import ButtonOnDark from "../components/ButtonOnDark";
import Footer from "../components/Footer";
import "./Desktop1.css";

const Desktop1 = () => {
  const onCurriculumTextClick = useCallback(() => {
    // Please sync "/curiiculum_el" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    // Please sync "/contact" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "홈" to the project
  }, []);

  return (
    <div className="desktop2">
      <Nav
        property1="Desktop"
        navBorder="unset"
        mainLogo="/main-logo@2x.png"
        onCurriculumTextClick={onCurriculumTextClick}
        onContactTextClick={onContactTextClick}
        onHomeTextClick={onHomeTextClick}
        homeColor="#f9f9f9"
      />
      <section className="main4">
        <div className="content4">
          <div className="content5">
            <div className="text2">
              <h1 className="curriculum2">Curriculum</h1>
            </div>
          </div>
        </div>
        <ButtonOnDark
          property1="Default"
          onButtonOnDarkClick={onCurriculumTextClick}
          buttonOnDarkLeft="472px"
          buttonOnDarkTop="195px"
          connectWithOurExperts="초등부 커리큘럼"
          connectWithOurTextDecoration="unset"
        />
        <ButtonOnDark
          property1="Default"
          buttonOnDarkLeft="682px"
          buttonOnDarkTop="195px"
          connectWithOurExperts="중등부 커리큘럼"
          connectWithOurTextDecoration="unset"
        />
      </section>
      <main className="main5">
        <section className="suleman-sani" />
        <img className="nd-img-1-icon" alt="" src="/2nd-img-1@2x.png" />
        <img className="nd-img-4-icon" alt="" src="/2nd-img-4@2x.png" />
        <img className="nd-img-3-icon" alt="" src="/2nd-img-3@2x.png" />
        <img className="nd-img-2-icon" alt="" src="/2nd-img-2@2x.png" />
      </main>
      <div className="main6">
        <div className="content6" />
        <div className="main-child" />
      </div>
      <Footer property1="Desktop" />
    </div>
  );
};

export default Desktop1;
