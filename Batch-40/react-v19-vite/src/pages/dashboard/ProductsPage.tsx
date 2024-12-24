import { useEffect, useState } from "react";
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
export function ProductsPage() {
  //Bước 1: Khai báo state
  const [products, setProducts] = useState<IProduct[]>([]);
  const [resFresh, setResFresh] = useState<number>(0);
  const [messageApi, contextHolder] = message.useMessage();
  //Bước 2: Lấy dữ liệu từ API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log("<<=== 🚀 data ===>>", data);
      //Bước 3: Cập nhật state
      setProducts(data);
    };
    //Gọi hàm fetchProducts
    fetchProducts();
  }, [resFresh]);
  //Bước 4: Render dữ liệu
  console.log("<<=== 🚀 products ===>>", products);

  //------EDIT PRODUCT ------///
  const [formUpdate] = Form.useForm();
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const handleModalEditOk = () => {
    //Submit form update trong modal edit
    formUpdate.submit();
  };

  const handleModalEditCancel = () => {
    setIsModalEditOpen(false);
  };

  /* Khi submit form thành công */
  const onFinishUpdate: FormProps<FieldType>["onFinish"] = async (values) => {
    //gọi api
    console.log("Success:", values);
    const { id, ...payload } = values;
    console.log("<<=== 🚀 id, payload ===>>", id, payload);
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), //biến payload thành chuỗi JSON
      }
    );
    const data = await response.json();
    // Cập nhật state
    if (data) {
      // Làm tươi danh sách với random number
      setResFresh(Math.random());
      // Tạo thông báo
      messageApi.open({
        type: "success",
        content: "Update product success",
      });
      //Tắt modal
      setIsModalEditOpen(false);
    }
  };
  /* Khi submit form thấy bại */
  const onFinishFailedUpdate: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  //------ADD PRODUCT ------///
  const [formAdd] = Form.useForm();
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);

  const handleModalAddOk = () => {
    formAdd.submit();
  };

  const handleModalAddCancel = () => {
    setIsModalAddOpen(false);
  };

  /* Khi submit form thành công */
  const onFinishAdd: FormProps<FieldType>["onFinish"] = async (values) => {
    //gọi api
    console.log("Success:", values);
    const payload = {
      ...values, //only title and price
      categoryId: 1,
      description: "A description",
      images: ["https://placeimg.com/640/480/any"],
    };
    const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), //biến payload thành chuỗi JSON
    });
    const data = await response.json();
    console.log("<<=== 🚀 data ===>>", data);
    //Chắc chắn trạng thái thêm mới thành công
    if (response.status === 201) {
      // Làm tươi danh sách với random number
      setResFresh(Math.random());
      // Tạo thông báo
      messageApi.open({
        type: "success",
        content: "Add product success",
      });
      //Tắt modal
      setIsModalAddOpen(false);
    }
  };
  /* Khi submit form thấy bại */
  const onFinishFailedAdd: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

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
              //đổ dữ liệu vào form
              formUpdate.setFieldsValue(record);
              // Mở modal edit
              setIsModalEditOpen(true);
            }}
            type="dashed"
          >
            <EditOutlined /> Edit
          </Button>
          <Button
            onClick={async () => {
              console.log("Xóa ID:", record.id);
              // Xóa dữ liệu từ products
              const response = await fetch(
                `https://api.escuelajs.co/api/v1/products/${record.id}`,
                {
                  method: "DELETE",
                }
              );
              const data = await response.json();
              if (data) {
                // Làm tươi danh sách với random number
                setResFresh(Math.random());

                // Tạo thông báo
                messageApi.open({
                  type: "success",
                  content: "Delete product success",
                });
              }
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
    <main>
      {contextHolder}
      <div className="flex justify-between items-center">
        <h1>ProductsPage</h1>
        <div className="actions">
          <Button
            onClick={() => {
              console.log("Add Product");
              setIsModalAddOpen(true);
            }}
            type="primary"
          >
            Add Product
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={products} />
      {/* BEGIN MODAL EDIT */}
      <Modal
        title="Edit Product"
        open={isModalEditOpen}
        onOk={handleModalEditOk}
        onCancel={handleModalEditCancel}
      >
        <Form
          name="formUpdate"
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinishUpdate}
          onFinishFailed={onFinishFailedUpdate}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> name="id" hidden={true}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* END MODAL EDIT */}

      {/* BEGIN MODAL ADD */}
      <Modal
        title="Add Product"
        open={isModalAddOpen}
        onOk={handleModalAddOk}
        onCancel={handleModalAddCancel}
      >
        <Form
          name="formAdd"
          form={formAdd}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinishAdd}
          onFinishFailed={onFinishFailedAdd}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* END MODAL ADD */}
    </main>
  );
}
