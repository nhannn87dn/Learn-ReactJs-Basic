import { Form, NavLink, Outlet, redirect } from "react-router";
import type { Route } from "./+types/DashboardLayout";
import { getSessionUser } from "@/services/session.service";

export async function loader({ request }: Route.LoaderArgs) {
  // Check if the user is already logged in
  const user = await getSessionUser(request);
  if (!user) {
    throw redirect("/login");
  } else {
    return { user };
  }
}

const DashboardLayout = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData.user;
  console.log("<<=== 🚀 user ===>>", user);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">
                Dashboard
              </span>
            </div>
            <div className="flex items-center">
              {/* User Profile */}
              {user && (
                <>
                  <span className="text-gray-600">{user.email}</span>
                  <Form action="/logout" method="post">
                    <button
                      type="submit"
                      className="border rounded px-2.5 py-1"
                    >
                      Logout
                    </button>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar & Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 fixed h-full bg-white shadow-md">
          <div className="p-4">
            <nav className="space-y-2">
              <NavLink
                to="/dashboard"
                className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <span className="ml-3">Dashboard</span>
              </NavLink>

              <NavLink
                to="/dashboard/products"
                className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <span className="ml-3">Products</span>
              </NavLink>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
