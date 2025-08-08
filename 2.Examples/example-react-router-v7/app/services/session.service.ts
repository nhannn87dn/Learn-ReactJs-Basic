import type { User } from "@/modules/auth/auth.service";
import { createCookieSessionStorage, redirect } from "react-router";

interface SessionUser extends User {
  accessToken: string;
  refreshToken: string;
}

/**
 * Creates a cookie-based session storage.
 * @see https://reactrouter.com/en/dev/utils/create-cookie-session-storage
 */
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["s3cret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, destroySession } = sessionStorage;

/**
 * Retrieves the user session from the request.
 * @param {Request} request - The incoming request.
 * @returns {Promise<Session>} The user session.
 */
const getUserSession = async (request: Request) => {
  return await sessionStorage.getSession(request.headers.get("Cookie"));
};

export async function authenticatedHasRoles(params: {
  request: Request;
  roles: string[];
}) {
  const user = await getSessionUser(params.request);
  if (!user || !params.roles.includes(user.role)) {
    throw redirect("/dashboard/unauthorized");
  }
}

/**
 * Logs out the user by destroying their session.
 * @param {Request} request - The incoming request.
 * @returns {Promise<Response>} Redirect response after logout.
 */
export async function logout(request: Request) {
  console.log("logout");
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

const USER_SESSION_KEY = "user";

/**
 * Retrieves the user ID from the session.
 * @param {Request} request - The incoming request.
 * @returns {Promise<string | undefined>} The user ID if found, undefined otherwise.
 */
export async function getSessionUser(
  request: Request
): Promise<SessionUser | undefined> {
  const session = await getUserSession(request);
  const user = session.get(USER_SESSION_KEY);
  return user;
}

export async function createUserSession({
  request,
  user,
  remember = true,
  redirectUrl,
}: {
  request: Request;
  user: SessionUser;
  remember: boolean;
  redirectUrl?: string;
}) {
  const session = await getUserSession(request);
  //have should convert to json for user ?
  session.set(USER_SESSION_KEY, user);
  return redirect(redirectUrl || "/dashboard", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}
