import React from "react";
import styles from "./blog.module.css";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title:
      "The Future of Farming: How Technology is Revolutionizing Agriculture",
    desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    title:
      "The Future of Farming: How Technology is Revolutionizing Agriculture",
    desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    title:
      "The Future of Farming: How Technology is Revolutionizing Agriculture",
    desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    title:
      "The Future of Farming: How Technology is Revolutionizing Agriculture",
    desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
    link: "#",
  },
];

const BlogSection = () => (
  <section className={styles.blogSection}>
    <div className={styles.headerRow}>
      <span className={styles.quoteMark}>&ldquo;</span>
      <h2 className={styles.hrLines}>Read Our Blogs</h2>
    </div>
    <div className={styles.blogGrid}>
      {blogs.map((blog, idx) => (
        <div className={styles.blogCard} key={idx}>
          <div className={styles.imgWrapper}>
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className={styles.blogContent}>
            <h3>{blog.title}</h3>
            <p>
              {blog.desc}
              <a href={blog.link} className={styles.readMore}>
                ...readmore
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.buttonRow}>
      <button className={styles.readMoreBtn}>Read more</button>
    </div>
    <div className={styles.footerQuotes}>
      <span className={styles.quoteMarkFooter}>&rdquo;</span>
    </div>
  </section>
);

export default BlogSection;
