import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Pagination,
  Popconfirm,
  Space,
  Table,
  Tag,
} from "antd";
import type { FormProps, TableProps } from "antd";
import axios from "axios";
import { useState } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
  slug: string;
  description: string;
}

const API_URL = "https://api.escuelajs.co/api";

//Service gọi API lấy danh sách sản phẩm
const getProductList = async ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) => {
  const response = await axios.get(
    `${API_URL}/v1/products?offset=${(page - 1) * limit}&limit=${limit}`
  );
  //bắt buộc hàm này phải return về data
  return response.data;
};

//Service gọi API xóa sản phẩm
const deleteProductId = async (productId: number) => {
  const response = await axios.delete(`${API_URL}/v1/products/${productId}`);
  return response.data;
};

//Service gọi API cập nhật sản phẩm
const updateProductById = async ({
  id,
  payload,
}: {
  id: number;
  payload: unknown;
}) => {
  const response = await axios.put(`${API_URL}/v1/products/${id}`, payload);
  return response.data;
};

//Service gọi API thêm sản phẩm
const addProduct = async (payload: unknown) => {
  const response = await axios.post(`${API_URL}/v1/products/`, payload);
  return response.data;
};

const ExampleReactQuery = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();
  /** PRODUCT LIST */
  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductList({ page: 1, limit: 10 }),
  });
  console.log("<<=== 🚀 queryProducts.data ===>>", queryProducts.data);
  /** END PRODUCT LIST */

  /** DELETE PRODUCT */
  const mutationDeleteProduct = useMutation({
    mutationFn: deleteProductId,
    onSuccess: () => {
      // làm tươi lại danh sách sản phẩm
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //thông báo
      messageApi.open({
        type: "success",
        content: "Delete product successfully!",
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Delete product failed!",
      });
    },
  });
  /** END DELETE PRODUCT */

  /** EDIT PRODUCT */
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [formEdit] = Form.useForm();
  type FieldType = {
    id?: number;
    title?: string;
    price?: number;
    slug?: string;
    description?: string;
  };

  const mutationEditProduct = useMutation({
    mutationFn: updateProductById,
    onSuccess: () => {
      // làm tươi lại danh sách sản phẩm
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //thông báo
      messageApi.open({
        type: "success",
        content: "Edit product successfully!",
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Edit product failed!",
      });
    },
  });
  //GỌI API EDIT Ở ĐÂY

  //Khi submit form edit thành công
  const onFinishEdit: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    //GỌI API EDIT Ở ĐÂY
    mutationEditProduct.mutate({
      id: values.id!, //id lấy từ form
      payload: {
        title: values.title,
        price: values.price,
        slug: values.slug,
        description: values.description,
      },
    });
  };

  //Khi submit form edit thất bại
  const onFinishEditFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  /** END EDIT PRODUCT */

  /** ADD PRODUCT */
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [formAdd] = Form.useForm();

  const mutationAddProduct = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      // làm tươi lại danh sách sản phẩm
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //thông báo
      messageApi.open({
        type: "success",
        content: "Add product successfully!",
      });
      //đóng modal add
      setIsModalAddOpen(false);
      //reset form add
      formAdd.resetFields();
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Add product failed!",
      });
    },
  });

  //Khi submit form add thành công

  const onFinishAdd: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    //GỌI API EDIT Ở ĐÂY
    mutationAddProduct.mutate({
      title: values.title,
      price: values.price,
      description: values.description,
      slug: values.slug,
      //thêm các trường còn thiếu nếu có
      categoryId: 30, //giả sử thêm vào category id =1
      images: ["https://placehold.co/600x400"],
    });
  };

  //Khi submit form add thất bại
  const onFinishAddFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const columns: TableProps<ProductType>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => <Tag color="blue">{category.name}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={async () => {
              //mở modal edit
              setIsModalEditOpen(true);
              //Đổ dữ liệu sản phẩm vào form edit
              formEdit.setFieldsValue({
                id: record.id,
                title: record.title,
                price: record.price,
                slug: record.slug,
                description: record.description,
              });
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => {
              console.log("Deleted", record.id);
              //call api xóa
              mutationDeleteProduct.mutate(record.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      {contextHolder}
      <Card
        title="Product List"
        extra={
          <>
            <Button
              type="primary"
              onClick={() => {
                setIsModalAddOpen(true);
              }}
            >
              Add Product
            </Button>
          </>
        }
      >
        <Table
          pagination={false}
          columns={columns}
          dataSource={queryProducts?.data || []}
        />
        <Flex
          justify="center"
          className="mt-4"
          style={{
            marginTop: 30,
          }}
        >
          <Pagination
            defaultCurrent={1}
            onChange={(page, pageSize) => {
              console.log("<<=== 🚀 page, pageSize ===>>", page, pageSize);
            }}
            total={50}
          />
        </Flex>
      </Card>
      {/* BEGIN EDIT PRODUCT HERE */}
      <Modal
        title="Edit Product"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalEditOpen}
        onOk={() => {
          //submit form edit
          formEdit.submit();
        }}
        onCancel={() => setIsModalEditOpen(false)}
        okText="Submit"
      >
        <Form<FieldType>
          form={formEdit}
          name="form-edit"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinishEdit}
          onFinishFailed={onFinishEditFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Slug"
            name="slug"
            rules={[{ required: true, message: "Please input the slug!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType> name="id">
            <Input type="hidden" />
          </Form.Item>
        </Form>
      </Modal>
      {/* END EDIT PRODUCT HERE */}

      {/* BEGIN ADD PRODUCT HERE */}
      <Modal
        title="Add Product"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalAddOpen}
        onOk={() => {
          //submit form add
          formAdd.submit();
        }}
        onCancel={() => setIsModalAddOpen(false)}
        okText="Submit"
      >
        <Form<FieldType>
          form={formAdd}
          name="form-add"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinishAdd}
          onFinishFailed={onFinishAddFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Slug"
            name="slug"
            rules={[{ required: true, message: "Please input the slug!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* END ADD PRODUCT HERE */}
    </div>
  );
};

export default ExampleReactQuery;
