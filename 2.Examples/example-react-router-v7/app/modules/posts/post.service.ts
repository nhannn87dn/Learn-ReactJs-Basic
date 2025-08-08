import type { IPost, IPostResponse } from "./post.type";

export const getPosts = async ({ limit = 10, skip = 0 }: { limit?: number, skip?: number }) : Promise<IPostResponse> => {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
}

export const getPostById = async (id: string) : Promise<IPost> => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json();
    return data;
}