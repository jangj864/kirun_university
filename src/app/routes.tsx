import { createHashRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Admission } from "./pages/Admission";
import { AcademicInfo } from "./pages/AcademicInfo";
import { NotFound } from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
      { path: "shop/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "admission", Component: Admission },
      { path: "academic", Component: AcademicInfo },
      { path: "*", Component: NotFound },
    ],
  },
]);
