import styles from "./page.module.css"

export const metadata = {
  title: "Voces del Viento",
  description:
    "Welcome to the official website of Voces del Viento, a Mexican indie rock band from Michoacán blending classic Latin rock influences with modern indie sound.",
  keywords: [
    "Voces del Viento",
    "Mexican indie rock",
    "Mexican rock band",
    "Michoacán band",
    "Latin rock",
    "indie music",
    "Mexican alternative music",
    "Voces del Viento music",
    "new Mexican music",
    "live band performances",
    "band tour",
    "Mexican indie band",
  ],
};

export default function Home() {
  return (
    <>
    <main>
          <section className={styles.videoBanner}>
        <video
          className={styles.bannerVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/images/home/home-banner.mp4" type="video/mp4" />
        </video>

        <div className={styles.videoOverlay} />

        <div className={styles.videoContent}>
          <p className={styles.videoEyebrow}>new</p>
          <h1>noche eterna</h1>
          <p>
            Another story, told through music.
          </p>
          <a href="/store/music" className={styles.bannerButton}>shop now</a>
        </div>
      </section>

      <section className={styles.shopGrid}>
            <article className={styles.gridCard}>
     <span className={styles.cardContent}>
       <p>shop</p>
      <h2>music</h2>
       <a href="/store/music" className={styles.bannerButton}>shop now</a>
     </span>
    </article>
            <article className={styles.gridCard}>
     <span className={styles.cardContent}>
       <p>shop</p>
      <h2>merch</h2>
       <a href="/store/clothing" className={styles.bannerButton}>shop now</a>
     </span>
    </article>
      </section>

    </main>
    
    </>
  );
}
