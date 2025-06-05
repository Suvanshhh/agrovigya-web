import React from "react";
import styles from "./servicesSection.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const serviceData = [
  {
    key: "crop-recommendation",
    img: "https://i.postimg.cc/CKRfYrQh/crop-suggestions.png",
    title: "services.cropSuggestion",
    desc: "services.cropSuggestionDesc",
    route: "/crop-recommendation",
  },
  {
    key: "labour-estimation",
    img: "https://i.postimg.cc/Yq7gg3hR/Agriculture.png",
    title: "services.labourEstimation",
    desc: "services.labourEstimationDesc",
    route: "/labour-estimation",
  },
  {
    key: "government-schemes",
    img: "https://i.postimg.cc/k5LR5N0x/Firefly-farmer-holding-a-document-in-hand-white-background-1407-removebg-preview.png",
    title: "services.governmentSchemes",
    desc: "services.governmentSchemesDesc",
    route: "/govt-schemes",
  },
  // Add more services as needed...
];

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>{t("home.ourServices")}</h2>
      <div className={styles.servicesGrid}>
        {serviceData.map((service) => (
          <div
            key={service.key}
            className={styles.serviceCard}
            onClick={() => navigate(service.route)}
          >
            <div className={styles.icon}>
              <img
                src={service.img}
                alt={t(service.title)}
                width={50}
                height={50}
                loading="lazy"
              />
            </div>
            <h3>{t(service.title)}</h3>
            <p>{t(service.desc)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
