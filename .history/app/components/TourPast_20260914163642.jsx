import styles from "../tour/page.module.css";

export default function TourPast({ tour }) {
  return (
  <>
    <div className={styles.pastTour}>
            <div className={styles.pastTourHeader}>
              <p className={styles.tourDate}>{tour.date}</p>
            <p className={styles.tourLocation}>{tour.location}</p>
            <p className={styles.tourVenue}>{tour.venue}</p>
            </div>
            <p className={styles.tourDescription}>{tour.description}</p>
    </div>
  </>
  );
}