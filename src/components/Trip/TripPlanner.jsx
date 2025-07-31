import React, { useState } from "react";
import SearchForm from "./SearchForm";

const TripPlanner = () => {
  const [filters, setFilters] = useState(null);

  const packages = [
    { id: 1, destination: "Paris", duration: 5, persons: 2 },
    { id: 2, destination: "Goa", duration: 3, persons: 4 },
    { id: 3, destination: "Dubai", duration: 7, persons: 2 },
    { id: 4, destination: "Manali", duration: 4, persons: 5 },
  ];

  const handleSearch = (destination, persons, duration) => {
    setFilters({ destination, persons: +persons, duration: +duration });
  };

  const filtered = filters
    ? packages.filter(
        (pkg) =>
          pkg.destination.toLowerCase().includes(filters.destination.toLowerCase()) &&
          pkg.persons >= filters.persons &&
          pkg.duration >= filters.duration
      )
    : packages;

  return (
    <div>
      <h1>Plan Your Trip</h1>
      <SearchForm onSearch={handleSearch} />
      <h2>Matching Packages:</h2>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((pkg) => (
            <li key={pkg.id}>
              {pkg.destination} - {pkg.duration} days - {pkg.persons} persons
            </li>
          ))
        ) : (
          <p>No packages found.</p>
        )}
      </ul>
    </div>
  );
};

export default TripPlanner;
