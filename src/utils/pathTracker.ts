// utils/pathTracker.ts

const lastPaths: Record<string, string> = {
  discover: "/",
  exhibitions: "/exhibitions",
  map: "/map",
  schedule: "/schedule",
};

export function setLastPath(section: keyof typeof lastPaths, path: string) {
  lastPaths[section] = path;
}

export function getLastPath(section: keyof typeof lastPaths) {
  return lastPaths[section];
}

export function isSectionActive(section: keyof typeof lastPaths, pathname: string): boolean {
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
}
