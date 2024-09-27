import React from "react";

const photos = [
  {
    id: 1,
    name: "banner 1",
    link: "https://maymaymymy.com/cdn/data/afficheimg/khuyen-mai-soc-gia-pha-kho-1726289233.png",
  },
  {
    id: 2,
    name: "banner 2",
    link: "https://maymaymymy.com/cdn/data/afficheimg/may-may-my-my-1726289217.png",
  },
];

const CarouselSimple = () => {
  const [currenIndex, setCurrentIndex] = React.useState(0);

  console.log(currenIndex);
  return (
    <div>
      <h3>CarouselSimple</h3>
      <img src={photos[currenIndex].link} alt="" />
      <div className="flex justify-between">
        <button
          onClick={() => {
            setCurrentIndex((currenIndex) => {
              if (currenIndex === 0) {
                return currenIndex;
              }
              return currenIndex - 1;
            });
          }}
          className="btn btn-default "
        >
          Prev
        </button>
        <button
          onClick={() => {
            setCurrentIndex((currenIndex) => {
              if (currenIndex + 1 === photos.length) {
                return currenIndex;
              }
              return currenIndex + 1;
            });
          }}
          className="btn btn-default "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselSimple;
