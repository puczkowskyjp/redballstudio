import { createContext, useContext } from "react";

//TODO: Determine common breakpoints for mobile, tablet, and large screen
interface IScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const ScreenSizeContext = createContext<IScreenSize>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);

  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }

  return context;
}