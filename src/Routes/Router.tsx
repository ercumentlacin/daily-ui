import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const ProfileCardDay1558 = lazy(
  () => import("components/days/1558-ProfileCard")
);

export type TProps = {
  path: string;
  element: JSX.Element;
  name: string;
  imagePath?: string;
};

class Router implements TProps {
  public path: string;

  public element: JSX.Element;

  public name: string;

  public imagePath?: string;

  constructor(props: TProps) {
    this.path = props.path;
    this.element = props.element;
    this.name = props.name;
    this.imagePath = props.imagePath;
  }
}

export const routers: Router[] = [
  new Router({
    path: "/",
    element: <Home />,
    name: "Home",
  }),
  new Router({
    path: "day/1558-profile-card",
    element: <ProfileCardDay1558 />,
    name: "Profile Card Day 1558",
    imagePath: "assets/1558/thumb.png",
  }),
];
