import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ResponsiveHome from "./pages/ResponsiveHome";
import CurriculumElementary from "./pages/CurriculumElementary";
import CurriculumMiddle from "./pages/CurriculumMiddle";
import Contact from "./pages/Contact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top on route change
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update page title and meta description
  useEffect(() => {
    let title = "수학의힘 세종 소담점";
    let metaDescription = "창의융합형 미래 인재를 키우는 세종 최고의 수학학원";

    switch (pathname) {
      case "/":
        title = "수학의힘 세종 소담점 - 맞춤식 수학 학습";
        metaDescription = "진단→개별맞춤→오답코칭 루프로 매주 성장합니다. 학부모 리포트로 변화가 보입니다.";
        break;
      case "/curriculum/elementary":
        title = "초등부 커리큘럼 - 수학의힘";
        metaDescription = "초등 수학 전문 커리큘럼으로 기초부터 심화까지";
        break;
      case "/curriculum/middle":
        title = "중등부 커리큘럼 - 수학의힘";
        metaDescription = "중등 수학 전문 커리큘럼으로 내신부터 심화까지";
        break;
      case "/contact":
        title = "상담 문의 - 수학의힘";
        metaDescription = "수학의힘 세종 소담점 상담 문의 및 위치 안내";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ResponsiveHome />} />
      <Route path="/curriculum/elementary" element={<CurriculumElementary />} />
      <Route path="/curriculum/middle" element={<CurriculumMiddle />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;