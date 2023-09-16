// Import the Button component from the correct path
import Reciters from "./components/Reciters";
import List from "./components/List";
import Button from "./components/Button";

// import ForestImage from "./Forest.jpg";
// Import the RiPlayCircleFill icon from react-icons/ri
import {
  RiSkipBackLine,
  RiPlayCircleLine,
  RiSkipForwardLine,
} from "react-icons/ri";

function App() {
  const handleClick = () => {
    console.log("played");
  };
  // Define a click handler function for the first button
  const handleButtonClick1 = () => {
    console.log("Button 1 was clicked"); // Log a message to the console when the button is clicked
  };

  // Define a click handler function for the second button
  const handleButtonClick2 = () => {
    console.log("Button 2 was clicked"); // Log a message to the console when the button is clicked
  };

  // Define a click handler function for the third button
  const handleButtonClick3 = () => {
    console.log("Button 3 was clicked"); // Log a message to the console when the button is clicked
  };

  // Render the App component
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Audio player */}
      <audio
        handleClick={handleClick}
        controls
        className=" audio-player px-4 py-2 m-3"
      >
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex">
        {/* Render the first Button component and pass the click handler function */}
        <Button handleClick={handleButtonClick1}>
          <RiSkipBackLine className="inline-block mr-2 text-2xl" />
          rewind
        </Button>

        {/* Render the second Button component and include the RiPlayCircleFill icon */}
        <Button handleClick={handleButtonClick2}>
          play
          {/* Render the RiPlayCircleFill icon with inline-block display, margin, and text size */}
          <RiPlayCircleLine className="inline-block ml-3 text-2xl" />
        </Button>

        {/* Render the third Button component and pass the click handler function */}
        <Button handleClick={handleButtonClick3}>
          Skip
          <RiSkipForwardLine className="inline-block ml-3 text-2xl" />
        </Button>
      </div>
      <Reciters />
      {/* Audio player */}
    </div>
  );
}
// Export the App component
export default App;
