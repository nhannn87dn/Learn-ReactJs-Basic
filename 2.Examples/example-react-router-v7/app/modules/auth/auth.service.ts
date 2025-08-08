export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

/** Represents a user in the system */
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active: boolean;
  role: string; // có thể mở rộng thêm role nếu cần
  permissions: string[];
}

export const authenticateUser = async (
  email: string,
  password: string
): Promise<AuthResponse | null> => {
  const response = await fetch(
    "https://learn-backend-nodejs.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    return null;
  }

  const res = await response.json();
  return res.data;
};

export const getProfile = async (accessToken: string): Promise<User | null> => {
  const response = await fetch(
    `https://learn-backend-nodejs.onrender.com/api/v1/auth/profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const res = await response.json();
  return res.data;
};
