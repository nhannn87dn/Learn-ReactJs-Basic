import { useState } from "react";

const SimpleGallery = () => {
  const photos = [
    { id: 1, url: "./images/thumb-1.jpg" },
    { id: 2, url: "./images/thumb-2.jpg" },
    { id: 3, url: "./images/thumb-3.jpg" },
    { id: 4, url: "./images/thumb-4.jpg" },
  ];
  const [currentPhoto, setCurrentPhoto] = useState(0);
  return (
    <div>
      <h2 className="font-bold my-5">SimpleGallery</h2>
      <div className="gallery">
        <img src={photos[currentPhoto].url} alt="" />
        <div className="act">
          <button
            onClick={() => {
              //setCurrentPhoto(n => n + 1)
              setCurrentPhoto((prev) => {
                console.log("<<=== 🚀 prev,  ===>>", prev, photos.length);
                if (prev === 0) {
                  return photos.length - 1;
                }
                return prev - 1;
              });
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              //setCurrentPhoto(n => n + 1)
              setCurrentPhoto((prev) => {
                console.log("<<=== 🚀 prev,  ===>>", prev, photos.length);
                if (prev === photos.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleGallery;
