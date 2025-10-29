interface ArticleItemProps {
  title: string;
  time: string;
  thumb: string;
}
const ArticleItem = ({ title, time, thumb }: ArticleItemProps) => {
  return (
    <div className="article-item flex-1">
      <div className="article-thumb rounded-lg overflow-hidden">
        <img src={thumb} alt={title} />
      </div>
      <h3 className="article-title my-2">{title}</h3>
      <div className="article-time text-gray-600">{time}</div>
    </div>
  );
};

const Session4Exercise6 = () => {
  const articles = [
    {
      id: 1,
      title:
        "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
      time: "2 hours ago",
      thumb: "./images/thumb-1.jpg",
    },
    {
      id: 2,
      title:
        "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
      time: "3 hours ago",
      thumb: "./images/thumb-2.jpg",
    },
    {
      id: 3,
      title:
        "Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720",
      time: "4 hours ago",
      thumb: "./images/thumb-3.jpg",
    },
    {
      id: 4,
      title:
        "Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
      time: "5 hours ago",
      thumb: "./images/thumb-4.jpg",
    },
  ];

  return (
    <div className="new-articles py-2 px-2">
      <div className="article-header flex justify-between items-center mb-4">
        <h2 className="article-title uppercase">New Articles</h2>
        <div className="article-extra">
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>
      </div>
      <div className="article-list flex gap-x-[20px]">
        {articles.length > 0 &&
          articles.map((article) => {
            return (
              <ArticleItem
                key={article.id}
                title={article.title}
                time={article.time}
                thumb={article.thumb}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Session4Exercise6;
