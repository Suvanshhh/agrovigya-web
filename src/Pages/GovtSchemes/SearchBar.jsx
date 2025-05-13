import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, onFilterChange, filters }) {
  const [searchText, setSearchText] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    onSearch(query);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    onFilterChange(newFilters);
  };

  return (
    <div className="search-filter-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for schemes..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="button">
          <i className="fa fa-search"></i>
        </button>
        <button 
          className="filter-button" 
          type="button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <i className="fa fa-filter"></i>
          {showFilters ? " Hide Filters" : " Show Filters"}
        </button>
      </div>
      
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label htmlFor="type">Scheme Type:</label>
            <select 
              id="type" 
              name="type" 
              value={filters.type} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              {/* Update these options based on your actual data */}
              <option value="Skill Development">Skill Development</option>
              <option value="Agricultural Market">Agricultural Market</option>
              <option value="Watershed Management">Watershed Management</option>
              <option value="Fisheries Development">Fisheries Development</option>
              {/* Add more as needed */}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="state">State:</label>
            <select 
              id="state" 
              name="state" 
              value={filters.state} 
              onChange={handleFilterChange}
            >
              <option value="">All States</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Punjab">Punjab</option>
              {/* Add more as needed */}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="incomeLevel">Income Level:</label>
            <select 
              id="incomeLevel" 
              name="incomeLevel" 
              value={filters.incomeLevel} 
              onChange={handleFilterChange}
            >
              <option value="">All Levels</option>
              <option value="Low-Income">Low Income</option>
              <option value="Medium-Income">Medium Income</option>
              <option value="High-Income">High Income</option>
              {/* Add more as needed */}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
