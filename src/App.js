import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import axios from "axios";

import {
  RiSkipBackLine,
  RiPlayCircleLine,
  RiSkipForwardLine,
} from "react-icons/ri";

function App() {
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    // Fetch available languages and their resources
    async function fetchLanguages() {
      try {
        const response = await axios.get(
          "https://mp3quran.net/api/v3/languages"
        );
        const languagesData = response.data.language;
        setLanguages(languagesData);
      } catch (error) {
        console.error("An error occurred while fetching languages:", error);
      }
    }

    fetchLanguages();
  }, []);

  // Function to handle language selection
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Function to fetch Quran resources based on selected language
  const fetchQuranResources = () => {
    if (selectedLanguage) {
      const surahUrl = selectedLanguage.surah;
      const rewayahUrl = selectedLanguage.rewayah;
      const recitersUrl = selectedLanguage.reciters;
      const radiosUrl = selectedLanguage.radios;
      const tafasirUrl = selectedLanguage.tafasir;

      // Make requests to the above URLs and handle the data as needed
      // Example:
      // axios.get(surahUrl).then((response) => {
      //   // Handle Quran chapters data in the selected language
      // });

      // You can make similar requests for other Quran resources.
    }
  };

  const handleButtonClick1 = () => {
    console.log("Button 1 was clicked");
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 was clicked");
  };

  const handleButtonClick3 = () => {
    console.log("Button 3 was clicked");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Language selection dropdown */}
      <select onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="" disabled selected>
          Select Language
        </option>
        {languages.map((language) => (
          <option key={language.id} value={language}>
            {language.native}
          </option>
        ))}
      </select>

      <div className="flex">
        <Button handleClick={handleButtonClick1}>
          <RiSkipBackLine className="inline-block mr-2 text-2xl" />
          rewind
        </Button>
        <Button handleClick={handleButtonClick2}>
          play
          <RiPlayCircleLine className="inline-block ml-3 text-2xl" />
        </Button>
        <Button handleClick={handleButtonClick3}>
          Skip
          <RiSkipForwardLine className="inline-block ml-3 text-2xl" />
        </Button>
      </div>

      {/* Rest of your UI */}
      <audio controls className="audio-player px-4 py-2 m-3">
        <source type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* ... (rest of your UI components) */}
    </div>
  );
}

export default App;
