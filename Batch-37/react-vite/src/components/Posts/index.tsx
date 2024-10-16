import { posts } from "../../data/posts";

interface ISinglePost {
  title: string;
  thumb: string;
  viewed: number;
}

const SinglePost = ({ post }: { post: ISinglePost }) => {
  return (
    <div className="post_item flex-1">
      <div className="thumbnail">
        <img className="w-full h-auto" src={post.thumb} alt={post.title} />
      </div>
      <h3 className="font-bold my-2">{post.title}</h3>
      <p className="text-orange-500">{post.viewed} Lượt xem</p>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="post_wrapper">
      <div className="post_head flex justify-between my-4">
        <h2 className="font-bold uppercase">Tin mới</h2>
        <div className="view_more">Xem thêm</div>
      </div>
      <div className="posts_list flex gap-x-5">
        {posts.map((post) => {
          return <SinglePost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
