import React, { useState, useEffect } from "react";
import axios from "axios";

function ReciterShow({ setSelectedReciter }) {
  // State to store the list of reciters
  const [reciters, setReciters] = useState([]);

  // useEffect to fetch reciters when the component mounts
  useEffect(() => {
    async function fetchReciters() {
      try {
        // Make a GET request to the API to fetch reciters
        const response = await axios.get(
          "https://www.mp3quran.net/api/v3/reciters?language=eng"
        );

        // Check if the response is successful (status code 200)
        if (response.status === 200) {
          const reciterData = response.data.reciters;
          // Set the reciters in state
          setReciters(reciterData);
        } else {
          console.error("Failed to fetch reciters");
        }
      } catch (error) {
        console.error("An error occurred while fetching reciters:", error);
      }
    }

    // Call the fetchReciters function when the component mounts
    fetchReciters();
  }, []); // The empty dependency array means this effect runs once on mount

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {reciters.map((reciter) => (
            <li
              key={reciter.id}
              className="reciter-item"
              onClick={() => setSelectedReciter(reciter)}
            >
              {reciter.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReciterShow;
