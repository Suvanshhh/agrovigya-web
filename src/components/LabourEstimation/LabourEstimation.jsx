import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './labourEstimation.module.css';

const LabourEstimation = () => {
  const { t } = useTranslation();
  const [crops, setCrops] = useState([]);
  const [formData, setFormData] = useState({ crop: '', area: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/crops');
        if (!response.ok) throw new Error(t('errors.fetchCrops'));
        const data = await response.json();
        setCrops(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCrops();
  }, [t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{t('labourEstimation.title')}</h1>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{t('labourEstimation.selectCrop')}</label>
          <select
            name="crop"
            className={styles.select}
            value={formData.crop}
            onChange={handleChange}
            required
          >
            <option value="">{t('labourEstimation.chooseCrop')}</option>
            {crops.map(crop => (
              <option key={crop['Crop Name']} value={crop['Crop Name']}>
                {crop['Crop Name']}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>{t('labourEstimation.landArea')} (ha)</label>
          <input
            type="number"
            name="area"
            className={styles.input}
            value={formData.area}
            onChange={handleChange}
            min="0.1"
            step="0.1"
            required
          />
        </div>

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? t('common.calculating') : t('common.estimateNow')}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}

      {result && (
        <div className={styles.results}>
          <h2 className={styles.subHeading}>{t('labourEstimation.resultsTitle')}</h2>
          
          {/* Labour Requirements */}
          <div className={styles.labourSection}>
            <h3>{t('labourEstimation.labourRequirements')}</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>{t('labourEstimation.totalLabour')}</h4>
                <p>{result.metadata.labour_days} {t('common.days')}</p>
              </div>
              <div className={styles.statCard}>
                <h4>{t('labourEstimation.sowingLabour')}</h4>
                <p>{result.metadata.sowing_labour} {t('common.days')}</p>
              </div>
              <div className={styles.statCard}>
                <h4>{t('labourEstimation.harvestingLabour')}</h4>
                <p>{result.metadata.harvesting_labour} {t('common.days')}</p>
              </div>
            </div>
          </div>

          {/* Rate Cards */}
          {/* Govt Rates */}
          {/* Expected Rates */}
        </div>
      )}
    </div>
  );
};

export default LabourEstimation;
