import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Cột 1: Thông tin thương hiệu */}
        <div className={styles.column}>
          <h3 className={styles.logo}>EcoShop</h3>
          <p className={styles.description}>
            Nền tảng mua sắm trực tuyến hàng đầu, cung cấp các sản phẩm chất
            lượng cao với giá cả tốt nhất.
          </p>
        </div>

        {/* Cột 2: Danh mục sản phẩm */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Danh mục</h4>
          <ul className={styles.list}>
            <li>
              <a href="/category/nam">Thời trang Nam</a>
            </li>
            <li>
              <a href="/category/nu">Thời trang Nữ</a>
            </li>
            <li>
              <a href="/category/phu-kien">Phụ kiện & Giày</a>
            </li>
            <li>
              <a href="/sale">Chương trình Khuyến mãi</a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Hỗ trợ khách hàng</h4>
          <ul className={styles.list}>
            <li>
              <a href="/tra-cuu">Tra cứu đơn hàng</a>
            </li>
            <li>
              <a href="/chinh-sach-doi-tra">Chính sách đổi trả</a>
            </li>
            <li>
              <a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a>
            </li>
            <li>
              <a href="/faq">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Thông tin liên hệ */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Liên hệ</h4>
          <p className={styles.contactItem}>Hotline: 1900 xxxx</p>
          <p className={styles.contactItem}>Email: cskh@ecoshop.com</p>
          <p className={styles.contactItem}>Địa chỉ: Quận 1, TP. Hồ Chí Minh</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} EcoShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
