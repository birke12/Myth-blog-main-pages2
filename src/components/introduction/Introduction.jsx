import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <article className={styles.introductionContainer}>
      <div className={styles.innerContainer}>
        {/* Image in the top-right corner */}
        <h1 className={styles.heading}>
          What is Ancient journeys
        </h1>
        <img
          src="../public/assets//images/acropolis.jpg"
          alt="Ancient Journeys"
          className={styles.image}
        />
        {/* Text Content */}
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
     {/*    <p className={styles.text}>
          
          Our blog is more than just a collection of travel tips and historical
          facts—it’s a celebration of the ancient world, its rich cultures, and
          the incredible achievements of humanity. As we explore these ancient
          places, we’ll delve deep into the stories, the legends, and the
          enduring mysteries that make these sites so fascinating. What did the
          ancients believe? How did they live, work, and build such monumental
          structures without the technologies we take for granted today? What
          lessons can we learn from their triumphs and tragedies?
        </p>
        <p className={styles.text}>
          
          Whether you are a passionate traveler with an insatiable curiosity
          about the past, a history enthusiast eager to uncover forgotten
          stories, or a lover of mythology fascinated by the tales of gods,
          heroes, and monsters, Ancient Journeys has something for you. Each
          post will take you on a journey of discovery, offering you not only
          practical travel advice but also deeper insights into the cultures,
          beliefs, and people who shaped our world.
        </p>
        <p className={styles.text}>
          
          So pack your bags, open your mind, and join us on a quest to explore
          the ruins of the ancient world. From the world’s most iconic landmarks
          to hidden gems off the beaten path, we’ll bring you closer to the
          heart of history, unveiling its wonders one journey at a time. Whether
          you’re standing in the shadow of the Parthenon, gazing up at the
          grandeur of the Colosseum, or watching the sunset over the mysterious
          ruins of Angkor Wat, every step you take will be a step through time.
        </p>
        <p className={styles.text}>
         
          Ancient Journeys is your portal to a world where the past comes
          alive and every destination holds a story waiting to be discovered.
          Join us as we uncover the timeless beauty of the ancient world, one
          journey at a time.
        </p> */}
      </div>
    </article>
  );
};

export default Introduction;
