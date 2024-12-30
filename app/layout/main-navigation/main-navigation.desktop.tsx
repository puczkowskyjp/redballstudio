import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { useState } from "react";
import redballLogo from "/redball-logo.png";
import { motion } from 'framer-motion';
import NavigationLink from "./navigation-link";

function RedballNavigationDesktop() {
  const [selectedItem, setSelectedItem] = useState(0);

  const getBallXPosition = (index: number) => {
    if (index === 0) return index;
    if (index === 1) return index * 56; // First item
    return index * 37.5; // Adjust the multiplier for spacing
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
          transition={{ type: 'spring', stiffness: 150, damping: 25 }}
        />
        <NavigationMenuList className="gap-x-2">
          <NavigationMenuItem onClick={() => setSelectedItem(0)}>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => setSelectedItem(1)}>
            <NavigationLink to="/our-studio">About</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => setSelectedItem(3)}>
            <NavigationLink to="/engineers">Engineers</NavigationLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};


export default RedballNavigationDesktop;