import styles from "./marketingLinks.module.css";
import hotelsLogo from "../../assets/logo/hotels.png"; // Import the image
import expediaLogo from "../../assets/logo/expedia.png"; // Import the image
import bookingLogo from "../../assets/logo/Booking.png"; // Import the image
import saftywingLogo from "../../assets/logo/saftywing.png"; // Import the image

const MarketingLinks = () => {
  return (
    <section className={styles.linksSection}>
      <div className={styles.linksText}>
        <div>Marketing Links:</div>
      </div>
      <div className={styles.linksMainSection}>
        <div className={styles.linksSection}>
          <img className={styles.linksImage} src={hotelsLogo} alt="hotels" />
        </div>
        <div className={styles.linksContainer}>
          <img
            className={styles.linksImageExpedia}
            src={expediaLogo}
            alt="expedia"
          />
        </div>
        <div className={styles.linksContainer}>
          <img
            className={styles.linksImageBooking}
            src={bookingLogo}
            alt="booking"
          />
        </div>
        <div className={styles.linksContainer}>
          <img
            className={styles.linksImageSaftywing}
            src={saftywingLogo}
            alt="saftywing"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingLinks;
