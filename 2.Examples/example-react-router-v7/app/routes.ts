import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Public routes
  layout("components/layouts/DefaultLayout/DefaultLayout.tsx", [
    index("modules/home/HomePage.tsx"),
    route("products", "modules/products/ProductsPage.tsx"),
    route("products/:id", "modules/products/ProductDetailPage.tsx"),
    route("posts", "modules/posts/PostsPage.tsx"),
    route("posts/:id", "modules/posts/PostDetailPage.tsx"),
    route("login", "modules/auth/LoginPage.tsx"),
  ]),
  // private routes
  layout("components/layouts/DashboardLayout/DashboardLayout.tsx", [
    ...prefix("dashboard", [
      index("modules/dashboard/DashboardPage.tsx"),
      route("products", "modules/dashboard/DashboardProductPage.tsx"),
      route("unauthorized", "modules/auth/UnauthorizedPage.tsx"),
    ]),
    route("/logout", "modules/auth/LogoutPage.tsx"),
  ]),
  // Not Found Page
  route("*", "./catchall.tsx"),
] satisfies RouteConfig;
