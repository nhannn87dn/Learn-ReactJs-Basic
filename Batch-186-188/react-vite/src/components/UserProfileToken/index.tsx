import React from "react";

const UserProfileToken = () => {
  return (
    <div>
      UserProfileToken
      <button
        className="btn btn-default"
        onClick={async () => {
          const url = "https://api.escuelajs.co/api/v1/auth/profile";
          const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcyNzM1NzM3OSwiZXhwIjoxNzI5MDg1Mzc5fQ.iNLeXiNhe2E_PP28Y_a07IQkHgc5B0yvH8KPiT4gwhY";
          const options = {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await fetch(url, options);
          const result = await response.json();
          console.log("<<=== 🚀 response ===>>", response);
          console.log("<<=== 🚀 result ===>>", result);
        }}
      >
        getProfile
      </button>
    </div>
  );
};

export default UserProfileToken;
