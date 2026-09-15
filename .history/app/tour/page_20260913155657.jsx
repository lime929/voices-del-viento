import styles from "./page.module.css";
import Tour from "../components/TourCurrent";
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
  return (
    <>
      <div className={styles.tourContainer}>
        <h2 className={styles.tourTitle}>Past Tour Dates</h2>
        <div className={styles.tourcolumns}>
             <Image
            src={tourImage}
            alt="Band's Tour image"
            width={700}
            height={800}
            sizes="100vw"
            className={styles.tourImage}
          />
           {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
        </div>
       
      </div>
    </>
  );
}