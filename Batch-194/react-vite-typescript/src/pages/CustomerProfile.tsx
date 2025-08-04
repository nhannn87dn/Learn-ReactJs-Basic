import { useAuthStore } from "../stores/useAuthStore";

const CustomerProfile = () => {
  const { user } = useAuthStore();
  return (
    <div className="container mx-auto">
      <h1>CustomerProfile</h1>
      <ul>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
