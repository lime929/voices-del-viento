import Image from "next/image";
import styles from "./page.module.css";
import Band1 from "../../public/images/about/band-1.jpg";
import Band2 from "../../public/images/about/band-2.jpg";
import Band3 from "../../public/images/about/band-3.jpg";

export default function AboutPage() {
  return (
    <main className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About Us</h1>

      <section className={styles.aboutSection}>
        <div className={styles.bandName}>
          <p>[ ARTIST COLLECTION ]</p>
          <h2>Voces del Viento</h2>
        </div>

        <div className={styles.aboutGrid}>
          <p className={styles.storyOne}>
            The story of our band begins in Michoacán, Mexico, where our vibrant
            culture, rich traditions, and close community inspired the band
            we've become today. As a group of friends who grew up together,
            we bonded over our shared love for the music that shaped
            us: everything from classic Mexican rock to the more modern lyrics
            of Caifanes and Los Enanitos Verdes. We played together in garages,
            living rooms, and family parties, developing a sound that took parts
            of our heritage and modern indie rock influences. It wasn't
            until our early 20s that we decided to take things seriously,
            putting all those years of playing into creating our own music that
            would impact new generations in Mexico and beyond.
          </p>

          <p className={styles.storyTwo}>
            Inspired by the music of legends like Caifanes, Juanes, and Los
            Enanitos Verdes, our sound is a mix of Mexican rock our fathers
            loved and modern indie rock. We wanted our songs to honor our roots
            while also having our own twist, using layered guitar riffs,
            heartfelt lyrics, and rhythms that anyone could dance to. Our lyrics
            draw from personal stories, our endeavors with love, and everyday
            life in Michoacán. Each song is an exploration of our feelings, who
            we are, and where we come from. As a new generation, we aim to build
            a bridge between classic Latin rock and the indie sounds of today.
          </p>

          <div className={styles.imageOne}>
            <Image
              src={Band1}
              alt="Band members together"
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.imageTwo}>
            <Image
              src={Band2}
              alt="Band performing together"
              className={styles.aboutImage}
            />
          </div>

          <p className={styles.storyThree}>
            As our music gained popularity, we started playing more shows beyond
            Michoacán, venturing into surrounding cities with disbelief that our
            music was reaching more people. With each performance, our following
            grew, and soon fans were singing along in cities we'd never
            even visited. Our breakthrough came when we opened for one of our
            heroes, Café Tacvba, a surreal experience that helped solidify our
            place in the Mexican rock scene. The support from our fans pushed us
            to keep going and embrace every opportunity to share our music with
            new audiences.
          </p>

          <p className={styles.storyFour}>
            One of the traditions fans have come to love is our Mariachi Tribute
            at the end of every show. As a nod to the music we grew up with and
            the music our fathers made, we perform a mariachi-inspired song to
            close the night. Sometimes we add a rock twist; other times we let
            the acoustic guitar and the beauty of our culture lead the moment.
            We've even had friends from Michoacán join us on stage, which
            always gets the crowd on its feet. It's our way of honoring our
            roots while keeping every show alive and unique.
          </p>

            <p className={styles.storySix}>
                        As we continue to grow as a band, we're driven by our original
            dream of sharing our music and culture with the world. Every song
            and show is a tribute to Michoacán, our families, and the culture
            that shaped us. We're grateful for the opportunity to represent
            Mexican indie rock on a larger stage while staying true to our
            roots. This journey is possible because of the fans who support our
            music and make up our community.
            </p>

          <p className={styles.storyFive}>
            Looking ahead, we want Voces del Viento to remain a place where people can
            find connection through music. Whether someone hears us for the first time at
            a small hometown show or sings along with us in another country, we hope every
            song carries a little piece of Michoacán with it. We are still the same group
            of friends who started by playing wherever we could, but every new listener,
            collaboration, and stage reminds us how far a shared dream can travel.
          </p>

          <div className={styles.imageThree}>
            <Image
              src={Band3}
              alt="Band members posing together"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}