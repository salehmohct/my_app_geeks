import { lazy } from "react";

const Home = lazy(() => import("../component/Home"));
const Cart = lazy(() => import("../component/Cart"));
export const Paths = {
  home: "/",
  cart: "/cart",
};

export const router = [
  { index: true, element: <Home /> },
  { path: Paths.cart, element: <Cart /> },
];
