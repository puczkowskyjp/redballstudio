import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("our-studio", "routes/about.tsx"),
    route("engineers", "routes/engineers.tsx")
  ]),
] satisfies RouteConfig;
