import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { themes } from "../utils/theming";

type Section = "discover" | "exhibitions" | "map" | "schedule";

type Theme = {
  background: string;
  foreground: string;
  tagColor: string;
};

interface NavigationContextProps {
  shouldHideNavbar: boolean;
  sectionTheme: Theme;
  navigateToSection: (section: Section) => void;
  isActive: (section: Section) => boolean;
}

const NavigationContext = createContext<NavigationContextProps>({
  shouldHideNavbar: false,
  sectionTheme: {
    background: "--moss-700",
    foreground: "--moss-150",
    tagColor: "--moss-850",
  },
  navigateToSection: () => {},
  isActive: () => false,
});

export const useNavigation = () => useContext(NavigationContext);

const safariRoutes = [
  "/safariPages/slider",
  "/safariPages/checkbox",
  "/safariPages/poll",
  "/safariPages/poll-results",
  "/safariPages/choose",
  "/safariPages/dialog",
];

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [theme, setTheme] = useState<Theme>({
    background: "--moss-700",
    foreground: "--moss-150",
    tagColor: "--moss-850",
  });

  const [lastPaths, setLastPaths] = useState<Record<Section, string>>({
    discover: "/",
    exhibitions: "/exhibitions",
    map: "/map",
    schedule: "/schedule",
  });

  const shouldHideNavbar =
    safariRoutes.some((path) => pathname.startsWith(path)) ||
    pathname.startsWith("/safariPages/");

  // Update last visited path per section
  useEffect(() => {
    if (pathname === "/" || pathname.startsWith("/infoPages/")) {
      setLastPaths((prev) => ({ ...prev, discover: pathname }));
    } else if (pathname.startsWith("/exhibitions")) {
      setLastPaths((prev) => ({ ...prev, exhibitions: pathname }));
    } else if (pathname.startsWith("/map")) {
      setLastPaths((prev) => ({ ...prev, map: pathname }));
    } else if (pathname.startsWith("/schedule")) {
      setLastPaths((prev) => ({ ...prev, schedule: pathname }));
    }
  }, [pathname]);

  // Find theme based on current pathname using the theming config
  useEffect(() => {
    const matchedTheme = Object.values(themes).find((themeConfig) =>
      themeConfig.routes.some((route) =>
        pathname === route || pathname.startsWith(route + "/")
      )
    );

    if (matchedTheme) {
      setTheme({
        background: matchedTheme.background,
        foreground: matchedTheme.foreground,
        tagColor: matchedTheme.tagColor,
      });
    } else {
      // fallback theme
      setTheme({
        background: "--moss-700",
        foreground: "--moss-150",
        tagColor: "--moss-850",
      });
    }
  }, [pathname]);

  const navigateToSection = (section: Section) => {
    const path = lastPaths[section];
    navigate(path);
  };

  const isActive = (section: Section): boolean => {
    switch (section) {
      case "discover":
        return pathname === "/" || pathname.startsWith("/infoPages/");
      case "exhibitions":
        return pathname.startsWith("/exhibitions");
      case "map":
        return pathname.startsWith("/map");
      case "schedule":
        return pathname.startsWith("/schedule");
      default:
        return false;
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        shouldHideNavbar,
        sectionTheme: theme,
        navigateToSection,
        isActive,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
