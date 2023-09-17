import axios from "axios";
import ReciterList from "./ReciterShow";
import { useEffect, useState } from "react";

function Reciters() {
  const [list, setLists] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const {
        data: { list },
      } = await axios.get("https://mp3quran.net/ap/english.php");
      setLists(list);
    }
    fetchData();
  });

  return (
    <div>
      <ReciterList Lists={list} />
    </div>
  );
}

export default Reciters;
