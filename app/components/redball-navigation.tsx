import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { NavLink, useLocation } from "react-router";
import { useState, type PropsWithChildren } from "react";
import redballLogo from "public/redball-logo.png";
import { motion } from 'framer-motion';

function RedballNavigation() {
  const [selectedItem, setSelectedItem] = useState(0);

  const getBallXPosition = (index: number) => {
    return index * 50 ; // Adjust the multiplier for spacing
  };

  return (
    <header className="p-2 pl-0 grid grid-cols-2 items-center">
      <div className="flex flex-row items-center gap-x-2">
        <img
          src={redballLogo}
          alt="Redball Logo"
          className="h-16 w-auto" />
        <h1 className="text-lg">Redball Recording Studio</h1>
      </div>
      {/* Ball */}
      <NavigationMenu id="nav-menu" className="flex-row justify-self-center">
        <motion.div
          style={{
            position: 'absolute',
            top: '2px',
            left: '0',
            width: '15px',
            height: '15px',
            backgroundColor: 'red',
            borderRadius: '50%',
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

export default RedballNavigation;