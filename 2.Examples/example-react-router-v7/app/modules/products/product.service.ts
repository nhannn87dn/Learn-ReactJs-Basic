import type { IProductDetailResponse, IProductResponse } from "./product.type";

const baseUrl = "https://learn-backend-nodejs.onrender.com/api";

export const getProducts = async ({ limit = 10, page = 1 }: { limit?: number, page?: number }) : Promise<IProductResponse> => {
    const response = await fetch(`${baseUrl}/v1/products?limit=${limit}&page=${page}`);
    const data = await response.json();
    return data;
}

export const getProductById = async (id: number) : Promise<IProductDetailResponse> => {
    const response = await fetch(`${baseUrl}/v1/products/${id}`);
    const data = await response.json();
    return data;
}