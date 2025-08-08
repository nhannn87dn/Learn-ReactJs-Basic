import { redirect, type MetaFunction } from "react-router";
import type { Route } from "./+types/DashboardProductPage";
import {
  authenticatedHasRoles,
  getSessionUser,
} from "@/services/session.service";

export const meta: MetaFunction = () => {
  return [
    { title: "Product Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export async function loader({ request }: Route.LoaderArgs) {
  // Check if the user is authenticated and has the required role
  await authenticatedHasRoles({ request, roles: ["admin"] });
}

const DashboardProductPage = () => {
  return <div>DashboardProductPage</div>;
};

export default DashboardProductPage;
