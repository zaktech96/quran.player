import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ChapterShow from "./components/ChapterShow";
import ReciterShow from "./components/ReciterShow";
import Button from "./components/Button";
import AudioPlayer from "./components/AudioPlayer";

import axios from "axios";

import {
  RiSkipBackLine,
  RiPlayCircleLine,
  RiSkipForwardLine,
} from "react-icons/ri";

function App() {
  const [chapters, setChapters] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [audioSource, setAudioSource] = useState("your-audio-source.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    console.log("selected:", selectedReciter);
    async function fetchChapters() {
      try {
        const response = await axios.get(
            `https://api.quran.com/api/v4/chapter_recitations/${selectedReciter.id}?language=en`
        )
        // console.log(response.data)
        const chaptersData = response.data.chapters;
        setChapters(chaptersData);
      } catch (error) {
        console.error("An error occurred while fetching chapters:", error);
      }
    }
    fetchChapters();
  }, [selectedReciter]);

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
    <div>
      <SearchBar />
      <div className="flex justify-center items-center p-8 mt-16 font-bold">
        {selectedReciter ? "Selected Reciter: " + selectedReciter.name : "No Reciter Selected"}
      </div>
      <div className="flex flex-col justify-center items-center mt-32">
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
        {/* Render the AudioPlayer component with audioSource */}
        <div>
          <AudioPlayer audioSource={audioSource} />
        </div>
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
        {selectedReciter ? <ChapterShow setSelectedSurah={setSelectedSurah} selectedReciter={selectedReciter}/> : (
          <div>
            Please select a Reciter from the dropdown menu
          </div>
          )
        }
        <ReciterShow setSelectedReciter={setSelectedReciter} />
      </div>
    </div>
  );
}

export default App;
