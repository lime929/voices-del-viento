import styles from "../tour/page.module.css";
import Image from "next/image";
import tour1 from "../../public/images/tour/tour-1.jpg";
import tour2 from "../../public/images/tour/tour-2.jpg";
import tour3 from "../../public/images/tour/tour-3.jpg";
import tour4 from "../../public/images/tour/tour-4.jpg";
import tour5 from "../../public/images/tour/tour-5.jpg";
import tour6 from "../../public/images/tour/tour-6.jpg";
import tour7 from "../../public/images/tour/tour-7.jpg";

export default function TourGallery({tour}) {
    <div className={styles.tourGallery}>
        <div className={styles.tourGalleryGrid}>
            <Image src={tour1} alt="Tour Image 1" className={styles.tourGalleryImage} onclick="toggleZoom(this)" />
            <Image src={tour2} alt="Tour Image 2" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
            <Image src={tour3} alt="Tour Image 3" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
            <Image src={tour4} alt="Tour Image 4" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
            <Image src={tour5} alt="Tour Image 5" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
            <Image src={tour6} alt="Tour Image 6" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
            <Image src={tour7} alt="Tour Image 7" className={styles.tourGalleryImage} onclick="toggleZoom(this)"/>
    </div>
    </div>
};