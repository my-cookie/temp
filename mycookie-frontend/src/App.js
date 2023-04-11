import Router from "./pages/Router";
import { Reset } from "styled-reset";
import GlobalFonts from "../src/styles/font";
import Layout from "./pages/Layout";
import { useEffect } from "react";

function App() {
  const initKakao = () => {
    const key = process.env.REACT_APP_JS_KEY;
    const Kakao = window.Kakao;
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(key);
      console.log(Kakao.isInitialized());
    }
  };

  useEffect(() => {
    initKakao();
  }, []);
  return (
    <>
      <Reset />
      <GlobalFonts />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
