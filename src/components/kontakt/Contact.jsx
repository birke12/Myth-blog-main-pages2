
import styles from "./contact.module.css";
import {
  FaUserAlt,
  FaRegNewspaper,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
/* import styles from "./newsletter.module.css"; */
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";


const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState(""); // New state for message
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setInputValue(value);
    } else if (name === "email") {
      setInputValue2(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api-medieskolerne.vercel.app/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: inputValue }),
        }
      );
      const result = await response.json();
      openModal();
      setInputValue("");
      setInputValue2("");
      setIsLoading(false);
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    }
  };

  return (
    <div className={styles.kontaktContainer}>
      {/*  <h2 className={styles.header}>Get in touch with us</h2> */}
      <p className={styles.text}>
        Do you have any questions? We are here to help. Contact us for customer
        support, press and media inquiries, or our address and phone number.
      </p>

      <div className={styles.contactTextContainer}>
        <p></p>
      </div>
      <div className={styles.cardsContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form1}>
              <div className={styles.textContainer}>
                <h3 className={styles.textHeader}>Contact us</h3>
                <div className={styles.newsText}>
                  If you are interested in discussing a collaboration with us,
                  don’t hesitate to send an email to{" "}
                  <a
                    className={styles.newsLink}
                    href="mailto:contact@ancientjourney.com"
                  >
                    {" "}
                    contact@ancientjourney.com
                  </a>
                  or fill out the contact form. <br /> <br /> We are also happy
                  to send our media kit with statistics from our Danish travel
                  blog Ancient Journey, our international travel blog Ancient
                  Journey Abroad, and our Instagram profile{" "}
                  <a
                    className={styles.newsLink}
                    href="https://instagram.com/ancientjourney"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ancientjourney
                  </a>
                  . <br /> <br /> Write a few lines about your thoughts or
                  proposals, and we will get back to you as soon as possible.
                </div>
              </div>

              <input
                type="text"
                name="name"
                value={inputValue}
                onChange={handleInputChange}
                required
                placeholder="Write your name here"
              />

              <input
                type="email"
                name="email"
                value={inputValue2}
                onChange={handleInputChange}
                required
                placeholder="Write your email here"
              />

              {/* Message Field */}
              <textarea
                name="message"
                value={inputValue3} // You need to define inputValue3 in your state
                onChange={handleInputChange}
                required
                placeholder="Write your message here"
                className={styles.messageField} // Optional: Add styling
              ></textarea>

              <Button buttonText="Sign Up" type="submit" />
            </form>
          </div>
        )}
        {isModalOpen && (
          <Modal onClose={closeModal} className={styles.modal1}>
            <div>
              <h2 className={styles.modalText}>Thank You for contacting Up!</h2>
              <p>
                We have sent you an email at {inputValue2}. Please check your
                inbox.
              </p>
            </div>
          </Modal>
        )}

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35271.68500104465!2d9.370546811064923!3d56.45948600814999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be408fd3670c3%3A0x7a981e5e9d41fc14!2sViborg%20Orienteringsklub!5e0!3m2!1sda!2sdk!4v1737365943616!5m2!1sda!2sdk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map to Skivevej 93, Viborg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
