import { Link, Outlet } from "react-router-dom";
import { Row, Col } from "antd";

const CustomerPage = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} md={8} lg={4}>
        <div className="sidebar bg-slate-200">
          <ul>
            <li>
              <Link to="/customers">Dashboard</Link>
            </li>
            <li>
              <Link to="/customers/profile">Profile</Link>
            </li>
            <li>
              <Link to="/customers/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={24} md={16} lg={20} className="main-content">
        <Outlet />
      </Col>
    </Row>
  );
};

export default CustomerPage;
