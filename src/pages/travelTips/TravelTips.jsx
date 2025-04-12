import React, { useState } from "react";
import styles from "./TravelTips.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";

const TravelTips = () => {
  const tips = [
    {
      title: "Explore Ancient Ruins Early",
      content: `Historical sites like the Pyramids of Giza, the Acropolis, and Machu Picchu get extremely crowded by midday. Arriving early allows you to experience the site in a quieter, more mystical atmosphere. 
      Additionally, the lighting is best for photography in the early morning, and you avoid the heat in warmer regions. Consider booking sunrise tours for a more magical experience.`,
    },
    {
      title: "Research Myths and Legends Before Visiting",
      content: `Every ancient site has a story. Understanding the myths behind a location can bring the ruins to life. For example, knowing the story of Theseus and the Minotaur will make a visit to the ruins of Knossos in Crete much more exciting. 
      Read books, listen to podcasts, or watch documentaries before your trip to enhance your experience.`,
    },
    {
      title: "Respect Sacred Sites and Local Traditions",
      content: `Many historical sites are not just tourist attractions but hold religious and cultural significance. Always check the dress codes—some places require covered shoulders and knees. Avoid touching artifacts, and be mindful of photography restrictions. 
      Engaging respectfully with local guides can also provide deeper insights into the site's spiritual significance.`,
    },
    {
      title: "Seek Out Lesser-Known Historical Gems",
      content: `Beyond the famous landmarks, history lovers should explore lesser-known sites for a more intimate experience. Instead of just visiting Rome’s Colosseum, seek out the ancient town of Ostia Antica, a well-preserved Roman harbor city. 
      In Greece, beyond the Acropolis, consider Delphi or the island of Delos for deeper mythological connections.`,
    },
    {
      title: "Keep a Travel Journal for Myths and Stories",
      content: `A journal isn’t just for writing down your itinerary—it’s a place to capture stories, local legends, and personal reflections. Sketch ruins, jot down interesting myths from tour guides, or write about the atmosphere of an ancient temple at sunset. 
      This can enhance your appreciation of history and serve as a wonderful keepsake.`,
    },
    {
      title: "Use Local Storytelling Tours for a Deeper Experience",
      content: `Rather than just reading plaques, seek out guided storytelling tours or interactive historical walks. Many destinations now offer VR experiences or immersive storytelling tours where actors or historians bring the past to life. 
      This can make your visit feel like stepping into a historical novel or ancient myth.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader
        headerType="travelTips"
        title="Travel Tips"
        subTitle="Wisdom from our Journeys"
        /* headerImg={headerImg} */
      />
      <div className={styles.container}>
        <h2 className={styles.header}>Travel Tips for History & Myth Lovers</h2>
        <div className={styles.accordion}>
          {tips.map((tip, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                {tip.title}
                <span
                  className={
                    openIndex === index ? styles.arrowUp : styles.arrowDown
                  }
                ></span>
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>{tip.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
