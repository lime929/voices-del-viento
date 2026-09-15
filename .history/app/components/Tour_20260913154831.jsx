import styles from "../tour/page.module.css";
import Image from "next/image";
import tourImage from "../../public/images/tour/tourImage.jpg";

export default function Tour({ tour }) {
  return (
  <>
    <div className={styles.currentTour}>
        <div className={styles.header}>
         <h2 className={styles.Tourtitle}>La Belleza del Cielo</h2>
            <h4 className={styles.bandName}>Voices Del Viento</h4>
        </div>
        <div className={styles.currentColumns}>
            <Image
            src={tourImage}
            alt="Band's Tour image"
            width={700}
            height={800}
            sizes="100vw"
            className={styles.tourImage}
          />
        
          </div>
        </div>
    </div>
  </>
  );
}