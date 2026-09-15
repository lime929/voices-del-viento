import styles from "../tour/page.module.css";

export default function TourCurrent({ tour }) {
  return (
    <div className={styles.currentTour}>
      <div className={styles.header}>
        <h2 className={styles.Tourtitle}>La Belleza del Cielo</h2>
        <h4 className={styles.bandName}>Voices Del Viento</h4>
      </div>

      <div className={styles.currentColumns}>
        <div className={styles.currentTourList}>
          <p className={styles.tourDate}>{tour.date}</p>
          <p className={styles.tourLocation}>{tour.location}</p>
          <p className={styles.tourVenue}>{tour.venue}</p>

          {tour.specialGuest && (
            <p className={styles.tourSpecialGuest}>{tour.specialGuest}</p>
          )}

          {tour.tickets && (
            <a
              href={tour.tickets.href}
              className={styles.tourTickets}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tour.tickets.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}