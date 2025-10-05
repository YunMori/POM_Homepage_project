import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop2 from "./pages/Desktop2";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop3 from "./pages/Desktop3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
      case "/desktop1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop2":
        title = "";
        metaDescription = "";
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
      <Route path="/" element={<Desktop2 />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/desktop1" element={<Desktop1 />} />
      <Route path="/desktop2" element={<Desktop3 />} />
    </Routes>
  );
}
export default App;
