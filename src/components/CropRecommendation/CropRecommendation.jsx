import React, { useState } from "react";
import styles from "./CropRecommendation.module.css";

const CropRecommendation = () => {
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
    console.log("Sending data:", formData);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Received data:", data);

      if (data.error) {
        setResult("Prediction failed: " + data.error);
      } else {
        setResult("Predicted Crop: " + data.crop);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Prediction failed.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Crop Recommendation System</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className={styles.inputGroup} key={key}>
            <label className={styles.label}>{key}:</label>
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
          Predict Crop
        </button>
      </form>
      {result && <h2 className={styles.result}>{result}</h2>}
    </div>
  );
};

export default CropRecommendation;
