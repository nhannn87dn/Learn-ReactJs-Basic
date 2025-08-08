import { Link } from "react-router";
import type { Route } from "./+types/PostsPage";
import { getPosts } from "./post.service";


// CLIENT LOADING
export async function clientLoader({}: Route.ClientLoaderArgs) {
    const res = await getPosts({skip: 0, limit: 10})
    return res;
  }
  
  export function meta({}: Route.MetaArgs) {
    return [
        { title: `Posts Page` },
        { name: "description", content: "Posts Page" },
    ];
}
  // HydrateFallback is rendered while the client loader is running
  export function HydrateFallback() {
    return <div>Loading...</div>;
  }

const PostsPage = ({
    loaderData,
  }: Route.ComponentProps) => {
    const {posts} = loaderData;
  return (
    <main className="container mx-auto my-5">
        <h1 className="text-2xl font-bold">Posts List</h1>
        <ul className="my-5">
            <li className="flex flex-col gap-3">
                {
                    posts.map((post)=>{
                        return (
                            <Link key={post.id} to={`/posts/${post.id}`}>
                            #{post.id} - {post.title}
                            </Link>
                        )
                    })
                }
            </li>
        </ul>
    </main>
  )
}

export default PostsPage