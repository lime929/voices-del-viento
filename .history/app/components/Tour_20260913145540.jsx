import styles from "../news/page.module.css";
import { FaGuitar } from "react-icons/fa";

export default function Tour({ tour }) {
  return (
    <div className={styles.newsContent}>
      <div className={styles.newsPost}>
        <div className={styles.postHeader}>
          <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
          </span>
          <h3 className={styles.postTitle}>{tour.venue}</h3>
          <p className={styles.postMeta}>
            {tour.date} • {tour.location}
          </p>
        </div>

        {tour.specialGuest && (
          <p className={styles.postDescription}>{tour.specialGuest}</p>
        )}

        {tour.tickets && (
          <p>
            <a href={tour.tickets.href} className={styles.newsPostLink}>
              {tour.tickets.label}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}