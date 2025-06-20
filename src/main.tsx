import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Import the global CSS file
import { App } from "./App";
import { NavigationProvider } from "./context/NavigationContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/nhm-app/">
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </BrowserRouter>
  </StrictMode>
);
