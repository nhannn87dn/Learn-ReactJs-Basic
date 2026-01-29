import ArticleItem from "./ArticleItem";
import styles from "./ArticleList.module.css";

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title:
        "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
      thumb: "./images/thumb-1.jpg",
      addTime: "2021-06-15",
    },
    {
      id: 2,
      title:
        "Đánh giá chi tiết Samsung Galaxy A32 4G: Chiếc smartphone đáng mua phân khúc 6 triệu đồng",
      thumb: "./images/thumb-2.jpg",
      addTime: "2021-06-15",
    },
    {
      id: 3,
      title:
        "Đánh giá chi tiết Samsung Galaxy A32 4G: Chiếc smartphone đáng mua phân khúc 6 triệu đồng",
      thumb: "./images/thumb-3.jpg",
      addTime: "2021-06-15",
    },
    {
      id: 4,
      title:
        "Đánh giá chi tiết Samsung Galaxy A32 4G: Chiếc smartphone đáng mua phân khúc 6 triệu đồng",
      thumb: "./images/thumb-4.jpg",
      addTime: "2021-06-15",
    },
  ];

  return (
    <section className={styles.article_section}>
      <div className={styles.article_header}>
        <h2 className={styles.article_title}>Latest Articles</h2>
        <div className={styles.article_extra}>
          <a href="#" className={styles.article_link}>
            View All
          </a>
        </div>
      </div>
      <div className={styles.article_list}>
        {articles.length > 0 &&
          articles.map((article) => {
            return (
              <ArticleItem
                key={article.id}
                title={article.title}
                thumb={article.thumb}
                addTime={article.addTime}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ArticleList;
