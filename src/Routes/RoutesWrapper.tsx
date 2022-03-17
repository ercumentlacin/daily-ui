import { Route, Routes } from "react-router-dom";
import { routers } from "./Router";

export default function RoutesWrapper() {
  const RouteGroub = routers.map((route) => {
    if (route.path === "/") {
      return <Route key={route.path} index element={route.element} />;
    }
    return <Route key={route.path} {...route} />;
  });

  return <Routes>{RouteGroub}</Routes>;
}
