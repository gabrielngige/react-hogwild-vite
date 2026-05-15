import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import initialHogs from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(initialHogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHide(name) {
    setHiddenHogs((prev) => [...prev, name]);
  }

  function handleAddHog(newHog) {
    setHogs((prev) => [...prev, newHog]);
  }

  let displayedHogs = hogs.filter((hog) => !hiddenHogs.includes(hog.name));

  if (filterGreased) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <div className="filterWrapper">
        <label htmlFor="greased-filter">Greased Pigs Only?</label>
        <input
          id="greased-filter"
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />

        <label htmlFor="sort-select" style={{ marginLeft: "2em" }}>
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">--</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <HogForm onAddHog={handleAddHog} />

      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <div key={hog.name} className="ui four wide column">
            <HogCard hog={hog} onHide={handleHide} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
