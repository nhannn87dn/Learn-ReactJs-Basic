import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Modal from "../Modal";
import UpdateFormProductrReactQuery from "./UpdateFormProductrReactQuery";

interface IProduct {
  id: number;
  product_name: string;
  price: number;
  discount: number;
  category_id: number;
  brand_id: number;
  description: string;
  model_year: number;
  stock: number;
  thumbnail: string;
  slug: string;
}

const getProducts = async () => {
  const response = await axios.get("http://localhost:9000/api/v1/products");
  return response.data;
};

const ProductListReactQuery = () => {
  const [selected, setSelected] = useState<IProduct | null>(null);

  const queryClient = useQueryClient();
  const queryProducts = useQuery({
    queryKey: ["products"], //đặt tên cho bộ nhớ đệm
    queryFn: getProducts, // hàm để lấy danh sách products
  });
  /**
   * useQuery bọc lại getProducts
   * để nó caching lại kết quả mà quá trình gọi API từ getProducts lấy được
   *
   */

  //Dữ liệu lấy được
  const productResponse = queryProducts.data || [];
  const error = queryProducts.isError ? queryProducts.error : null;
  const loading = queryProducts.isLoading;

  /* -------- DELETE PRODUCT --------------*/
  const deleteProduct = async ({ id }: { id: number }) => {
    const response = await axios.delete(
      `http://localhost:9000/api/v1/products/${id}`
    );
    return response.data;
  };
  const mutationDeleteProduct = useMutation({
    mutationFn: deleteProduct, // hàm API để xóa
    onSuccess: () => {
      //làm gì đó khi xóa thành công
      alert("Xóa sản phẩm thành công");
      //làm tươi lại danh sách dựa vào key
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      // làm gì đó khi xóa thất bại
      alert("Xóa sp thất bại");
    },
  });

  /* ---------/ EDIT PRODUCT /-------------*/

  return (
    <div>
      <h1>ProductListReactQuery</h1>
      <div className="overflow-x-auto">
        {error && <div className="p-3 text-red-500">{error.message}</div>}

        <table className="min-w-full bg-white border border-gray-100 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3 border-b">#ID</th>
              <th className="px-4 py-3 border-b">Thumb</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Price</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="py-5 text-center" colSpan={5}>
                  Loading...
                </td>
              </tr>
            ) : (
              <>
                {productResponse.data.data.map((item: IProduct) => (
                  <tr
                    key={item.id}
                    className="text-sm hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2 border-b">{item.id}</td>
                    <td className="px-4 py-2 border-b">
                      <img
                        height={40}
                        width={40}
                        src={item.thumbnail}
                        alt={item.product_name}
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{item.product_name}</td>
                    <td className="px-4 py-2 border-b">{item.price}</td>
                    <td className="px-4 py-2 border-b">
                      <div className="flex gap-x-2">
                        <button onClick={() => setSelected(item)}>Edit</button>
                        <button
                          onClick={() => {
                            mutationDeleteProduct.mutate({ id: item.id });
                          }}
                          className="btn_delete"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {/* MODAL EDIT */}
      {selected !== null && (
        <Modal
          isOpen={selected !== null}
          onClose={() => {
            setSelected(null);
          }}
          title="Edit Product"
        >
          <UpdateFormProductrReactQuery
            onUpdateSuccess={() => setSelected(null)}
            product={selected}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductListReactQuery;
