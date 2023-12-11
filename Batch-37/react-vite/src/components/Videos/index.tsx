import { FaHeart } from "react-icons/fa";
import "./Videos.css";
type TSingleVideo = {
  thumb: string;
  title: string;
  desc: string;
};

const SingleVideo = ({ thumb, title, desc }: TSingleVideo) => {
  return (
    <li className="video_item">
      <div className="thumb">
        <img src={thumb} alt={title} />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="icon">
          <FaHeart />
        </div>
      </div>
    </li>
  );
};

const Videos = () => {
  return (
    <ul>
      <SingleVideo
        thumb={"https://react.dev/images/home/videos/documentary.webp"}
        title={"Video 1 - Title"}
        desc={"Video 1 desc"}
      />
      <SingleVideo
        thumb={"https://react.dev/images/home/videos/rethinking.jpg"}
        title={"Video 2 - Title"}
        desc={"Video 2 desc"}
      />
    </ul>
  );
};

export default Videos;
