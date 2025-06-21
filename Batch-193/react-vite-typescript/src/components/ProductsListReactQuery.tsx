import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useSearchParams } from "react-router";

interface IProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
}

const ProductsListReactQuery = () => {
  const queryClient = useQueryClient();

  const [params] = useSearchParams();
  const page = params.get("page");
  const currentPage = page ? parseInt(page) : 1;

  console.log("<<=== 🚀 page ===>>", page);

  //Code một hàm để fetch Product với axios
  const getAllProducts = async () => {
    const limit = 10;
    const offset = (currentPage - 1) * limit; //thuật toán phân trang
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );
    //bắt buộc hàm này phải return về dữ liệu mà bạn muốn lấy
    //mặc định dữ liệu backend trả về thì nằm trong thuộc tính data của axios
    return response.data;
  };

  /* Cấu hình phần typescript tương ứng dữ liệu trả về từ hàm getAllProducts */
  //   const queryProducts = useQuery<IProduct[], Error>({
  //     queryKey: ["get-all-products"], // là tên mà đặt cho bộ nhớ cache
  //     queryFn: getAllProducts, //truyên tên hàm, chứ ko gọi hàm
  //   });

  //đổi tên data thành products */
  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery<IProduct[], Error>({
    queryKey: ["get-all-products", currentPage], // là tên mà đặt cho bộ nhớ cache
    queryFn: getAllProducts, //truyên tên hàm, chứ ko gọi hàm
  });
  /*
  data: là dữ liệu lấy được
  isLoading: trạng thái gọi api
  isError: khi gọi api có lỗi = true/false
  error: chứa thông tin lỗi khi gọi api
  isSuccess: gọi thành công = true/false

  */

  /**  ============= XÓA PRODUCT ================== */
  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    //bắt buộc hàm này phải return về dữ liệu mà bạn muốn lấy
    //mặc định dữ liệu backend trả về thì nằm trong thuộc tính data của axios
    return response.data;
  };
  const queryDeleteProduct = useMutation({
    mutationFn: deleteProduct,
    //callback, hành động bạn muốn làm khi xóa thành công
    onSuccess: () => {
      console.log("Xóa sản phẩm thành công");
      //Làm tươi lại danh sách sản phẩm, cần truyền đúng key khi đặt cho danh sách
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["get-all-products"] });
    },
    //callback, hành động khi gọi api bị lỗi
    onError: () => {
      console.log("Xóa sản phẩm KO thành công");
    },
  });

  //Dữ liệu lấy được từ API thì nó nằm ở queryProducts.data
  console.log("<<=== 🚀 queryProducts.data ===>>", products);
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-xl my-5">ProductsListReactQuery</h2>
      {isLoading && <p>Loading....</p>}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Thumb
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Price
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {product.id}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {product.title}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    ${product.price}
                  </td>
                  <td>
                    <div className="space-x-3">
                      <Link to={`/products/${product.id}`}>View</Link>
                      <button>Edit</button>
                      <button
                        onClick={async () => {
                          console.log("Xóa sp có ID", product.id);
                          //Sử dụng react query để xóa
                          await queryDeleteProduct.mutateAsync(product.id);
                        }}
                        className="btn_danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="mt-5 space-x-5">
        <Link
          className="py-2 px-3 border border-blue-500 rounded"
          to={"/products?page=1"}
        >
          1
        </Link>
        <Link
          className="py-2 px-3 border border-blue-500 rounded"
          to={"/products?page=2"}
        >
          2
        </Link>
        <Link
          className="py-2 px-3 border border-blue-500 rounded"
          to={"/products?page=3"}
        >
          3
        </Link>
      </div>
    </div>
  );
};

export default ProductsListReactQuery;
