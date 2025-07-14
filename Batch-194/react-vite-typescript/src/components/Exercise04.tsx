import React, { useState } from "react";

const photos = [
  { id: 1, src: "images/1.jpeg", alt: "" },
  { id: 2, src: "images/2.jpeg", alt: "" },
  { id: 3, src: "images/3.jpeg", alt: "" },
  { id: 4, src: "images/4.jpeg", alt: "" },
];

const Exercise04 = () => {
  const [currenIndex, setCurrentIndex] = useState(0);

  const onHandleNext = () => {
    setCurrentIndex((prev) => {
      if (currenIndex + 1 === photos.length) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const onHandlePrev = () => {
    setCurrentIndex((prev) => {
      if (currenIndex === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div>
      <img src={photos[currenIndex].src} alt={photos[currenIndex].alt} />
      <div className="flex gap-x-2">
        <button onClick={onHandlePrev}>Prev</button>
        <button onClick={onHandleNext}>Next</button>
      </div>
    </div>
  );
};

export default Exercise04;
