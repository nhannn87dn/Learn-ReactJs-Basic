export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface IProductResponse {
  products: IProduct[];
  total: number;
  limit: number;
}
