import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Table,
  Tag,
  Col,
  Row,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold">LoginPage</h1>
      <button
        className="btn"
        onClick={() => {
          //nhảy về trang chủ
          navigate("/");
        }}
      >
        Return Home
      </button>

      <Button>Default</Button>
      <Button type="primary">Primary</Button>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />

      <h2>Register Form - Antd</h2>
      <Form layout="vertical" className="register_form">
        <Row>
          <Col span={12}>
            <Form.Item label="First Name">
              <Input placeholder="Please enter your first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Name">
              <Input placeholder="Please enter your last name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Phone">
              <Input placeholder="Please enter your phone" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email">
              <Input type="email" placeholder="Please enter your email" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Password Confirm"
              name="password_confirm"
              rules={[
                {
                  required: true,
                  message: "Please input your password_confirm!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="agree"
              rules={[
                {
                  required: true,
                  message: "Please input your checkbox!",
                },
              ]}
            >
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
