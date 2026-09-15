import styles from "./page.module.css";
import TourCurrent from "../components/TourCurrent";
import TourPast from "../components/TourPast";
import tours from "./tours.json";
import Image from "next/image";
import tourImage from "../../public/images/tour/tourImage.jpg";

export const metadata = {
  title: "Voces del Viento | Tour",
  description: "Live performances and tour dates for Voces del Viento. Check out our upcoming concerts and events.",
  keywords: [
    "Voces del Viento",
    "Concert announcements",
    "Live performances",
    "Tour dates",
    "Music events",
    "Band tour",
    "Live music",
    "Concert schedule",
    "Tour updates",
    "Music tour"
  ]
};

export default function TourPage() {
  const upcomingTours = tours.filter((tour) => tour.status === "upcoming");
  const pastTours = tours.filter((tour) => tour.status === "past");

  return (
    <>
      <div className={styles.tourContainer}>
      <div className={styles.header}>
        <h2 className={styles.Tourtitle}>La Belleza del Cielo</h2>
        <h4 className={styles.bandName}>Voices Del Viento</h4>
      </div>
       <div className={styles.tourcolumns}>
          <Image
            src={tourImage}
            alt="Band's Tour image"
            width={700}
            height={800}
            sizes="100vw"
            className={styles.tourImage}
          />
          {upcomingTours.map((tour) => (
            <TourCurrent key={tour.id} tour={tour} />
          ))}
        </div>

        <div className={styles.pastTourList}>
          <h3 className={styles.pastTourTitle}>Past Tour Dates</h3>
          {pastTours.map((tour) => (
            <TourPast key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </>
  );
}