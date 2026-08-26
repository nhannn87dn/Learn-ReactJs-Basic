import { useEffect, useState } from "react";

type TMe = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  age: number;
};

const GetProfile = () => {
  const [me, setMe] = useState<TMe | null>(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3ODc3Mjg2NjIsImV4cCI6MTc4NzczMjI2Mn0.b2xMBtAbFk2PV44npdFhrm0z0s6eZZtIFmvRE9AoKko",
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          setMe(data);
        }
        console.log("<<=== 🚀 data ===>>", data);
      } catch (error) {
        console.log(error);
      }
    };
    //goi ham
    fetchMe();
  }, []);

  console.log("<<=== 🚀 me ===>>", me);

  return (
    <div>
      <h1>My Profile</h1>
      <ul>
        <li>
          Name: {me?.firstName} {me?.lastName}
        </li>
        <li>Email: {me?.email}</li>
        <li>Age: {me?.age}</li>
        <li>Gender: {me?.gender}</li>
      </ul>
    </div>
  );
};

export default GetProfile;
