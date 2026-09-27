import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
    <main>
        <div className={styles.aboutContainer}>
  <h2 className={styles.title}>About Us</h2>

  <div className={styles.bandName}>
    <p>[ ARTIST COLLECTION ]</p>
    <h3>Voces del Viento</h3>
  </div>

  <div className={styles.aboutSection}>
    <div className={styles.aboutDesc}>
      <p>
        The story of our band begins in Michoacán, Mexico, where our vibrant
        culture, rich traditions, and close community inspired the band
        we've become today. As a group of friends who grew up together, we
        bonded over our shared love for the music that shaped us—everything from
        classic Mexican rock to the more modern lyrics of Caifanes and Los
        Enanitos Verdes. We played together in garages, living rooms, and
        family parties, developing a sound that took parts of our heritage and
        modern indie rock influences. It wasn't until our early 20s that we
        decided to take things seriously, putting all those years of playing
        into creating our own music that would impact new generations in Mexico
        and beyond.
      </p>

      <p>
        Inspired by the music of legends like Caifanes, Juanes, and Los Enanitos
        Verdes, our sound is a mix of Mexican rock our fathers loved and modern
        indie rock. We wanted our songs to honor our roots while also having our
        own twist, using layered guitar riffs, heartfelt lyrics, and rhythms
        that anyone could dance to in our songs. Our lyrics draw from personal
        stories, our endeavors with love, and our everyday life in Michoacán,
        giving listeners the chance to relate to any one of these topics. Each
        song is an exploration of our feelings, who we are, and where we come
        from, and we hope listeners feel the passion that is put into our music.
        As the new generation, we aim to build a bridge between classic Latin
        rock and the indie sounds of today.
      </p>

       <Image
                src=""
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style=""
                className=""
              />
    </div>

    <div className={styles.aboutDesc2}>
       <Image
                src=""
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style=""
                className=""
              />

      <p>
        As our music gained popularity, we started playing more shows beyond
        Michoacán, venturing into the surrounding cities with a bit of disbelief
        that our music was reaching more people. With each performance, our
        following grew, and soon we had fans singing along to our songs in cities
        we'd never even visited before. Our breakthrough came when we opened
        for one of our heroes, Café Tacvba, which was a surreal experience that
        solidified our place in the Mexican rock scene. Each city on our first
        tour felt unlike anything before, seeing other people love our creation
        so much. The support from our fans pushed us to keep going, and we
        embraced every opportunity to share our music with new audiences.
      </p>

      <p>
        One of our quirks that fans have come to love is our Mariachi Tribute
        portion at the end of every show. As a nod to the traditional music we
        grew up with and the music our fathers made, we play a mariachi-inspired
        song at the end of the show. Sometimes we throw in a rock twist, closing
        the show in a more lively way, but other times we simply relish the
        beauty of our culture and the acoustic guitar.
      </p>

      <p>
        We've even had friends from Michoacán join us on stage, which
        always gets the crowd on their feet. It's our way of paying homage
        to our roots while keeping the energy alive and unique.
      </p>
    </div>

    <div className={styles.aboutDesc2}>
      <p>
        As we continue to grow as a band, we're driven by the initial dream
        of sharing our music and our culture with the world. Each song we write
        and every show is a tribute to Michoacán, our family, and the culture
        that shaped us. We're eternally grateful for the opportunity to
        represent Mexican indie rock on a larger stage, carrying forward the
        legacy of the artists who inspired us.
      </p>

      <p>
        We're dedicated to staying true to our roots, making music that
        resonates with fans, and staying authentic to who we are. With every
        performance, we're reminded that this journey is only possible
        because of the incredible support from our fans—the people who support
        our music and make up our community.
      </p>

       <Image
                src=""
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style=""
                className=""
              />
    </div>
  </div>
</div>
    </main>
     
    );
}