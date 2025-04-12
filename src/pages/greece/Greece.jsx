import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./greece.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Newsletter from "../../components/newsletter/Newsletter";

const Greece = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/greece.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading articles:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.articleCard}`);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article>
      <PageHeader
        headerType="greece"
        /* title="Greece" */
        /* subTitle="The Mythical Travel Blog" */
        /* headerImg={headerImg} */
      />

      <section className={styles.articleGridContainer}>
        <div className={styles.articleGrid}>
          <div className={styles.articleTitle}>Places to explore in Greece</div>
          {articles.map((article) => (
            <div key={article.id} className={styles.articleCard}>
              <div className={styles.imageWrapper}>
                <Link to={article.link}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.articleImage}
                  />
                </Link>
              </div>
              <div className={styles.articleContent}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </article>
  );
};

export default Greece;
