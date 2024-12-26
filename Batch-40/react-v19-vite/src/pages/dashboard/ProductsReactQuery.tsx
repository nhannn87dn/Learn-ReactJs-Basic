import {
  Button,
  Space,
  Table,
  message,
  Modal,
  Form,
  FormProps,
  Input,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
}

type FieldType = {
  title: string;
  price: number;
  description: string;
  id: number;
  categoryId?: number;
  images: string[]; //mảng chứa các phần tử là chuỗi
  image?: string;
};
export default function ProductsReactQuery() {
  const [messageApi, contextHolder] = message.useMessage();
  /*=====// BEGIN GET DATA FROM API //=====*/
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    //Bắt buộc hàm này phải return về data để render ra giao diện
    return response.data;
  };
  const queryProducts = useQuery({
    queryKey: ["products"], //đặt tên cho bộ nhớ cache
    queryFn: fetchProducts,
  });
  /*=====// END GET DATA FROM API //=====*/

  /*=====// BEGIN DELETE PRODUCT //=====*/
  const queryClient = useQueryClient();
  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  };
  const mutationDeleteProduct = useMutation({
    mutationFn: deleteProduct,
    //Khi thực hiện mutation thành công thì thực hiện hàm này
    onSuccess: () => {
      // Làm tươi lại dữ liệu dựa vào key mà bạn đã đặt ở trên phần lấy danh sách
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //Hiển thị message thành công
      messageApi.open({
        type: "success",
        content: "Delete product success",
      });
    },
  });

  /*=====// END DELETE PRODUCT //=====*/

  /*=====// BEGIN CREATE PRODUCT //=====*/
  const createProduct = async (payload: any) => {
    const response = await axios.post(
      `https://api.escuelajs.co/api/v1/products`,
      payload
    );
    return response.data;
  };
  const mutationCreateProduct = useMutation({
    mutationFn: createProduct,
    //Khi thực hiện mutation thành công thì thực hiện hàm này
    onSuccess: () => {
      // Làm tươi lại dữ liệu dựa vào key mà bạn đã đặt ở trên phần lấy danh sách
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //Hiển thị message thành công
      messageApi.open({
        type: "success",
        content: "Create product success",
      });
    },
  });
  /*=====// END CREATE PRODUCT //=====*/

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record: IProduct) => (
        <Space size="middle">
          <Button
            onClick={() => {
              console.log("Edit ID:", record.id);
            }}
            type="dashed"
          >
            <EditOutlined /> Edit
          </Button>
          <Button
            onClick={async () => {
              console.log("Xóa ID:", record.id);
              //Gọi mutation để xóa sản phẩm
              mutationDeleteProduct.mutate(record.id);
            }}
            danger
            type="dashed"
          >
            <DeleteOutlined /> Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {contextHolder}
      <h1>ProductsReactQuery</h1>
      <button
        onClick={() => {
          //Demo với code cứng, thực tế phải lấy từ form
          mutationCreateProduct.mutate({
            title: "New Product xxx",
            price: 10,
            description: "A description",
            categoryId: 1,
            images: ["https://placeimg.com/640/480/any"],
          });
        }}
      >
        Create new Product
      </button>
      <Table
        loading={queryProducts.isLoading}
        columns={columns}
        dataSource={queryProducts.data || []} //nếu không có data thì trả về mảng rỗng
      />
    </div>
  );
}
