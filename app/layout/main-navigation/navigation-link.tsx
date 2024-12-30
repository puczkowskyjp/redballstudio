import type { PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router";
import { NavigationMenuLink } from "~/components/ui/navigation-menu";

interface LinkProps extends PropsWithChildren {
  to: string;
}

function NavigationLink({ to, ...props }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavigationMenuLink asChild active={isActive}>
      <NavLink to={to} {...props} />
    </NavigationMenuLink>
  );
}

export default NavigationLink;