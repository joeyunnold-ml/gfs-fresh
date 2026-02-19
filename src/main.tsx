import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import { HomePage } from "./app/components/HomePage.tsx";
import { StyleGuide } from "./app/components/StyleGuide.tsx";
import { TicketFlow1 } from "./app/components/TicketFlow1.tsx";
import { TicketFlowGuest } from "./app/components/TicketFlowGuest.tsx";
import { TicketConfirmation } from "./app/components/TicketConfirmation.tsx";
import { MemberPortalEntry } from "./app/components/MemberPortalEntry.tsx";
import "./styles/index.css";

class GuestFlowErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: "sans-serif", maxWidth: 640 }}>
          <h2 style={{ color: "#b91c1c" }}>Guest flow error</h2>
          <pre style={{ overflow: "auto", background: "#fef2f2", padding: 16, borderRadius: 8 }}>
            {this.state.error.message}
          </pre>
          <pre style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/current-member" element={<App />} />
      <Route path="/never-member" element={<App />} />
      <Route path="/mp-style" element={<StyleGuide />} />
      <Route path="/ticket-flow-1" element={<TicketFlow1 />} />
      <Route path="/ticket-flow-guest" element={
        <GuestFlowErrorBoundary>
          <TicketFlowGuest />
        </GuestFlowErrorBoundary>
      } />
      <Route path="/ticket-flow-guest/confirmation" element={<TicketConfirmation />} />
      <Route path="/member-portal-entry" element={<MemberPortalEntry />} />
    </Routes>
  </BrowserRouter>
);
