import PlayerCard from "./PlayerCard";
import { useState } from "react";
import { data } from "../helper/data";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))
  return (
    <div className="card-container">
      <div className="input">
        <h2>2023-2024</h2>
        <input
          type="search"
          placeholder="Search Footballer"
          onChange={handleSearch}
        />
      </div>
      <PlayerCard filteredData={filteredData} />
    </div>
  );
};

export default CardContainer;
