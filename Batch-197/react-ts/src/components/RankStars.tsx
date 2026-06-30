import { Star } from "lucide-react";
import { useState } from "react";

const RankStars = () => {
  const stars = [1, 2, 3, 4, 5];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  console.log("<<=== 🚀 currentIndex ===>>", currentIndex);
  return (
    <div className="star-list flex">
      {stars.map((value, index) => {
        return (
          <Star
            onClick={() => {
              console.log("index", index, "value", value);
              setCurrentIndex(value);
            }}
            key={index}
            color={value > currentIndex ? "#000" : "yellow"}
          />
        );
      })}
    </div>
  );
};

export default RankStars;
