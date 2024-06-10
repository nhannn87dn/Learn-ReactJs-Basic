import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Space,
  Pagination,
  Form,
  Input,
  Modal,
  message,
} from "antd";
import type { TableProps, PaginationProps, FormProps } from "antd";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
/**
 * TypeScript cho data đưa vào table
 */
interface DataType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
  };
  image?: string;
  images: string[];
  categoryId?: number;
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

// const data: DataType[] = [
//   {
//     id: 1,
//     title: "title 1",
//     price: 100,
//     description: "description 1",
//   },
//   {
//     id: 2,
//     title: "title 2",
//     price: 200,
//     description: "description 2",
//   },
// ];

const ProductsReactQuery = () => {
  //Lay search params
  const location = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const page_str = params.get("page");
  const page = page_str ? parseInt(page_str) : 1; //Mac dinh page = 1
  const limit = 10;
  const offset = (page - 1) * limit;

  useEffect(() => {
    console.log("<<=== 🚀 page ===>>", page);
    if (page === 1) {
      navigate("/products");
    }
  }, [page]);

  console.log(location);
  console.log(page_str);

  const [formCreate] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const getProducts = async () => {
    //trả về kết quả cuối cùng cần lấy
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`
    );
    return response.data;
  };
  /*
  Sử dụng hook useQuery để gọi API với phương thức GET
  useQuery gọi hàm getProducts để fetch API, sau đó cache lại với tên bộ 
  nhớ cache được khai báo ở queryKey
  --------------------
  isLoading; trạng thái chờ
  error: là lỗi,
  data: chứa dữ liệu API trả về thành công 

  */
  const { isLoading, isError, error, data } = useQuery<DataType[], Error>({
    queryKey: ["products", page], // Tên bộ nhớ cache, không trùng lặp
    queryFn: getProducts, // Hàm fetch API, có return
    enabled: true, // Cho phép gọi API hay là không, false là chặn, true là gọi API
  });

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  const queryClient = useQueryClient();
  /**
   * FORM THÊM MỚI
   * @param values
   */

  const createProduct = async (body: FieldType) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products/",
      body
    );
    return response.data;
  };

  const createProductMutation = useMutation({
    mutationFn: createProduct, //hàm fetch API với method POST
    //Tracking khi thành công (onSuccess) thì cần làm gì đó tiếp theo
    onSuccess: () => {
      console.log("Đã thành công !");
      // Để làm tươi lại bộ nhớ cache có key là products
      //Thì bạn sẽ thấy danh sách sẽ được cập nhật tự động
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //reset form
      formCreate.resetFields();
      //Hiển thị message thành công
      messageApi.open({
        type: "success",
        content: "Thêm mới thành công !",
      });
    },
  });

  /* Khi submit form thành công */
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    //gọi api
    values = { ...values, images: values.image ? [values.image] : [] };
    createProductMutation.mutate(values);
  };
  /* Khi submit form thấy bại */
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  //UPDATE
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  //Đầu vào nên là một object
  const updateProduct = async (body: FieldType) => {
    const { id, ...payloads } = body;
    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      payloads
    );
    return response.data;
  };

  const updateProductMutation = useMutation({
    mutationFn: updateProduct, //hàm fetch API với method POST
    //Tracking khi thành công (onSuccess) thì cần làm gì đó tiếp theo
    onSuccess: () => {
      console.log("Update thành công !");
      // Để làm tươi lại bộ nhớ cache có key là products
      //Thì bạn sẽ thấy danh sách sẽ được cập nhật tự động
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //reset form
      formUpdate.resetFields();
      //ẩn modal
      setIsModalUpdateOpen(false);
      //Hiển thị message thành công
      messageApi.open({
        type: "success",
        content: "Cập nhật thành công !",
      });
    },
  });

  const showModalUpdate = () => {
    setIsModalUpdateOpen(true);
  };

  const handleUpdateOk = () => {
    console.log("Submit form update");
    //Submit form
    formUpdate.submit();
  };

  const handleUpdateCancel = () => {
    setIsModalUpdateOpen(false);
    console.log("Cancel form update");
  };

  /* Khi submit form thành công */
  const onFinishUpdate: FormProps<FieldType>["onFinish"] = (values) => {
    //gọi api
    values = { ...values, images: values.image ? [values.image] : [] };
    console.log("Success:", values);
    updateProductMutation.mutate(values);
  };
  /* Khi submit form thấy bại */
  const onFinishFailedUpdate: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  ///XÓA

  //Đầu vào nên là một object
  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  };

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct, //hàm fetch API với method POST
    //Tracking khi thành công (onSuccess) thì cần làm gì đó tiếp theo
    onSuccess: () => {
      console.log("Delete thành công !");
      // Để làm tươi lại bộ nhớ cache có key là products
      //Thì bạn sẽ thấy danh sách sẽ được cập nhật tự động
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //Hiển thị message thành công
      messageApi.open({
        type: "success",
        content: "Xóa thành công !",
      });
    },
  });

  /**
   * Cấu hình các cột cần hiển thị ra table
   */
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => {
        return <Link to={`/products/${record.id}`}>{record.title}</Link>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, records) => {
        return (
          <Space>
            <Button
              onClick={() => {
                showModalUpdate();
                console.log(records);
                //đưa vào form
                //Thay đổi lại records, để phù với đầu vào của form
                records = {
                  ...records,
                  image: records.images[0],
                  categoryId: records.category.id,
                };
                console.log(
                  "<<=== 🚀records  ===>>",
                  records,
                  records.category.id
                );
                formUpdate.setFieldsValue(records);
              }}
              type="dashed"
            >
              Edit
            </Button>
            <Button
              // loading={deleteProductMutation.isPending}
              onClick={() => {
                console.log(
                  "Xóa id : ",
                  records.id,
                  deleteProductMutation.data
                );
                //gọi API xóa
                deleteProductMutation.mutate(records.id);
              }}
              type="dashed"
              danger
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        form={formCreate}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

        <Form.Item<FieldType> label="Description" name="description">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Category ID" name="categoryId">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Images" name="image">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
      <h2>Danh sách sản phẩm</h2>
      {isError && error ? <p>An error has occurred: {error.message}</p> : null}
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
      <Pagination
        style={{ marginTop: 30 }}
        onChange={(page, pageSize) => {
          console.log(page, pageSize);
          //tao search string page=1
          navigate(`/products/?page=${page}`);
        }}
        showSizeChanger={false}
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={100} //API phai tra ve con so nay de dien vao day
      />
      {/* BEGIN MODAL UPDATE */}
      <Modal
        title="Basic Modal"
        open={isModalUpdateOpen}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
      >
        <Form
          name="formUpdate"
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
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

          <Form.Item<FieldType> label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Category ID" name="categoryId">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Images" name="image">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> name="id" hidden={true}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* END MODAL UPDATE */}
    </>
  );
};

export default ProductsReactQuery;
