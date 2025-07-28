import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProfile = async () => {
  const response = await axios.get(
    "http://localhost:9000/api/v1/auth/profile",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlZHdpbi5rZXNzbGVyNDRAeWFob28uY29tIiwiaWF0IjoxNzUzNzA3MzA5LCJleHAiOjE3NTQzMTIxMDl9.XDhs8N13TvfIZdiMxf06ox93YgNGm3fAc2dXhpv3jgc`,
      },
    }
  );
  return response.data;
};
const ProfileWithToken = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  console.log("<<=== 🚀 data ===>>", data);
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>ProfileWithToken</h1>
      <p>FirstName: {data.data.first_name}</p>
      <p>LastName: {data.data.last_name}</p>
    </div>
  );
};

export default ProfileWithToken;
