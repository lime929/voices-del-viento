import styles from "../tour/tourpage.module.css";

export default function TourCurrent({ tour }) {
  return (
    <div className={styles.tourEntry}>
      <div className={styles.tourDateLocation}>
        <div className={styles.tourDateCell}>{tour.date}</div>
        <div className={styles.tourLocationCell}>{tour.location}</div>
      </div>

      <div className={styles.tourVenueCell}>{tour.venue}</div>

      {tour.specialGuest && (
        <div className={styles.tourGuestCell}>{tour.specialGuest}</div>
      )}

      {tour.tickets && (
        <a
          href={tour.tickets.href}
          className={styles.tourTickets}
          target="_blank"
        >
          {tour.tickets.label}
        </a>
      )}
    </div>
  );
}