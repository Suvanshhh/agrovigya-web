import React, { useState } from "react";
import styles from "./CropRecommendation.module.css";
import { useTranslation } from "react-i18next";

const CropRecommendation = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.error) {
        setResult(t("crop_recom.resultError", { error: data.error }));
      } else {
        setResult(t("crop_recom.resultSuccess", { crop: data.crop }));
      }
    } catch (error) {
      console.error("Error:", error);
      setResult(t("crop_recom.resultFail"));
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className={styles.inputGroup} key={key}>
            <label className={styles.label}>{t(`crop_recom.form.${key}`)}:</label>
            <input
              type="number"
              name={key}
              className={styles.input}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button className={styles.button} type="submit">
          {t("crop_recom.predictButton")}
        </button>
      </form>
      {result && <h2 className={styles.result}>{result}</h2>}
    </div>
  );
};

export default CropRecommendation;
