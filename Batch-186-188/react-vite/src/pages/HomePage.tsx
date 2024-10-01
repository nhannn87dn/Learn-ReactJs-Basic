import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "../components/ProductList";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const HomePage = () => {
  // Lay 5 sp thuoc danh muc Clothes
  const fetchClothes = async () => {
    const url = `https://api.escuelajs.co/api/v1/products?categoryId=1&&offset=0&limit=4`;
    const response = await axios.get(url);
    return response.data;
  };

  const queryClothes = useQuery<TProduct[], Error>({
    queryKey: ["clothes"], // cache dong theo query string
    queryFn: fetchClothes,
  });

  // Lay 5 sp thuoc danh muc Electronics
  const fetchElectronics = async () => {
    const url = `https://api.escuelajs.co/api/v1/products?categoryId=2&&offset=0&limit=4`;
    const response = await axios.get(url);
    return response.data;
  };

  const queryElectronics = useQuery<TProduct[], Error>({
    queryKey: ["electronics"], // cache dong theo query string
    queryFn: fetchElectronics,
  });

  return (
    <div className="container mx-auto">
      <h1>Home Page</h1>
      <h2 className="text-3xl font-bold my-5">Clothes</h2>
      <ProductList
        isLoading={queryClothes.isLoading}
        data={queryClothes.data}
      />
      <h2 className="text-3xl font-bold my-5">Electronics</h2>
      <ProductList
        isLoading={queryElectronics.isLoading}
        data={queryElectronics.data}
      />
    </div>
  );
};

export default HomePage;
