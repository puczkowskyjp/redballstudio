import Home from "~/pages/home/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Redball Studio | Home" },
    { name: "description", content: "Welcome to Redball Recording Studio" },
  ];
}

export default function Page() {
  return <Home/>;
}
