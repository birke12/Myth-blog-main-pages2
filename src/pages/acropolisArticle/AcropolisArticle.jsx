import Newsletter from "../../components/newsletter/Newsletter";
import styles from "./arcropolisArticle.module.css";

// Import images
import acropolisImg from "/public/assets/images/acropolis.jpg";
import acropolisMuseumImg from "/public/assets/images/acropolisMuseum.jpg";

const Acropolis = ({ articleText }) => {
  return (
    <article className={styles.introductionContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>Sightseeing at the Acropolis</h1>

        <p className={styles.text}>
          <img
            src={acropolisImg}
            alt="Acropolis"
            className={styles.image}
          />
          {articleText}
          Welcome to the Acropolis, the iconic heart of ancient Athens and one
          of the most renowned archaeological sites in the world. The Acropolis
          stands as a testament to the grandeur and achievements of ancient
          Greek civilization. Perched high above the city, this ancient citadel
          has witnessed the rise and fall of empires, and today, it remains a
          symbol of the spirit, culture, and intellect that shaped Western
          civilization.
        </p>

        <p className={styles.text}>
          As you approach the Acropolis, the sight of the Parthenon, the most
          famous of its temples, rises majestically before you. Dedicated to the
          goddess Athena, the Parthenon is an architectural masterpiece,
          showcasing the artistic brilliance and technical expertise of the
          ancient Greeks. Its columns, still standing tall despite centuries of
          wear, evoke the enduring beauty of ancient Greek design and
          craftsmanship.
        </p>

        <p className={styles.text}>
          Alongside the Parthenon, the Acropolis is home to a series of other
          remarkable structures, including the Temple of Athena Nike, the
          Erechtheion, and the Propylaea. Each of these buildings holds its own
          unique historical and cultural significance. The Temple of Athena
          Nike, for example, celebrates the victory of Athens in war, while the
          Erechtheion is renowned for its distinctive asymmetry and the famous
          Caryatids, graceful figures that replace traditional columns.
        </p>

        <p className={styles.text}>
          The Acropolis also offers breathtaking panoramic views of the city of
          Athens. From this elevated vantage point, you can gaze across the
          sprawling city below, with its modern and ancient districts blending
          seamlessly. Beyond the city, you can see the distant hills and the
          Aegean Sea stretching out to the horizon, providing a stunning
          backdrop to the ancient ruins.
        </p>

        <p className={styles.text}>
          As you wander through the Acropolis complex, take time to reflect on
          the rich history that unfolded here. This sacred space was not only
          the center of worship for the people of Athens but also a symbol of
          their identity, power, and devotion. Walking in the footsteps of
          philosophers, scholars, and statesmen like Socrates and Pericles, you
          can almost hear the echoes of ancient debates and ideas that shaped
          the course of history.
        </p>

        <p className={styles.text}>
          <img
            src={acropolisMuseumImg}
            alt="Acropolis Museum"
            className={styles.imageLeft}
          />
          The Acropolis Museum, located just below the hill, offers an even
          deeper look into the history of the Acropolis. With its extensive
          collection of artifacts, sculptures, and friezes, the museum brings
          the ancient world to life. It also houses pieces from the Parthenon
          itself, including the famous Parthenon Marbles, allowing visitors to
          appreciate the splendor of these ancient artworks in their full
          context.
        </p>

        <p className={styles.text}>
          Visiting the Acropolis is more than just a trip to an ancient
          site—it's a journey through time. The Acropolis represents the
          pinnacle of Greek cultural achievement, and as you explore its ruins,
          you’ll find yourself immersed in the stories of gods and heroes, of
          battles and triumphs, and of a civilization that laid the foundations
          for much of modern thought and democracy.
        </p>

        <p className={styles.text}>
          Whether you are a history buff, an architecture enthusiast, or simply
          someone seeking to experience the awe-inspiring beauty of one of the
          world’s most iconic landmarks, the Acropolis offers something for
          everyone. It’s a place where past and present converge, and where the
          spirit of ancient Greece continues to resonate through the centuries.
        </p>

        <p className={styles.text}>
          So, as you stand on the sacred hill of the Acropolis, take a moment to
          appreciate not only the physical beauty of the ruins but also the
          profound impact they’ve had on the course of human history. This is
          more than just sightseeing—this is a connection to the very roots of
          Western civilization.
        </p>

        <p className={styles.text}>
          The Acropolis is not just a monument; it is a living, breathing symbol
          of the ancient world. Every corner you turn, every stone you touch,
          holds a piece of history waiting to be discovered.
        </p>
      </div>
    </article>
  );
};

export default Acropolis;
