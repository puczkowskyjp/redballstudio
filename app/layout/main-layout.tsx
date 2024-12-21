import { Link, Outlet } from "react-router";
import RedballNavigation from "~/components/redball-navigation";


export default function MainLayout() {
  return (
    <>
      <RedballNavigation />
      <main className="p-4 pt-0 mx-auto w-full">
        <Outlet />
      </main>
    </>
  );
}
