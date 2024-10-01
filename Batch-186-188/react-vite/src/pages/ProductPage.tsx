import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "../components/ProductList";
import { Link, useSearchParams } from "react-router-dom";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductPage = () => {
  const [params] = useSearchParams();

  const page_str = params.get("page");
  const page = page_str ? parseInt(page_str) : 1; //Mac dinh page=1 neu page ko ton tai
  console.log("<<=== 🚀 page_str ===>>", page_str);

  //Ham goij API
  const fetchProduct = async () => {
    const limit = 8;
    const offset = (page - 1) * limit; //vi tri bat dau lay
    // so luong sp can lay

    //8 - 8
    const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;
    const response = await axios.get(url);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery<TProduct[], Error>({
    queryKey: ["products", page], // cache dong theo query string
    queryFn: fetchProduct,
  });

  //Nếu có lỗi khi gọi API
  if (isError) {
    return (
      <div className="container mx-auto">
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1>ProductPage</h1>
      <ProductList isLoading={isLoading} data={data} />
      <div className="pagination flex gap-4">
        <Link
          className="border border-slate-400 rounded p-3"
          to={"/products?page=1"}
        >
          1
        </Link>
        <Link
          className="border border-slate-400 rounded p-3"
          to={"/products?page=2"}
        >
          2
        </Link>
        <Link
          className="border border-slate-400 rounded p-3"
          to={"/products?page=3"}
        >
          3
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
