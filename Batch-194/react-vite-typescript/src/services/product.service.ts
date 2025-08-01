import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getPaginationProducts = async ({
  limit = 10,
  skip = 0,
}: {
  limit: number;
  skip: number;
}) => {
  const response = await axios.get(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};
