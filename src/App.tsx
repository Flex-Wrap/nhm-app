import { Routes, Route } from "react-router-dom";
import { Discover } from "./pages/Discover";
import { Exhibitions } from "./pages/Exhibitions";
import { ExhibitionDetails } from "./pages/ExhibitionDetails";
import { Map } from "./pages/Map";
import { Schedule } from "./pages/Schedule";
import { Navbar } from "./components/Navbar";

import { TicketPrices } from "./pages/infoPages/TicketPrices";
import { OpeningHours } from "./pages/infoPages/OpeningHours";
import { RouteAndParking } from "./pages/infoPages/RouteAndParking";
import { SocialMedia } from "./pages/infoPages/SocialMedia";
import { ContactInfo } from "./pages/infoPages/ContactInfo";

import SliderPage from "./pages/safariPages/SliderPageSafari1";
import CheckboxPage from "./pages/safariPages/CheckboxPage";
import PollPage from "./pages/safariPages/PollPage";
import PollResultsPage from "./pages/safariPages/PollResultsPage";
import BasicScene from "./pages/safariPages/BasicScene";
import NotificationScene from "./pages/safariPages/NotificationScene";
import SliderPageEnd from "./pages/safariPages/SliderPageSafari2";
import ChooseQuestion from "./pages/safariPages/ChooseQuestion";
import { useEffect } from "react";

const discoverRoutes = [
  "/",
  "/infoPages/ticket-prices",
  "/infoPages/opening-hours",
  "/infoPages/route-parking",
  "/infoPages/social-media",
  "/infoPages/contact-info",
];
export function App() {
  const shouldHideNavbar =
    [
      "/safariPages/slider",
      "/safariPages/checkbox",
      "/safariPages/poll",
      "/safariPages/poll-results",
      "/safariPages/choose",
    ].some((path) => location.pathname.startsWith(path)) ||
    location.pathname.startsWith("/safariPages/scene") ||
    location.pathname.startsWith("/safariPages/notification");

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetails />} />
        <Route path="/map" element={<Map />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* Info pages */}
        <Route path="/infoPages/ticket-prices" element={<TicketPrices />} />
        <Route path="/infoPages/opening-hours" element={<OpeningHours />} />
        <Route path="/infoPages/route-parking" element={<RouteAndParking />} />
        <Route path="/infoPages/social-media" element={<SocialMedia />} />
        <Route path="/infoPages/contact-info" element={<ContactInfo />} />
        {/* Safari pages */}
        <Route path="/safariPages/slider" element={<SliderPage />} />
        <Route path="/safariPages/checkbox" element={<CheckboxPage />} />
        <Route path="/safariPages/poll" element={<PollPage />} />
        <Route path="/safariPages/poll-results" element={<PollResultsPage />} />
        <Route path="/safariPages/scene/:id" element={<BasicScene />} />
        <Route
          path="/safariPages/notification/:id"
          element={<NotificationScene />}
        />
        <Route path="/safariPages/sliderEnd" element={<SliderPageEnd />} />
        <Route path="safariPages/choose" element={<ChooseQuestion />} />
      </Routes>
    </>
  );
}
