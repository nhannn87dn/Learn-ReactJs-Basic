import { createBrowserRouter } from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import CustomerLayout from "../layouts/CustomerLayout";
import CustomerDashboard from "../pages/CustomerDashboard";
import CustomerProfile from "../pages/CustomerProfile";
import CustomerOrder from "../pages/CustomerOrder";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "tin-tuc", Component: PostPage },
      { path: "product", Component: ProductPage },
      { path: "product/:id", Component: ProductDetail },
      { path: "contact", Component: ContactPage },
      {
        path: "customer",
        Component: CustomerLayout,
        children: [
          { index: true, Component: CustomerDashboard },
          { path: "order", Component: CustomerOrder },
          { path: "profile", Component: CustomerProfile },
        ],
      },
    ],
  },
]);
