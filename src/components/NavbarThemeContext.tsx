import { createContext, useContext } from "react";

type NavbarTheme = {
  background: string;
  foreground: string;
};

export const NavbarThemeContext = createContext<NavbarTheme>({
  background: "--moss-700",
  foreground: "--moss-150",
});

export const useNavbarTheme = () => useContext(NavbarThemeContext);