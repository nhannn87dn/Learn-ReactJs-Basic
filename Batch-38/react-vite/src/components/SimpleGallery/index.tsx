import React, { useState } from "react";

const photos = [
  {
    id: 1,
    alt: "",
    link: "https://xiaomi.ngocnguyen.vn/cdn/data/afficheimg/apple-watch-1701948568.jpg",
  },
  {
    id: 2,
    alt: "",
    link: "https://xiaomi.ngocnguyen.vn/cdn/data/afficheimg/iphone-15-pro-max-1701948578.jpg",
  },
  {
    id: 3,
    alt: "",
    link: "https://xiaomi.ngocnguyen.vn/cdn/data/afficheimg/macbook-ari-m1-1701948636.jpg",
  },
  {
    id: 4,
    alt: "",
    link: "https://xiaomi.ngocnguyen.vn/cdn/data/afficheimg/imac-1701948738.jpg",
  },
];

const totalPhoto = photos.length;

const SimpleGallery = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="gallery">
      <img src={photos[current].link} alt="" />
      <button
        onClick={() => {
          setCurrent((prev) => {
            if (current === 0) {
              return prev;
            }
            return prev - 1;
          });
        }}
        className="btn"
      >
        Prev
      </button>
      <button
        onClick={() => {
          setCurrent((prev) => {
            if (current === totalPhoto - 1) {
              return prev;
            }
            return prev + 1;
          });
        }}
        className="btn"
      >
        Next
      </button>
    </div>
  );
};

export default SimpleGallery;
