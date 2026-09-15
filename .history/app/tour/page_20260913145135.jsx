import styles from "./page.module.css";
import Tour from "../components/Tour";
import tours from "./tours.json";

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
      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>Past Tour Dates</h2>

        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </>
  );
}