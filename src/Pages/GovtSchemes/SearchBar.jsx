import React, { useState } from "react";
import "./SearchBar.css";
import { useTranslation } from "react-i18next";

function SearchBar({ onSearch, onFilterChange, filters }) {
  const { t } = useTranslation();
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
          placeholder={t("schemes.search_placeholder")}
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
          {showFilters ? ` ${t("schemes.hide_filters")}` : ` ${t("schemes.show_filters")}`}
        </button>
      </div>
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label htmlFor="type">{t("schemes.type")}:</label>
            <select 
              id="type" 
              name="type" 
              value={filters.type} 
              onChange={handleFilterChange}
            >
              <option value="">{t("schemes.all_types")}</option>
              <option value="Skill Development">{t("schemes.skill_development")}</option>
              <option value="Agricultural Market">{t("schemes.agri_market")}</option>
              <option value="Watershed Management">{t("schemes.watershed")}</option>
              <option value="Fisheries Development">{t("schemes.fisheries")}</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="state">{t("schemes.state")}:</label>
            <select 
              id="state" 
              name="state" 
              value={filters.state} 
              onChange={handleFilterChange}
            >
              <option value="">{t("schemes.all_states")}</option>
              <option value="Maharashtra">{t("schemes.maharashtra")}</option>
              <option value="Karnataka">{t("schemes.karnataka")}</option>
              <option value="Tamil Nadu">{t("schemes.tamil_nadu")}</option>
              <option value="Gujarat">{t("schemes.gujarat")}</option>
              <option value="Punjab">{t("schemes.punjab")}</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="incomeLevel">{t("schemes.income_level")}:</label>
            <select 
              id="incomeLevel" 
              name="incomeLevel" 
              value={filters.incomeLevel} 
              onChange={handleFilterChange}
            >
              <option value="">{t("schemes.all_levels")}</option>
              <option value="Low-Income">{t("schemes.low_income")}</option>
              <option value="Medium-Income">{t("schemes.medium_income")}</option>
              <option value="High-Income">{t("schemes.high_income")}</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
