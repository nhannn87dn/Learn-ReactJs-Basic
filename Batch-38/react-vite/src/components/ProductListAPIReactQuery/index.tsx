import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AddProductReactQuery from "./AddProductReactQuery";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const SingleProduct = ({
  product,
  onClick,
}: {
  product: IProduct;
  onClick: () => void;
}) => {
  return (
    <div className="item w-[220px]">
      <img
        width={200}
        height={200}
        src={product.images[0]}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <strong>{product.price}</strong>
      <button onClick={onClick} className="btn">
        Delete
      </button>
    </div>
  );
};

const ProductListAPIReactQuery = () => {
  /*Phân trang  */
  const [params] = useSearchParams();
  const page = params.get("page");
  const int_page = page ? parseInt(page) : 1;

  console.log(page);
  //?offset=0&limit=10 -- ?page=1
  //?offset=10&limit=10 --> ?page=2

  // Access the client
  const queryClient = useQueryClient();
  /*
    Fetch data và return kết quả cuối cùng
    */
  const getProducts = async (page: number) => {
    const limit = 10; //Số lượng sp / 1trang
    const offset = (page - 1) * limit; //công thức phân trang
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );
    return result.data;
  };
  /**
   * 
   query = {data,isSuccess, isError, error, isLoading }
   data: chứa kết quả trả về
   */
  const query = useQuery<IProduct[], Error>({
    queryKey: ["products", int_page], //key khong trung lap cua bo nho cache
    queryFn: () => getProducts(int_page),
  });

  const deleteProduct = async (productId: number) => {
    const result = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    return result.data;
  };

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch
      //cập nhật lại bộ nhớ cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //reset form
    },
    onError: (err) => {
      console.log("<<=== 🚀 err ===>>", err);
    },
  });

  const handleDeleteProductAxios = async (productId: number) => {
    mutation.mutate(productId);
  };

  return (
    <>
      <main className="my-10">
        <AddProductReactQuery />
        <h2>Product List React Query</h2>
        <div className="pagination flex gap-x-10">
          <Link
            className="rounded border border-slate-600 py-3 px-4"
            to={`/products?page=1`}
          >
            1
          </Link>
          <Link
            className="rounded border border-slate-600 py-3 px-4"
            to={`/products?page=2`}
          >
            2
          </Link>
          <Link
            className="rounded border border-slate-600 py-3 px-4"
            to={`/products?page=3`}
          >
            3
          </Link>
        </div>
        {query.isLoading && <div>Loading.......</div>}
        <div className="flex gap-3 flex-wrap justify-between">
          {query.data &&
            query.data.length > 0 &&
            query.data.map((product) => {
              return (
                <SingleProduct
                  onClick={() => handleDeleteProductAxios(product.id)}
                  key={product.id}
                  product={product}
                />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default ProductListAPIReactQuery;
