import React from "react";
import { LuPause, LuPlay } from "react-icons/lu";

function MusicPlay() {
  //const status = "play";
  const [status, setStatus] = React.useState("stop");
  return (
    <div
      onClick={() => {
        console.log("Click vào nút");
        setStatus((prev) => {
          if (prev == "stop") {
            return "play";
          } else {
            return "stop";
          }
        });
      }}
      className="flex justify-center items-center cursor-pointer w-[40px] h-[40px] bg-violet-500 text-white hover:bg-violet-600 rounded-full"
    >
      {status === "play" ? <LuPause /> : <LuPlay />}
    </div>
  );
}

export default MusicPlay;
