import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";

const stars = [1, 2, 3, 4, 5];

const RankStars = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  console.log("currentIndex Star", currentIndex);

  const handeClick = (star: number) => {
    setCurrentIndex((prev) => {
      if (prev === star) {
        return 0;
      } else {
        return star;
      }
    });
  };
  return (
    <div className="my-10">
      <div className="flex">
        {stars.map((star) => {
          if (star > currentIndex) {
            return <GoStar key={star} onClick={() => handeClick(star)} />;
          } else {
            return <GoStarFill key={star} onClick={() => handeClick(star)} />;
          }
        })}
      </div>
    </div>
  );
};

export default RankStars;
