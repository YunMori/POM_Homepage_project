import { useCallback } from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "./Desktop3.css";

const Desktop3 = () => {
  const onCurriculumTextClick = useCallback(() => {
    // Please sync "/curiiculum_el" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "홈" to the project
  }, []);

  return (
    <div className="desktop4">
      <Nav
        property1="Desktop"
        mainLogo="/main-logo@2x.png"
        onCurriculumTextClick={onCurriculumTextClick}
        onHomeTextClick={onHomeTextClick}
      />
      <Main />
      <Footer property1="Desktop" />
    </div>
  );
};

export default Desktop3;
