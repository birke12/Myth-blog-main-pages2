import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Section 1: Short Info */}
      <div className={styles.footerSection}>
        <h2 className={styles.sectionHeader}>Ancient Journeys</h2>
        <p className={styles.sectionText}>
          Welcome to Ancient Journeys, a place where the whispers of the past
          echo through time and across continents. As travelers, we are always
          seeking more than just new landscapes; we are driven by the desire to
          connect with the stories of those who came before us, to stand in the
          places where history was made and legends were born.
        </p>
        {/* <p className={styles.sectionText}>
          Every stone, every monument, and every artifact holds a story, and it
          is our privilege to guide you through the world’s most awe-inspiring
          ancient sites, bringing their mysteries and myths to life.
        </p> */}
      </div>

      {/* Section 2: Copyright & Legal */}
      <div className={styles.footerSection}>
        <p className={styles.sectionText}>
          © 2025 Ancient Journeys. Alle rettigheder forbeholdes. Registreret i
          Danmark, Undallslund, Skivevej 23 <br></br>CVR: 12345678
        </p>
      </div>

      {/* Section 3: Social Media & Chat */}
      <div className={styles.footerSection}>
        {/* Følg Os Section */}
        <h3 className={styles.followUsHeader}>Follow us</h3>

        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
          </a>
        </div>

        <div className={styles.chatSection}>
          <p className={styles.sectionText}>Chat with us</p>
          <FaCommentDots className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
