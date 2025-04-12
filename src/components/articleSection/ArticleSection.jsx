import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./articleSection.module.css";

const ArticleSection = ({ jsonPath }) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    fetch("/data/athenarticles.json") // Load JSON dynamically based on prop
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading articles:", error));
  }, [jsonPath]); // Re-fetch if the path changes

  return (
    <section className={styles.articleGridContainer}>
      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <Link to={article.link}>
              <div className={styles.imageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                />
              </div>
            </Link>
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
