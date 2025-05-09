import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./blog.module.css";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "blog.blog1.title", // Using translation key
    desc: "blog.blog1.desc",  // Using translation key
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    title: "blog.blog2.title", // Using translation key
    desc: "blog.blog2.desc",  // Using translation key
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    title: "blog.blog3.title", // Using translation key
    desc: "blog.blog3.desc",  // Using translation key
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    title: "blog.blog4.title", // Using translation key
    desc: "blog.blog4.desc",  // Using translation key
    link: "#",
  },
];

const BlogSection = () => {
  const { t } = useTranslation(); // Hook to fetch translations

  return (
    <section className={styles.blogSection}>
      <div className={styles.headerRow}>
        <span className={styles.quoteMark}>&ldquo;</span>
        <h2 className={styles.hrLines}>{t("blog.sectionTitle")}</h2>
      </div>
      <div className={styles.blogGrid}>
        {blogs.map((blog, idx) => (
          <div className={styles.blogCard} key={idx}>
            <div className={styles.imgWrapper}>
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className={styles.blogContent}>
              <h3>{t(blog.title)}</h3> {/* Translate the title */}
              <p>
                {t(blog.desc)} {/* Translate the description */}
                <a href={blog.link} className={styles.readMore}>
                  ...{t("blog.readMore")}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.readMoreBtn}>{t("blog.readMore")}</button>
      </div>
      <div className={styles.footerQuotes}>
        <span className={styles.quoteMarkFooter}>&rdquo;</span>
      </div>
    </section>
  );
};

export default BlogSection;
