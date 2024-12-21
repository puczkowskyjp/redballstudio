import About from "~/pages/about/about";
import type { Route } from "./+types/about";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Redball Studio | Our Studio" },
    { name: "description", content: "Welcome to Redball Recording Studio" },
  ];
}

export default function Page() {
  return <About/>;
}
