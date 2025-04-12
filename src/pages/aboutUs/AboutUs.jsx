import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./AboutUs.module.css";
import travelImage1 from "../../../public/assets/images/travel10.jpg"; // Example image
import travelImage2 from "../../../public/assets/images/travel2.jpg"; // Example image
import travelImage3 from "../../../public/assets/images/travel3.jpg"; // Example image

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        headerType="aboutUs"
        title="About Us"
        subTitle="Exploring the Myths & Legends of the World"
      />
      <article className={styles.container}>
        <section className={styles.content}>
          <div className={styles.textSection}>
            <h2>Our Journey</h2>
            <p>
              Welcome to <strong>Ancient Journeys</strong>, where history meets
              myth. Our passion is to uncover the hidden stories behind ancient
              ruins, legendary cities, and mythical landscapes. From the temples
              of Greece to the Viking strongholds of Scandinavia, we bring you
              closer to the past.
            </p>
          </div>

          <div className={styles.imageSection}>
            <img
              src={travelImage1}
              alt="Ancient ruins"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.contentReverse}>
          <div className={styles.imageSection}>
            <img
              src={travelImage2}
              alt="Mystical temple"
              className={styles.image}
            />
          </div>

          <div className={styles.textSection}>
            <h2>Why We Travel</h2>
            <p>
              Traveling through history is more than just seeing old stones—it’s
              about connecting with the legends, the cultures, and the people
              who keep these traditions alive. Our goal is to inspire you to
              visit places where history and mythology intertwine.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.textSection}>
            <h2>Join Our Adventure</h2>
            <p>
              Whether you are a history buff, a mythology enthusiast, or a
              curious traveler, we invite you to join our journey. Follow our
              blog for travel tips, myth-inspired itineraries, and deep dives
              into the world's greatest legends.
            </p>
          </div>

          <div className={styles.imageSection}>
            <img
              src={travelImage3}
              alt="Historic landscape"
              className={styles.image}
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutUs;
