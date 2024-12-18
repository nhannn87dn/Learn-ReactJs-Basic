import React, { useState } from "react";

const photos = [
  {
    id: 1,
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202204/goods_img/xiaomi-redmi-note-11s-5g-G4305-1650508487726.jpg",
    alt: "Xiaomi Redmi Note ",
  },
  {
    id: 2,
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367782874.jpg",
    alt: "Xiaomi Redmi Note ",
  },
  {
    id: 3,
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg",
    alt: "Xiaomi Redmi Note ",
  },
];

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="my-5">
      <img height={200} width={200} src={photos[currentIndex].link} alt="" />
      <div className="flex gap-x-5">
        <button
          onClick={() => {
            setCurrentIndex((prev) => {
              /* Nếu đang là 0 thì ko trừ */
              if (prev === 0) {
                return prev;
              }
              return prev - 1;
            });
          }}
        >
          Prev
        </button>
        <button
          disabled={currentIndex === photos.length - 1}
          onClick={() => {
            setCurrentIndex((prev) => {
              /* Nếu đang là cuối thì ko cộng */
              if (prev === photos.length - 1) {
                return prev;
              }
              return prev + 1;
            });
          }}
        >
          Next
        </button>
      </div>
      <div className="thumbnail flex gap-x-3">
        {photos.map((photo) => (
          <img
            onMouseEnter={() => {
              console.log(photo.id);
              setCurrentIndex(photo.id - 1);
            }}
            key={photo.id}
            height={50}
            width={50}
            className={`border border-2 ${
              currentIndex === photo.id - 1
                ? "border-blue-500"
                : "border-gray-500"
            }`}
            src={photo.link}
            alt={photo.alt}
          />
        ))}
      </div>
    </div>
  );
}
