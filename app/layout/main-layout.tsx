import { Link, Outlet } from "react-router";
import RedballNavigation from "./main-navigation";


export default function MainLayout() {
  return (
    <>
      <RedballNavigation />
      <main className="p-4 pt-0 mx-auto w-full min-h-screen bg-[#f4f4f4]">
        <Outlet />
      </main>
    </>
  );
}
