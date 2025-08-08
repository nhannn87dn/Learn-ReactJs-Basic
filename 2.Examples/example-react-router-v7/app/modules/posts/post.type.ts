
export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface IPostResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}