let lastDiscoverPath = "/";

export function setLastDiscoverPath(path: string) {
  lastDiscoverPath = path;
}

export function getLastDiscoverPath() {
  return lastDiscoverPath;
}

export function isDiscoverActive(pathname: string): boolean {
  return pathname === "/" || pathname.startsWith("/infoPages/");
}