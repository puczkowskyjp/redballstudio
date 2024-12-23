import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { NavLink, useLocation } from "react-router";
import { useState, type PropsWithChildren } from "react";
import redballLogo from "/redball-logo.png?url";
import { motion } from 'framer-motion';

function RedballNavigationDesktop() {
  const [selectedItem, setSelectedItem] = useState(0);

  const getBallXPosition = (index: number) => {
    if (index === 0) return index;
    if (index === 1) return index * 52; // First item
    return index * 34; // Adjust the multiplier for spacing
  };

  return (
    <header className="bg-[#2d2d2d] text-[#f4f4f4] p-2 pl-0 pr-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-x-2">
        <img
          src={redballLogo}
          alt="Redball Logo"
          className="h-16 w-auto" />
        <h1 className="text-xl">Redball Recording Studio</h1>
      </div>
      {/* Ball */}
      <NavigationMenu id="nav-menu" className="flex-row justify">
        <motion.div
          style={{
            position: 'absolute',
            top: '2px',
            left: '-2px',
            width: '16px',
            height: '16px',
            backgroundImage: 'url(/redball.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            x: getBallXPosition(selectedItem), // Move the ball
            rotate: 360 * (selectedItem + 1),  // Rotate the ball as it moves
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
        <NavigationMenuList className="gap-x-2">
          <NavigationMenuItem onClick={() => setSelectedItem(0)}>
            <Link to="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => setSelectedItem(1)}>
            <Link to="/our-studio">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => setSelectedItem(3)}>
            <Link to="/engineers">Engineers</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

interface LinkProps extends PropsWithChildren {
  to: string;
}

function Link({ to, ...props }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavigationMenuLink asChild active={isActive}>
      <NavLink to={to} {...props} />
    </NavigationMenuLink>
  );
}

export default RedballNavigationDesktop;