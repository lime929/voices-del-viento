"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../tour/page.module.css";
import tour1 from "../../public/images/tour/tour-1.jpg";
import tour2 from "../../public/images/tour/tour-2.jpg";
import tour3 from "../../public/images/tour/tour-3.jpg";
import tour4 from "../../public/images/tour/tour-4.jpg";
import tour5 from "../../public/images/tour/tour-5.jpg";
import tour6 from "../../public/images/tour/tour-6.jpg";
import tour7 from "../../public/images/tour/tour-7.jpg";
import tour8 from "../../public/images/tour/tour-8.jpg";

const images = [tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8];

export default function TourGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.tourGallery}>
      <div className={styles.tourSpotlight}>
        <Image
          src={selectedImage}
          alt="Selected tour image"
          width={1000}
          height={800}
          className={styles.tourSpotlightImage}
        />
      </div>

      <div
        className={styles.tourGalleryGrid}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={styles.tourGalleryThumbButton}
            onClick={() => setSelectedImage(image)}
            aria-label={`View tour image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Tour Image ${index + 1}`}
              width={300}
              height={240}
              className={styles.tourGalleryImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
}