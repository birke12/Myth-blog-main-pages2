import React from "react";
import styles from "./pageHeader.module.css";

// Importing images
import homeImage from "../../assets/images/NightView.png";
import aboutUsImage from "../../assets/images/Background-greek-myth.png";
import travelTipsImage from "../../assets/images/pyramid.png";
import greeceImage from "../../assets/images/GreeceBg.png";

const PageHeader = ({ title, subTitle, headerType }) => {
  // Select the appropriate image based on headerType
  const getHeaderImage = () => {
    switch (headerType) {
      case "home":
        return homeImage;
      case "aboutUs":
        return aboutUsImage;
      case "travelTips":
        return travelTipsImage;
      case "greece":
        return greeceImage;
      default:
        return null; // Return null or a default image if needed
    }
  };

  // Get the background image
  const headerImage = getHeaderImage();

  return (
    <header
      className={
        headerType === "home"
          ? styles.homePageHeader
          : headerType === "aboutUs"
          ? styles.aboutUsPageHeader
          : headerType === "travelTips"
          ? styles.traveltipsPageHeader
          : headerType === "greece"
          ? styles.greecePageHeader
          : styles.contactPageHeader
      }
      style={{
        backgroundImage: headerImage ? `url(${headerImage})` : "none", // Use dynamic background image
        backgroundRepeat: "no-repeat", // Prevent the background image from repeating
        backgroundSize: "cover", // Ensure the background covers the entire container
        backgroundPosition: "center", // Ensure the background is centered
      }}
    >
      <div
        className={`${styles.headerMainContainer} ${
          headerType === "home"
            ? styles.homeHeaderMainContainer
            : headerType === "aboutUs"
            ? styles.aboutHeaderMainContainer
            : headerType === "travelTips"
            ? styles.travelHeaderMainContainer
            : headerType === "greece"
            ? styles.greeceHeaderMainContainer
            : styles.defaultHeaderMainContainer
        }`}
      >
        <div
          className={
            headerType === "aboutUs"
              ? styles.aboutHeaderContainer
              : headerType === "greece"
              ? styles.greeceHeaderContainer
              : styles.headerContainer
          }
        >
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
