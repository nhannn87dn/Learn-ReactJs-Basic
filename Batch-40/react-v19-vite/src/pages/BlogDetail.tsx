import { useParams } from "react-router";
export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  return <div>BlogDetail - {id}</div>;
}
