import useUserStore from "../hooks/useUserStore";
const CustomerDashboardPage = () => {
  const { user } = useUserStore();
  return (
    <div>
      <h2>CustomerDashboardPage</h2>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default CustomerDashboardPage;
