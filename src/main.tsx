import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import App from "./app/App.tsx";
import { HomePage } from "./app/components/HomePage.tsx";
import { GfsOrg } from "./app/components/GfsOrg.tsx";
import { StyleGuide } from "./app/components/StyleGuide.tsx";
import { TypePage } from "./app/components/TypePage.tsx";
import { TicketFlow1 } from "./app/components/TicketFlow1.tsx";
import { TicketFlowGuest } from "./app/components/TicketFlowGuest.tsx";
import { TicketConfirmation } from "./app/components/TicketConfirmation.tsx";
import { MemberPortalEntry } from "./app/components/MemberPortalEntry.tsx";
import { MemberPortalPassword } from "./app/components/MemberPortalPassword.tsx";
import { AccountRegistration } from "./app/components/AccountRegistration.tsx";
import { AltruRegistration } from "./app/components/AltruRegistration.tsx";
import { LoginNoAltruAccount } from "./app/components/LoginNoAltruAccount.tsx";
import { LoginToRegNoAlt } from "./app/components/LoginToRegNoAlt.tsx";
import { LoginAsUser } from "./app/components/LoginAsUser.tsx";
import { CreatePortalWithAltru } from "./app/components/CreatePortalWithAltru.tsx";
import { MembershipPurchase } from "./app/components/MembershipPurchase.tsx";
import { MembershipConfirmation } from "./app/components/MembershipConfirmation.tsx";
import { EventTicketPurchase } from "./app/components/EventTicketPurchase.tsx";
import { EventSoldOut } from "./app/components/EventSoldOut.tsx";
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
        <div style={{ padding: 24, fontFamily: "sans-serif", maxWidth: 640, fontSize: 16 }}>
          <h2 style={{ color: "#b91c1c", fontSize: "1.25rem", fontWeight: 700 }}>Guest flow error</h2>
          <pre style={{ overflow: "auto", background: "#fef2f2", padding: 16, borderRadius: 8, fontSize: 16 }}>
            {this.state.error.message}
          </pre>
          <pre style={{ fontSize: 16, color: "#666", marginTop: 8 }}>
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/current-member" element={<App />} />
      <Route path="/expiring-soon" element={<App variant="expiring-soon" />} />
      <Route path="/recently-expired" element={<App variant="recently-expired" />} />
      <Route path="/non-member" element={<App variant="non-member" />} />
      <Route path="/never-member" element={<App />} />
      <Route path="/gfs-org" element={<GfsOrg />} />
      <Route path="/mp-style" element={<StyleGuide />} />
      <Route path="/type" element={<TypePage />} />
      <Route path="/ticket-flow-1" element={<TicketFlow1 />} />
      <Route path="/ticket-flow-guest" element={
        <GuestFlowErrorBoundary>
          <TicketFlowGuest />
        </GuestFlowErrorBoundary>
      } />
      <Route path="/ticket-flow-guest-calendar-exposed" element={
        <GuestFlowErrorBoundary>
          <TicketFlowGuest calendarExpandedByDefault />
        </GuestFlowErrorBoundary>
      } />
      <Route path="/ticket-flow-member" element={
        <GuestFlowErrorBoundary>
          <TicketFlowGuest memberFlow />
        </GuestFlowErrorBoundary>
      } />
      <Route path="/ticket-flow-guest/confirmation" element={<TicketConfirmation />} />
      <Route path="/member-portal-entry" element={<MemberPortalEntry />} />
      <Route path="/member-portal-entry/password" element={<MemberPortalPassword />} />
      <Route path="/login-to-reg-no-alt" element={<LoginToRegNoAlt />} />
      <Route path="/login-as-user" element={<LoginAsUser />} />
      <Route path="/create-portal-with-altru" element={<CreatePortalWithAltru />} />
      <Route path="/account-registration" element={<AccountRegistration />} />
      <Route path="/altru-registration" element={<AltruRegistration />} />
      <Route path="/login-no-altru-account" element={<LoginNoAltruAccount />} />
      <Route path="/membership-purchase" element={<MembershipPurchase />} />
      <Route path="/membership-purchase/confirmation" element={<MembershipConfirmation />} />
      <Route path="/event-ticket" element={
        <GuestFlowErrorBoundary>
          <EventTicketPurchase />
        </GuestFlowErrorBoundary>
      } />
      <Route path="/event-sold-out" element={
        <GuestFlowErrorBoundary>
          <EventSoldOut />
        </GuestFlowErrorBoundary>
      } />
    </Routes>
  </BrowserRouter>
);
