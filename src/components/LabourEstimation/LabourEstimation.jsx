import React, { useState } from "react";
import styles from "./LabourEstimation.module.css";
import { useTranslation } from "react-i18next";

const cropOptions = [
  "Tomato",
  "Potato",
  "Onion",
  // Add more crops as needed
];

const areaOptions = [
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
];

const seasonOptions = ["Spring", "Summer", "Fall", "Winter"];
const wageTypeOptions = ["Govt", "Expected"];

const LabourEstimation = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    crop_name: "",
    area: "",
    season: "",
    wage_type: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
      const response = await fetch(`${BACKEND_URL}/api/labour-estimate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(t("labour.errorFetch"));
      }
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(err.message || t("labour.errorGeneric"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="crop_name">{t("labour.cropName")}</label>
          <select
            name="crop_name"
            id="crop_name"
            value={form.crop_name}
            onChange={handleChange}
            required
          >
            <option value="">{t("labour.selectCrop")}</option>
            {cropOptions.map((crop) => (
              <option key={crop} value={crop}>
                {t(`labour.crops.${crop.toLowerCase()}`, crop)}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="area">{t("labour.area")}</label>
          <select
            name="area"
            id="area"
            value={form.area}
            onChange={handleChange}
            required
          >
            <option value="">{t("labour.selectArea")}</option>
            {areaOptions.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="season">{t("labour.season")}</label>
          <select
            name="season"
            id="season"
            value={form.season}
            onChange={handleChange}
            required
          >
            <option value="">{t("labour.selectSeason")}</option>
            {seasonOptions.map((season) => (
              <option key={season} value={season}>
                {t(`labour.seasons.${season.toLowerCase()}`, season)}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="wage_type">{t("labour.wageType")}</label>
          <select
            name="wage_type"
            id="wage_type"
            value={form.wage_type}
            onChange={handleChange}
            required
          >
            <option value="">{t("labour.selectWageType")}</option>
            {wageTypeOptions.map((wage) => (
              <option key={wage} value={wage}>
                {t(`labour.wageTypes.${wage.toLowerCase()}`, wage)}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? t("labour.calculating") : t("labour.calculate")}
        </button>
      </form>

      {/* Result or Error */}
      {error && <div className={styles.error}>{error}</div>}
      {result && (
        <div className={styles.result}>
          <h3>{t("labour.resultTitle")}</h3>
          <p>
            <strong>{t("labour.crop")}:</strong> {result.crop}
          </p>
          <p>
            <strong>{t("labour.area")}:</strong> {result.area}{" "}
            {t("labour.hectares")}
          </p>
          <p>
            <strong>{t("labour.season")}:</strong>{" "}
            {result.season ? result.season : t("labour.na")}
          </p>
          <p>
            <strong>{t("labour.wageType")}:</strong> {result.wage_type}
          </p>
          <p>
            <strong>{t("labour.totalLabour")}:</strong>{" "}
            {result.total_labour_per_ha} {t("labour.personDays")}
          </p>
          <p>
            <strong>{t("labour.costPerHectare")}:</strong> ₹
            {result.cost_per_hectare}
          </p>
          <p>
            <strong>{t("labour.totalCost")}:</strong> ₹{result.total_cost}
          </p>
        </div>
      )}
    </div>
  );
};

export default LabourEstimation;
