import React from "react";
import "./SchemeCard.css";
import { useTranslation } from "react-i18next";

function SchemeCard({ scheme }) {
  const { t } = useTranslation();

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
            t("schemes.no_description")}
        </p>
      </div>
      <div className="scheme-details">
        <div className="scheme-detail-item">
          <strong>{t("schemes.ministry")}:</strong> {scheme["Ministry"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>{t("schemes.states_eligible")}:</strong> {scheme["States Eligible"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>{t("schemes.income_level_card")}:</strong> {scheme["Income Level"]?.trim() || "N/A"}
        </div>
        <div className="scheme-detail-item">
          <strong>{t("schemes.location")}:</strong> {scheme["Location"]?.trim() || "N/A"}
        </div>
      </div>
      <div className="scheme-footer">
        <div className="apply-link">{t("schemes.click_learn_more")}</div>
      </div>
    </div>
  );
}

export default SchemeCard;
