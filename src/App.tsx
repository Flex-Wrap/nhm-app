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

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setLastDiscoverPath } from "./utils/pathTracker";
import SliderPage from "./pages/safariPages/SliderPageSafari1";
import CheckboxPage from "./pages/safariPages/CheckboxPage";
import PollPage from "./pages/safariPages/PollPage";

const discoverRoutes = [
  "/",
  "/infoPages/ticket-prices",
  "/infoPages/opening-hours",
  "/infoPages/route-parking",
  "/infoPages/social-media",
  "/infoPages/contact-info",
];
export function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/safariPages/slider", "/safariPages/checkbox", "/safariPages/poll"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    if (discoverRoutes.includes(location.pathname)) {
      setLastDiscoverPath(location.pathname);
    }
  }, [location.pathname]);
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
      </Routes>
    </>
  );
}
