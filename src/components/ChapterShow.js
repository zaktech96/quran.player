import React, { useState, useEffect } from "react";

function ChapterShow({setSelectedSurah, selectedReciter }) {
  const [surahs, setSurahs] = useState([]);

  const handleSurahClick = (e) => {
    console.log(e.target.value)
    setSelectedSurah(e.target.value)

  //   Call the api for the selected surah and the selected reciter
  }

  useEffect(() => {
    async function fetchSurahs() {
      try {
        const response = await fetch(
          "https://mp3quran.net/api/v3/suwar?language=eng"
        );
        if (response.ok) {
          const data = await response.json();
          const surahData = data.suwar;
          setSurahs(surahData);
        } else {
          console.error("Failed to fetch surahs");
        }
      } catch (error) {
        console.error("An error occurred while fetching surahs:", error);
      }
    }

    fetchSurahs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4 text-center">Surahs List</h2>
      <ul className="max-h-48 overflow-y-auto p-2 border rounded">
        {surahs.map((surah) => (
          <li key={surah.id} className="text-lg py-2 border-b last:border-b-0">
            <button
                className="outline rounded-xl p-2 hover:bg-slate-100"
                value={surah.name}
                onClick={(e) => handleSurahClick(e)}
            >
              {surah.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChapterShow;
