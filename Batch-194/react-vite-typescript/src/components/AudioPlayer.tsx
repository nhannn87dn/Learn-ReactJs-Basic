import React, { useRef } from "react";

function AudioPlayer() {
  const audioRef = useRef(null);

  // Hàm phát audio
  const handlePlay = () => {
    audioRef.current.play();
  };

  // Hàm tạm dừng audio
  const handlePause = () => {
    audioRef.current.pause();
  };

  // Hàm thay đổi âm lượng
  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
