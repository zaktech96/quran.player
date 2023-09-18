import Reciters from "./components/Mainscreen";
import Button from "./components/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  RiSkipBackLine,
  RiPlayCircleLine,
  RiSkipForwardLine,
} from "react-icons/ri";

function App() {
  const [audioUrl, setAudioUrl] = useState("");
  const [text, setText] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [reciters, setReciters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const surahEditionIdentifier = "en.asad";
        const surahResponse = await axios.get(
          `http://api.alquran.cloud/v1/quran/${surahEditionIdentifier}`
        );

        const { audioUrl, text } = surahResponse.data;
        setAudioUrl(audioUrl);
        setText(text);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        // You can handle the error here, e.g., display an error message to the user.
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const surahEditionIdentifier = "en.asad";
        const surahResponse = await axios.get(
          `http://api.alquran.cloud/v1/quran/${surahEditionIdentifier}`
        );
        const { audioUrl, text } = surahResponse.data;
        setAudioUrl(audioUrl);
        setText(text);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSurahs() {
      try {
        const surahsResponse = await axios.get(
          "http://api.alquran.cloud/v1/surah"
        );
        const surahsData = surahsResponse.data.data;
        setSurahs(surahsData);
      } catch (error) {
        console.error("An error occurred while fetching Surahs:", error);
      }
    }

    fetchSurahs();
  }, []);

  useEffect(() => {
    async function fetchReciters() {
      try {
        const recitersResponse = await axios.get(
          "http://api.alquran.cloud/v1/reciters"
        );
        const recitersData = recitersResponse.data.data;
        setReciters(recitersData);
      } catch (error) {
        console.error("An error occurred while fetching Reciters:", error);
      }
    }

    fetchReciters();
  }, []);

  const handleClick = () => {
    console.log("played");
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
      <audio
        handleClick={handleClick}
        controls
        className="audio-player px-4 py-2 m-3"
      >
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
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
      <p>
        Text: {text}
        <br />
        Surahs:
        <ul>
          {surahs.map((surah) => (
            <li key={surah.number}>{surah.englishName}</li>
          ))}
        </ul>
        Reciters:
        <ul>
          {reciters.map((reciter) => (
            <li key={reciter.id}>{reciter.name}</li>
          ))}
        </ul>
      </p>
      <Reciters />
    </div>
  );
}

export default App;
