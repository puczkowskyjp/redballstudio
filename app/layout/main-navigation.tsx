import useScreenSize from '~/hooks/use-screen-size/use-screen-size';
import RedballNavigationDesktop from './main-navigation.desktop';
import MainNavigationMobile from './main-navigation.mobile';

export default function RedballNavigation() {
  const { isMobile } = useScreenSize();
  if (isMobile) return <MainNavigationMobile/>;
  return <RedballNavigationDesktop />;
}
