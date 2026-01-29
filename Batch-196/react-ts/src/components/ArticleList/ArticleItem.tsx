import styles from "./ArticleItem.module.css";

type ArticleItemProps = {
  thumb: string;
  title: string;
  addTime: string;
};

const ArticleItem = ({ thumb, title, addTime }: ArticleItemProps) => {
  return (
    <article className={styles.article_item}>
      <div className={styles.article_thumb}>
        <img src={thumb} alt="" />
      </div>
      <h3 className="article_title">{title}</h3>
      <time className="article_addtime">{addTime}</time>
    </article>
  );
};

export default ArticleItem;
