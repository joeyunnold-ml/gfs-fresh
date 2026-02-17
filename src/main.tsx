import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import { HomePage } from "./app/components/HomePage.tsx";
import { StyleGuide } from "./app/components/StyleGuide.tsx";
import { TicketFlow1 } from "./app/components/TicketFlow1.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/current-member" element={<App />} />
      <Route path="/never-member" element={<App />} />
      <Route path="/mp-style" element={<StyleGuide />} />
      <Route path="/ticket-flow-1" element={<TicketFlow1 />} />
    </Routes>
  </BrowserRouter>
);
