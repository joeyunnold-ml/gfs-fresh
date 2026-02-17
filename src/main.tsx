import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import { HomePage } from "./app/components/HomePage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/current-member" element={<App />} />
      <Route path="/never-member" element={<App />} />
    </Routes>
  </BrowserRouter>
);
