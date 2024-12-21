import { useMemo, type PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";
import { ScreenSizeContext } from "./use-screen-size";

function ScreenSizeProvider({children}: PropsWithChildren) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 900px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 901px)" });

  const values = useMemo(() => ({
    isMobile,
    isTablet,
    isDesktop
  }), [
    isMobile,
    isTablet,
    isDesktop
  ]);

  return <ScreenSizeContext.Provider value={values}>{children}</ScreenSizeContext.Provider>;
}

export default ScreenSizeProvider;