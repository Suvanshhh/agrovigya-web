import React, { useState, useEffect } from "react";
import "./GovtSchemes.css";
import SchemeCard from "./SchemeCard";
import SearchBar from "./SearchBar";
import Papa from "papaparse";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

function GovtSchemes() {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    state: "",
    incomeLevel: "",
  });

  useEffect(() => {
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/data/govt_schemes.tsv");
      const tsvText = await response.text();

      Papa.parse(tsvText, {
        header: true,
        delimiter: "\t",
        skipEmptyLines: true,
        complete: (results) => {
          console.log("Parsed TSV data:", results.data); // <-- Add this line
          const validSchemes = results.data.filter(
            (scheme) => scheme["Scheme Name"]
          );

          setSchemes(validSchemes);
          setFilteredSchemes(validSchemes);
          setIsLoading(false);
        },
        error: (error) => {
          setError("Failed to parse TSV data");
          setIsLoading(false);
        },
      });
    } catch (err) {
      setError("Failed to fetch schemes data");
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, filters);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(searchQuery, newFilters);
  };

  const applyFilters = (query, filterCriteria) => {
    let filtered = [...schemes];

    // Text search
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        (scheme) =>
          scheme["Scheme Name"]?.toLowerCase().includes(lowerQuery) ||
          scheme["Description"]?.toLowerCase().includes(lowerQuery) ||
          scheme["Ministry/Department"]?.toLowerCase().includes(lowerQuery) ||
          scheme["Eligibility"]?.toLowerCase().includes(lowerQuery)
      );
    }

    // Type filter
    if (filterCriteria.type) {
      filtered = filtered.filter(
        (scheme) => scheme["Category"] === filterCriteria.type
      );
    }

    // State filter
    if (filterCriteria.state) {
      filtered = filtered.filter(
        (scheme) =>
          scheme["State"] === filterCriteria.state ||
          scheme["State"] === "All States"
      );
    }

    // Income level filter
    if (filterCriteria.incomeLevel) {
      filtered = filtered.filter((scheme) =>
        scheme["Income Level"]?.includes(filterCriteria.incomeLevel)
      );
    }

    setFilteredSchemes(filtered);
  };

  return (
    <div className="govt-schemes-container with-navbar-spacing">
      <Navbar />
      <div className="schemes-header">
        <h1>Government Schemes</h1>
        <p>
          Explore various government schemes available for farmers and rural
          development
        </p>
      </div>

      <SearchBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        filters={filters}
      />

      {isLoading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading schemes...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={fetchSchemes}>Retry</button>
        </div>
      ) : (
        <div className="schemes-grid">
          {filteredSchemes.length > 0 ? (
            filteredSchemes.map((scheme, index) => (
              <SchemeCard key={index} scheme={scheme} />
            ))
          ) : (
            <div className="no-results">
              <p>No schemes found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilters({ type: "", state: "", incomeLevel: "" });
                  setFilteredSchemes(schemes);
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default GovtSchemes;
