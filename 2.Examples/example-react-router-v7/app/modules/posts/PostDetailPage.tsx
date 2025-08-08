import type { Route } from "./+types/PostDetailPage";
import { getPostById } from "./post.service";

export async function clientLoader({params}: Route.ClientLoaderArgs) {
    const res = await getPostById(params.id)
    return res;
  }
  
  export function meta({data}: Route.MetaArgs) {
    return [
        { title: data?.title || "Product Detail Page" },
        { name: "description", content: data?.body || "Product Detail Page" },
    ];
}

  // HydrateFallback is rendered while the client loader is running
  export function HydrateFallback() {
    return <div>Loading...</div>;
  }

const PostDetailPage = ({
    loaderData,
  }: Route.ComponentProps) => {
  return (
    <main className="container mx-auto my-5">
        <h1 className="text-2xl font-bold">{loaderData.title}</h1>
        <p>{loaderData.body}</p>
    </main>
  )
}

export default PostDetailPage