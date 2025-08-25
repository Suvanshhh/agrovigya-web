import React, { useState } from "react";
import styles from "./CropRecommendation.module.css";
import { useTranslation } from "react-i18next";
import { getAuth } from "firebase/auth";

const CropRecommendation = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setResult("Please log in to use this feature.");
      setIsLoading(false);
      return;
    }

    try {
      const idToken = await user.getIdToken();

      const response = await fetch(process.env.REACT_APP_PREDICT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(formData),
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className={styles.inputGroup} key={key}>
            <label className={styles.label}>
              {t(`crop_recom.form.${key}`)}:
            </label>
            <input
              type="number"
              name={key}
              className={styles.input}
              value={formData[key]}
              onChange={handleChange}
              placeholder={t(`formPlaceholders.${key}`)}
              required
            />
          </div>
        ))}
        <button className={styles.button} type="submit" disabled={isLoading}>
          {isLoading ? "Predicting..." : t("crop_recom.predictButton")}
        </button>
      </form>
      {result && <h2 className={styles.result}>{result}</h2>}
    </div>
  );
};

export default CropRecommendation;
