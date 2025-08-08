import { Form, redirect } from "react-router";
import type { Route } from "./+types/LoginPage";
import { createUserSession, getSessionUser } from "@/services/session.service";
import { authenticateUser, getProfile } from "./auth.service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// server-side logic
export async function loader({ request }: Route.LoaderArgs) {
  //Làm gì đó trước khi component render
  // Check if the user is already logged in
  const user = await getSessionUser(request);
  if (user) {
    return redirect("/dashboard");
  }
}

//Xử lý Form submit
export async function action({ request }: Route.ActionArgs) {
  let response: Response;
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // call api to backend
    if (!email || !password) {
      throw new Error("Invalid email or password 1");
    }

    // Call API to backend for authentication
    const auth = await authenticateUser(email, password);
    if (!auth) {
      throw new Error("Invalid email or password 2");
    }

    console.log("<<=== 🚀 auth ===>>", auth);
    //get Profile by Access Token
    const profile = await getProfile(auth.accessToken);
    if (!profile) {
      throw new Error("Failed to fetch user profile");
    }

    // Create a session
    response = await createUserSession({
      request,
      user: {
        ...profile,
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
      },
      remember: true,
    });

    if (!response) {
      throw new Error("An error occurred while creating the session");
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }

    return { error: "An unknown error occurred" };
  }

  throw response;
}

const LoginPage = ({ actionData }: Route.ComponentProps) => {
  console.log("<<=== 🚀 actionData ===>>", actionData);
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
        <Form method="post" className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </Form>
        {actionData?.error ? (
          <div className="flex flex-row">
            <p className="text-red-600 mt-4 ">{actionData?.error}</p>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default LoginPage;
