import { LuHeart } from "react-icons/lu";

const videos = [
  {
    id: 1,
    title: "React: The Documentary",
    desc: "The origin story of React",
    thumb: "https://react.dev/images/home/videos/documentary.webp",
  },
  {
    id: 2,
    title: "Rethinking Best Practices",
    desc: "Pete Hunt (2013)",
    thumb: "https://react.dev/images/home/videos/rethinking.jpg",
  },
  {
    id: 3,
    title: "React: The Documentary 3",
    desc: "The origin story of React 3",
    thumb: "https://react.dev/images/home/videos/documentary.webp",
  },
];

interface IVideoProps {
  data: {
    title: string;
    desc: string;
    thumb: string;
  };
}

const VideoItem = ({ data }: IVideoProps) => {
  return (
    <div className="item flex items-center gap-x-5">
      <div className="thumb w-[120px] h-[60px]">
        <img className="w-full h-auto" src={data.thumb} alt={data.title} />
      </div>
      <div className="content flex-1 flex items-center justify-between">
        <div className="content_wrapper">
          <h3 className="font-bold">{data.title}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="item_extra">
          <LuHeart />
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <div className="videos-list">
      <h2 className="font-bold text-xl">5 Videos</h2>
      <div className="videos flex flex-col gap-y-5">
        {videos.map((video) => {
          return <VideoItem key={video.id} data={video} />;
        })}
      </div>
    </div>
  );
};

export default Videos;
