import { Heart } from "lucide-react";
import styles from "./Video.module.css";

const videos = [
  {
    id: 1,
    title: "Title 1",
    description: "description 1",
    thumbnail: "images/thumb-1.jpg",
  },
  {
    id: 2,
    title: "Title 2",
    description: "description 2",
    thumbnail: "images/thumb-2.jpg",
  },
  {
    id: 3,
    title: "Title 3",
    description: "description 3",
    thumbnail: "images/thumb-3.jpg",
  },
  {
    id: 4,
    title: "Title 4",
    description: "description 4",
    thumbnail: "images/thumb-4.jpg",
  },
];

type TVideo = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

const VideoItem = ({ video }: { video: TVideo }) => {
  return (
    <div className={styles.video_item}>
      <div className={styles.thumbnail}>
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
        <div className={styles.like}>
          <Heart />
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <div className="video_list">
      <h2>5 Videos</h2>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default Videos;
