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
import DialogPage from "./pages/safariPages/DialogPage";
import { useNavigation } from "./context/NavigationContext";
import ARPage from "./pages/safariPages/ARPage";
import { EventDetail } from "./pages/EventDetail";
import ARResult from "./pages/safariPages/ARResult";

export function App() {
  const { shouldHideNavbar } = useNavigation();

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetails />} />
        <Route path="/map" element={<Map />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="/schedule/event/:id" element={<EventDetail />} />

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
        <Route path="/safariPages/notification/:id" element={<NotificationScene />} />
        <Route path="/safariPages/sliderEnd" element={<SliderPageEnd />} />
        <Route path="/safariPages/choose" element={<ChooseQuestion />} />
        <Route path="/safariPages/dialog" element={<DialogPage />} />
        <Route path="/safariPages/ar/:id" element={<ARPage />} />
        <Route path="/safariPages/ar-result" element={<ARResult />} />

      </Routes>
    </>
  );
}
