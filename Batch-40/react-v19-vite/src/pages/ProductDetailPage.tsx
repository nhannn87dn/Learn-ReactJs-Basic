import { useParams } from "react-router";
export default function ProductDetailPage() {
  //   const params = useParams();
  //   const slug = params.slug;
  const { slug } = useParams();
  console.log("<<=== 🚀 slug ===>>", slug);
  return <div>ProductDetailPage - {slug}</div>;
}
