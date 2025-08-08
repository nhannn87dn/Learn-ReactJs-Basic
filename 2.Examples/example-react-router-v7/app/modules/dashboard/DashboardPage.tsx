import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

const DashboardPage = () => {
  return <div>DashboardPage</div>;
};

export default DashboardPage;
