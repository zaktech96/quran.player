// import React, { useState, useRef, useEffect } from "react";

// function AudioPlayer({ audioSource }) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     const audio = audioRef.current;

//     if (audio) {
//       if (audio.paused) {
//         audio.play().then(() => {
//           setIsPlaying(true);
//         });
//       } else {
//         audio.pause();
//         setIsPlaying(false);
//       }
//     }
//   };

//   useEffect(() => {
//     const audio = audioRef.current;

//     audio.addEventListener("pause", () => {
//       setIsPlaying(false);
//     });

//     audio.addEventListener("play", () => {
//       setIsPlaying(true);
//     });

//     return () => {
//       audio.removeEventListener("pause", () => {
//         setIsPlaying(false);
//       });

//       audio.removeEventListener("play", () => {
//         setIsPlaying(true);
//       });
//     };
//   }, []);

//   return <div></div>;
// }

// export default AudioPlayer;

function AudioPlayer({ audioSource, isPlaying, customClassName }) {
  return (
    <audio controls className={`audio-player ${customClassName}`}>
      <source src={audioSource} type="audio/mpeg" />
      Your browser does not support the audio element.
      <button>{isPlaying ? "Pause" : "Play"}</button>
    </audio>
  );
}

export default AudioPlayer;
