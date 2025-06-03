import React from "react";

const withPermissions = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = true; // Giả sử người dùng đã đăng nhập
      if (!isAuthenticated) {
        return <div>Bạn cần đăng nhập để truy cập.</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withPermissions;
