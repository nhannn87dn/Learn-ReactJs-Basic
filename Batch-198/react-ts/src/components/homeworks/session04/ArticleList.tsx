import styles from "./ArticleList.module.css";

const articles = [
  {
    id: 1,
    title: "title 1",
    view: 140,
    thumbnail: "images/thumb-1.jpg",
  },
  {
    id: 2,
    title: "title 2",
    view: 140,
    thumbnail: "images/thumb-2.jpg",
  },
  {
    id: 3,
    title: "title 3",
    view: 140,
    thumbnail: "images/thumb-3.jpg",
  },
  {
    id: 4,
    title: "title 4",
    view: 40,
    thumbnail: "images/thumb-4.jpg",
  },
];

type TArticleProps = {
  id: number;
  title: string;
  view: number;
  thumbnail: string;
};

const Article = ({ article }: { article: TArticleProps }) => {
  return (
    <article>
      <div className={styles.thumbnail}>
        <img src={article.thumbnail} alt={article.title} />
      </div>
      <h3>{article.title}</h3>
      <p>{article.view} lượt xem</p>
    </article>
  );
};

const ArticleList = () => {
  return (
    <div className="article_list_wrapper">
      <div className={styles.article_list_header}>
        <h2>Tin mới</h2>
        <div className="article_list_extra">
          <a href="#">Xem thêm</a>
        </div>
      </div>
      <div className={styles.article_list_content}>
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default ArticleList;
