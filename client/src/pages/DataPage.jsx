import { useState } from "react";
import TeroristCard from "../components/TeroristCard";
import { useEffect } from "react";
import "./DataPage.css";
import SearchArea from "../components/SearchArea";

function DataPage() {
  const [terrorists, setTerrorists] = useState([]);
  const [searchPlace, setSearchPlace] = useState("");
  const [minYear, setMinYear] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/terrorists");
      const data = await res.json();
      setTerrorists(data);
    }

    fetchData();
  }, []);

  const filteredList = terrorists.filter((t) => {
    const matchesCountryCity =
      t[2].toLowerCase().includes(searchPlace.toLowerCase()) ||
      t[4].toLowerCase().includes(searchPlace.toLowerCase());
    const matchesear = +t[1] >= minYear;
    return matchesCountryCity && matchesear ;
  });

  return (
    <div>
      <SearchArea setSearchPlace={setSearchPlace} setMinYear={setMinYear} />
      <table>
        <thead>
          <tr>
            <th>eventid</th>
            <th>iyear</th>
            <th>country_txt</th>
            <th>region_txt</th>
            <th>city </th>
            <th>summary </th>
            <th>attacktype1_txt </th>
            <th>targsubtype1_txt </th>
            <th>corp1 </th>
            <th>target1 </th>
            <th>motive </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((t, index) => (
            <TeroristCard key={index} terorist={t} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPage;
