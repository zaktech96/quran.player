import { useState, useRef, useEffect } from "react";

function AudioPlayer({ audioSource }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    // Add an event listener to handle when the audio is paused
    audio.addEventListener("pause", () => {
      setIsPlaying(false);
    });

    // Add an event listener to handle when the audio is playing
    audio.addEventListener("play", () => {
      setIsPlaying(true);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      audio.removeEventListener("pause");
      audio.removeEventListener("play");
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={audioSource} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default AudioPlayer;
