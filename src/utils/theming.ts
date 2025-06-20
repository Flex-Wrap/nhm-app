export type ThemeConfig = {
  background: string;
  foreground: string;
  tagColor: string;
  routes: string[]; // route prefixes or exact routes
};

export const themes: Record<string, ThemeConfig> = {
  moss: {
    background: "--moss-700",
    foreground: "--moss-150",
    tagColor: "--moss-850",
    routes: [
      "/",
      "/infoPages",
      "/discover",
      "/exhibitions/",
      "/exhibitions/2", // exhibitions/2 uses moss theme as well
      "/map",
      "/schedule",
    ],
  },
  brown: {
    background: "--brown-700",
    foreground: "--brown-150",
    tagColor: "--brown-850",
    routes: ["/exhibitions/1"],
  },
  orange: {
    background: "--orange-700",
    foreground: "--orange-150",
    tagColor: "--orange-850",
    routes: ["/exhibitions/3"],
  },
  wheat: {
    background: "--wheat-700",
    foreground: "--wheat-150",
    tagColor: "--wheat-850",
    routes: ["/exhibitions/4","/safariPages/AR"],
  },
  polar: {
    background: "--polar-700",
    foreground: "--polar-150",
    tagColor: "--polar-850",
    routes: ["/exhibitions/5"],
  },
};
