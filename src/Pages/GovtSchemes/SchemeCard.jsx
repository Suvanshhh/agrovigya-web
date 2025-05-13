import React from "react";
import "./SchemeCard.css";

function SchemeCard({ scheme }) {
  const handleCardClick = () => {
    if (scheme.Link) {
      window.open(scheme.Link, "_blank");
    }
  };

  return (
    <div className="scheme-card" onClick={handleCardClick}>
      <div className="scheme-card-header">
        <h2>{scheme["Scheme Name"] || "No Name"}</h2>
        <span className="scheme-badge">{scheme["Scheme Type"] || "N/A"}</span>
      </div>
      
      <div className="scheme-description">
        <p>
          {scheme["Job Type"]?.substring(0, 150) || 
           scheme["Scheme Status"]?.substring(0, 150) || 
           "No description available"}
        </p>
      </div>
      
      {/* SIMPLIFIED DETAILS SECTION FOR TESTING */}
      <div className="scheme-details">
        <div className="scheme-detail-item">
          <strong>Ministry:</strong> {scheme["Ministry"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>States Eligible:</strong> {scheme["States Eligible"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>Income Level:</strong> {scheme["Income Level"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>Location:</strong> {scheme["Location"]?.trim() || "N/A"}
        </div>
      </div>
      
      <div className="scheme-footer">
        <div className="apply-link">Click to learn more</div>
      </div>
    </div>
  );
}

export default SchemeCard;
