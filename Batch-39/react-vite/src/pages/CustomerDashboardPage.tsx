import { Flex, Col, Row } from "antd";

const CustomerDashboardPage = () => {
  return (
    <div>
      <h1>CustomerDashboardPage</h1>
      <Flex vertical={false} gap={30}>
        <div style={{ width: "25%" }} className="bg-indigo-500">
          1
        </div>
        <div style={{ width: "25%" }} className="bg-indigo-500">
          2
        </div>
        <div style={{ width: "25%" }} className="bg-indigo-500">
          3
        </div>
        <div style={{ width: "25%" }} className="bg-indigo-500">
          4
        </div>
      </Flex>
      <h2>Gird</h2>
      <Row>
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
      </Row>
      <h1>Product List</h1>
      <Row gutter={[16, { xs: 8, sm: 10 }]}>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <div className="bg-indigo-500">1</div>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <div className="bg-indigo-500">1</div>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <div className="bg-indigo-500">1</div>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <div className="bg-indigo-500">1</div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerDashboardPage;
