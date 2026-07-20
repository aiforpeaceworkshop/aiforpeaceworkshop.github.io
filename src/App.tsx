import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import FirstEditionPage from "./pages/FirstEditionPage";

function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pathname === "/first-edition"
      ? "AI for Peace @ ICLR 2026 — First Edition"
      : "AI for Peace @ NeurIPS 2026";
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/first-edition" element={<FirstEditionPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
