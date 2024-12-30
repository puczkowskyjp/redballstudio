import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { useState } from "react";
import redballLogo from "/redball-logo.png?url";
import { motion } from 'framer-motion';
import {
  Drawer,
  DrawerContent,
} from "~/components/ui/drawer";
import HamburgerMenu from "~/components/hamburger-menu";
import NavigationLink from "./navigation-link";

export default function MainNavigationMobile() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const getBallXPosition = (index: number) => {
    if (index === 0) return index;
    if (index === 1) return index * 40; // First item
    return index * 25 + 5; // Adjust the multiplier for spacing
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[#2d2d2d] text-[#f4f4f4] p-2 pl-0 pr-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-2">
          <img
            src={redballLogo}
            alt="Redball Logo"
            className="h-16 w-auto" />
          <h1 className="text-xl">Redball Recording Studio</h1>
        </div>
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
      
      <Drawer open={isOpen} onClose={toggleMenu} >
        <DrawerContent className="bg-[#2d2d2d] text-[#f4f4f4]">
          <div className="mx-4 w-full max-w-sm h-1/2">
            <NavigationMenu id="nav-menu" orientation="vertical">
              <motion.div
                style={{
                  position: 'absolute',
                  top: '35px',
                  left: '10px',
                  width: '16px',
                  height: '16px',
                  backgroundImage: 'url(/redball.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{
                  y: getBallXPosition(selectedItem), // Move the ball
                  rotate: 20 * (selectedItem + 1),  // Rotate the ball as it moves
                }}
                transition={{
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 15, 
                  ease: "easeInOut",
                }}
              />
              <NavigationMenuList className="flex flex-col items-start justify-start space-y-4 space-x-0 pl-4 py-8">
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
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};