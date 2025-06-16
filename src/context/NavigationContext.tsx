import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

// --------------------
// 🔶 Types
// --------------------

type Section = "discover" | "exhibitions" | "map" | "schedule" | "safari" | "other";

type NavColors = {
  foreground: string;
  background: string;
  active: string;
  text: string;
};

type SectionMemory = {
  discover: string;
  exhibitions: string;
};

type NavigationContextType = {
  showNavbar: boolean;
  navColors: NavColors;
  activeSection: Section;
  sectionMemory: SectionMemory;
  setMemoryForSection: (section: keyof SectionMemory, path: string) => void;
};

// --------------------
// 🎨 Exhibition-specific color themes (you can update later)
// --------------------

const exhibitionColorMap: Record<string, NavColors> = {
  "1": { foreground: "#222", background: "#fff", active: "#ff0", text: "#000" },
  "2": { foreground: "#fff", background: "#333", active: "#f0f", text: "#eee" },
  "3": { foreground: "#aaa", background: "#000", active: "#0ff", text: "#fff" },
  "4": { foreground: "#123", background: "#edf", active: "#fa0", text: "#222" },
  "5": { foreground: "#f4f4f4", background: "#101010", active: "#5af", text: "#444" },
};

const defaultColors: NavColors = {
  foreground: "#000",
  background: "#fff",
  active: "#007bff",
  text: "#333",
};

// --------------------
// 📦 Context setup
// --------------------

const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showNavbar, setShowNavbar] = useState(true);
  const [navColors, setNavColors] = useState<NavColors>(defaultColors);
  const [activeSection, setActiveSection] = useState<Section>("discover");
  const [sectionMemory, setSectionMemory] = useState<SectionMemory>({
    discover: "/",
    exhibitions: "/exhibitions",
  });

  const setMemoryForSection = (section: keyof SectionMemory, path: string) => {
    setSectionMemory((prev) => ({ ...prev, [section]: path }));
  };

  useEffect(() => {
    // --------------------
    // 🚫 Hide navbar on safariPages
    // --------------------
    if (pathname.startsWith("/safariPages")) {
      setShowNavbar(false);
      setActiveSection("safari");
      return;
    } else {
      setShowNavbar(true);
    }

    // --------------------
    // 📚 Discover section
    // --------------------
    if (pathname === "/") {
      setActiveSection("discover");
      setMemoryForSection("discover", "/");
    } else if (pathname.startsWith("/infoPages/")) {
      setActiveSection("discover");
      setMemoryForSection("discover", pathname);
    }

    // --------------------
    // 🖼️ Exhibitions section
    // --------------------
    else if (pathname.startsWith("/exhibitions")) {
      setActiveSection("exhibitions");

      const match = pathname.match(/^\/exhibitions\/(\d+)/);
      if (match) {
        const id = match[1];
        const colors = exhibitionColorMap[id] || defaultColors;
        setNavColors(colors);
        setMemoryForSection("exhibitions", pathname);
      } else {
        setNavColors(defaultColors);
        setMemoryForSection("exhibitions", "/exhibitions");
      }
    }

    // --------------------
    // 🗺️ Map section
    // --------------------
    else if (pathname === "/map") {
      setActiveSection("map");
      setNavColors(defaultColors);
    }

    // --------------------
    // 🗓️ Schedule section
    // --------------------
    else if (pathname === "/schedule") {
      setActiveSection("schedule");
      setNavColors(defaultColors);
    }

    // --------------------
    // ❓ Fallback section
    // --------------------
    else {
      setActiveSection("other");
      setNavColors(defaultColors);
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider
      value={{
        showNavbar,
        navColors,
        activeSection,
        sectionMemory,
        setMemoryForSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// --------------------
// 🪝 Hook
// --------------------

export const useNavigation = (): NavigationContextType => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used inside NavigationProvider");
  return ctx;
};
