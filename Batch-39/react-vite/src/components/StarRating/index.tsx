import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StartRating = () => {
  const stars = [1, 2, 3, 4, 5];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  console.log("<<=== 🚀 current  ===>>", currentIndex);

  return (
    <div className="flex">
      {stars.map((star, index) => {
        return (
          <div key={index}>
            {currentIndex >= star ? (
              <FaStar
                onMouseEnter={() => {
                  console.log("re chuot len ", star);
                  if (currentIndex == star) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(star);
                  }
                }}
                onClick={() => {
                  console.log(star);
                  if (currentIndex == star) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(star);
                  }
                }}
              />
            ) : (
              <FaRegStar
                onMouseEnter={() => {
                  console.log("re chuot len ", star);
                  if (currentIndex == star) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(star);
                  }
                }}
                onClick={() => {
                  console.log(star);
                  if (currentIndex == star) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(star);
                  }
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StartRating;
