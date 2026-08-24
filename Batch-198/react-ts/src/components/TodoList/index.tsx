import React from "react";
import styles from "./TodoList.module.css";

const MOCK_TODOS = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
    userId: 152,
  },
  {
    id: 2,
    todo: "Memorize the items on a shopping list",
    completed: true,
    userId: 91,
  },
  {
    id: 3,
    todo: "Watch a classic movie or favorite film",
    completed: false,
    userId: 44,
  },
];

export const TodoList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appHeader}>
        <h1 className={styles.appTitle}>Quản Lý Công Việc</h1>
        <div className={styles.toolbar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Tìm kiếm tiêu đề hoặc User ID..."
            readOnly
          />
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            <span>+</span> Thêm Mới
          </button>
        </div>
      </div>

      <div className={styles.cardTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th} style={{ width: "60px" }}>
                ID
              </th>
              <th className={styles.th}>Nhiệm vụ (Todo)</th>
              <th className={styles.th}>User ID</th>
              <th className={styles.th}>Trạng thái</th>
              <th
                className={styles.th}
                style={{ width: "120px", textAlign: "right" }}
              >
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TODOS.map((item) => (
              <tr key={item.id} className={styles.tr}>
                <td className={styles.td}>
                  <strong>#{item.id}</strong>
                </td>
                <td className={styles.td}>{item.todo}</td>
                <td className={styles.td}>User #{item.userId}</td>
                <td className={styles.td}>
                  <span
                    className={`${styles.badge} ${
                      item.completed
                        ? styles.badgeCompleted
                        : styles.badgePending
                    }`}
                  >
                    {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
                  </span>
                </td>
                <td className={styles.td} style={{ textAlign: "right" }}>
                  <button className={`${styles.actionBtn} ${styles.btnEdit}`}>
                    Sửa
                  </button>
                  <button className={`${styles.actionBtn} ${styles.btnDelete}`}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
