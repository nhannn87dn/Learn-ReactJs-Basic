import type { Route } from "./+types/UnauthorizedPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UnauthorizedPage" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const UnauthorizedPage = () => {
  return <div>UnauthorizedPage</div>;
};

export default UnauthorizedPage;
