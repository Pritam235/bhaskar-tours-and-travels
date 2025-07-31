import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [persons, setPersons] = useState(1);
  const [duration, setDuration] = useState(1);

  const handleSubmit = () => {
    onSearch(destination, persons, duration);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search destinations..."
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of persons"
        value={persons}
        onChange={(e) => setPersons(e.target.value)}
        min={1}
      />
      <input
        type="number"
        placeholder="Duration (in days)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        min={1}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchForm;
