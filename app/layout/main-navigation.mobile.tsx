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


import {
  Drawer,
  DrawerContent,
} from "~/components/ui/drawer"

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
        {/* Hamburger Icon */}
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer flex flex-col justify-center items-center space-y-1"
          animate={{
            rotate: isOpen ? 45 : 0, // Rotate the hamburger to X
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Top bar */}
          <motion.div
            className="w-8 h-1 bg-white"
            animate={{
              rotate: isOpen ? 90 : 0, // Rotate the top bar when open
              translateY: isOpen ? 6 : 0, // Move it down when it's an X
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Middle bar */}
          <motion.div
            className="w-8 h-1 bg-white"
            animate={{
              opacity: isOpen ? 0 : 1, // Hide the middle bar when open
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom bar */}
          <motion.div
            className="w-8 h-1 bg-white"
            animate={{
              //rotate: isOpen ? 10 : 0, // Rotate the bottom bar when open
              translateY: isOpen ? -9.5 : 0, // Move it up when it's an X
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </header>
      <Drawer open={isOpen} onClose={toggleMenu} >
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
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
                  rotate: 360 * (selectedItem + 1),  // Rotate the ball as it moves
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <NavigationMenuList className="flex flex-col items-start justify-start space-y-4 space-x-0 pl-4 py-8">
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
          </div>
        </DrawerContent>
      </Drawer>

      {/* Ball */}

    </>
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