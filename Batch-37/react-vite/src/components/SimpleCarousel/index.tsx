import React from "react";

const photos = [
  {
    id: 1,
    name: "Hình 1",
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202204/goods_img/xiaomi-redmi-note-11s-5g-G4305-1650508487726.jpg",
  },
  {
    id: 2,
    name: "Hình 2",
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367782874.jpg",
  },
  {
    id: 3,
    name: "Hình 3",
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg",
  },
  {
    id: 4,
    name: "Hình 4",
    link: "https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860405.jpg",
  },
];

const totalRecords = photos.length; //=> 4

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (currentIndex === 0) {
        return currentIndex;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      console.log(currentIndex + 1, totalRecords);
      if (currentIndex >= totalRecords - 1) {
        return currentIndex;
      }
      return prev + 1;
    });
  };

  console.log(
    "<<=== 🚀 currentIndex Photo ===>>",
    currentIndex + 1,
    totalRecords
  );
  return (
    <div className="my-5">
      <div className="show w-[400px] relative">
        <img
          className="w-auto h-full"
          src={photos[currentIndex].link}
          alt={photos[currentIndex].name}
        />
        <div className="controls">
          <button onClick={handlePrev} className="btn">
            Prev
          </button>
          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
