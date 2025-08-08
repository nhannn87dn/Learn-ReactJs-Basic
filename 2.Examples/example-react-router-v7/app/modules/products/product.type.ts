export interface IProduct {
    id: number;
    product_name: string;
    description: string;
    price: number;
    thumbnail: string;
    slug: string
}

export interface IProductResponse {
    statusCode: number;
    message: string;
    data: {
        data: IProduct[];
        totalRecords: number;
        page: number;
        limit: number;
        totalPages: number;
    }
}

export interface IProductDetailResponse {
    statusCode: number;
    message: string;
    data: IProduct
}