import { useState } from "react";
import styles from "./newsletter.module.css"
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form1}>
            <div className={styles.textContainer}>
              <h3 className={styles.textHeader}>Want to come along?</h3>
              <div className={styles.newsText}>
                Sign up for our newsletter and get the latest articles with
                inspiration and travel tips delivered straight to your inbox ♡"
              </div>
            </div>
            {/* <label>Din email:</label> */}
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

            <Button buttonText="Sign Up" type="submit" />
            {/* <button type="submit">Tilmeld</button> */}
          </form>
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal} className={styles.modal1}>
          <div>
            <h2 className={styles.modalText}>Thank You for Signing Up!</h2>
            <p>
              We have sent you an email at {inputValue2}. Please check your
              inbox.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
