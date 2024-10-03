import React from "react";
import { useProfileStore } from "../stores/useProfileStore";
const GioiThieuPage = () => {
  const { user, isLoading, fetchProfile } = useProfileStore();

  React.useEffect(() => {
    fetchProfile(); //gọi hàm để lấy thông tin user
  }, []);

  return (
    <div>
      <h1>GioiThieuPage</h1>
      {isLoading ? <div>Loading...</div> : <div>{user?.name}</div>}
    </div>
  );
};

export default GioiThieuPage;
