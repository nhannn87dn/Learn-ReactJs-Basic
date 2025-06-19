import axios from "axios";
import { useEffect } from "react";

const GetProfileAuth = () => {
  /* Lấy thông tin profile ngay khi component render lần đầu tiên */
  useEffect(() => {
    //code hàm để gọi api
    const fetchProfile = async () => {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc1MDMzMTgyMSwiZXhwIjoxNzUyMDU5ODIxfQ.PbIq-YIoKJEfo2pMCniCc5aAqlELYDhJ_zRhXatAPP8`,
          },
        }
      );
      console.log("res", res);
    };
    //gọi hàm để thực thi việc gọi api
    fetchProfile();
  }, []);
  return <div>GetProfileAuth</div>;
};

export default GetProfileAuth;
