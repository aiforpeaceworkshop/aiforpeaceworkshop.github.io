import { useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import FirstEditionPage from "./pages/FirstEditionPage";

function DocumentTitle() {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    document.title = normalizedPathname === "/iclr-2026"
      ? "AI for Peace @ ICLR 2026 — First Edition"
      : "AI for Peace @ NeurIPS 2026";
  }, [normalizedPathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/iclr-2026" element={<FirstEditionPage />} />
          <Route path="/iclr-2026/" element={<FirstEditionPage />} />
          <Route path="/first-edition" element={<Navigate to="/iclr-2026" replace />} />
          <Route path="/first-edition/" element={<Navigate to="/iclr-2026" replace />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
