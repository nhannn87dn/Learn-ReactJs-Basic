import React from "react";

const GallerySimple = () => {
  const photos = [
    {
      id: 1,
      title: "Photo 1",
      url: "images/thumb-1.jpg",
    },
    {
      id: 2,
      title: "Photo 2",
      url: "images/thumb-2.jpg",
    },
    {
      id: 3,
      title: "Photo 3",
      url: "images/thumb-3.jpg",
    },
    {
      id: 4,
      title: "Photo 4",
      url: "images/thumb-4.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <div>
      <h2>GallerySimple</h2>
      <div>
        <img src={photos[currentIndex].url} alt={photos[currentIndex].title} />
        <button
          onClick={() => {
            setCurrentIndex((prev) => {
              if (prev - 1 < 0) {
                return 0;
              }
              return prev - 1;
            });
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setCurrentIndex((prev) => {
              if (prev + 1 >= photos.length) {
                return prev;
              }
              return prev + 1;
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GallerySimple;
