import styles from "./Introduction.module.css";
import acropolisImage from "/assets/images/acropolis.jpg"; // Import image properly

const Introduction = () => {
  return (
    <article className={styles.introductionContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>
          What is Ancient Journeys
        </h1>

        <img
          src={acropolisImage}
          alt="Ancient Journeys"
          className={styles.image}
        />

        <p className={styles.text}>
          Welcome to Ancient Journeys, a place where the whispers of the
          past echo through time and across continents. As travelers, we are
          always seeking more than just new landscapes; we are driven by the
          desire to connect with the stories of those who came before us, to
          stand in the places where history was made and legends were born.
          Every stone, every monument, and every artifact holds a story, and it
          is our privilege to guide you through the world’s most awe-inspiring
          ancient sites, bringing their mysteries and myths to life.
        </p>

        <p className={styles.text}>
          From the ancient temples of Egypt to the winding streets of Rome,
          Ancient Journeys takes you on an exploration of the wonders of
          human civilization that have withstood the test of time. Our journey
          begins in the golden sands of Egypt, where the Great Pyramids rise
          majestically against the backdrop of the desert, embodying the genius
          and mystery of the ancient Egyptians. From there, we venture to the
          classical ruins of Greece, where gods and goddesses once walked among
          mortals and temples stood as eternal symbols of devotion and power.
        </p>

        <p className={styles.text}>
          As we cross the seas to the Americas, we explore the ancient ruins of
          the Mayan civilization, where jungle-clad pyramids rise above the
          canopy, telling tales of a once-great society that mastered astronomy
          and mathematics. We’ll wander through the majestic lost city of Machu
          Picchu in Peru, uncovering the spiritual significance of the Inca
          civilization’s greatest achievement. And, no journey would be complete
          without visiting the hauntingly beautiful ruins of Petra, carved into
          the cliffs of Jordan—an ancient city once hidden from the world, now a
          testament to human ingenuity and resilience.
        </p>

        <p className={styles.text}>
          But Ancient Journeys is not just about visiting ruins. It’s about
          immersing ourselves in the stories that these ancient civilizations
          have passed down through the ages. It’s about standing at the foot of
          the Acropolis in Athens and imagining the lives of philosophers like
          Socrates and Plato, whose ideas have shaped the way we think today.
          It’s about walking in the footsteps of emperors, warriors, and
          mythological figures whose legacies continue to resonate through the
          centuries.
        </p>
      </div>
    </article>
  );
};

export default Introduction;
