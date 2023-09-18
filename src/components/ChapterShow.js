import React, { useState, useEffect } from "react";

function ChapterShow() {
  const [surahs, setSurahs] = useState([]);

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
            {surah.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChapterShow;
