import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";

const photos = [
  {
    id: 1,
    url: "https://ecshopvietnam.com/ecshopstore/cdn/data/afficheimg/khuyen-mai-soc-gia-pha-kho-1615345359.jpg",
    alt: "hinh 1",
  },
  {
    id: 1,
    url: "https://ecshopvietnam.com/ecshopstore/cdn/data/afficheimg/tron-bo-camera-khuyen-mai-gia-soc-desktop-1615345346.png",
    alt: "hinh 2",
  },
];

const SimpleGallery = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="simple-gallery">
      <div className="photo w-75 h-auto">
        <img src={photos[index].url} alt={photos[index].alt} />
      </div>
      <div className="actions flex gap-x-5">
        <span
          onClick={() => {
            setIndex(index - 1);
          }}
          className="arrow-left"
        >
          <CircleChevronLeft />
        </span>
        <span
          onClick={() => {
            setIndex(index + 1);
          }}
          className="arrow-right"
        >
          <CircleChevronRight />
        </span>
      </div>
    </div>
  );
};

export default SimpleGallery;
