import styles from "./page.module.css";
import { FaGuitar } from "react-icons/fa";
import Image from "next/image";
import post1 from "../../public/images/news/post-1.jpg";
import post2 from "../../public/images/news/post-2.jpg";
import post3 from "../../public/images/news/post-3.jpg";
import banner from "../../public/images/news/banner.jpg";

export default function NewsPage() {
  return (
    <>
      <Image
              src={banner}
              alt="Band with Mariachi outfits performing on stage"
              sizes="100vw"
              className={styles.bannerImage}
              priority
            />

      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>Music News</h2>
        {/* Fiesta del Sol */}
        <div className={styles.newsContent}>
          <div className={styles.newsPost}>
            <div className={styles.postHeader}>
              <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
            </span>
              <h3 className={styles.postTitle}>Voces del Viento FESTIVAL</h3>
              <p className={styles.postMeta}>
                posted by Voces del Viento on May 11, 2026 09:33pm
              </p>
            </div>
            <p className={styles.postDescription}>Rock está Vivo</p>
            <p>Fiesta del Sol</p>
            <p>
              Everyone can find something to enjoy at Fiesta del Sol! The Festival
              has an Arts & Crafts area, Sponsor area, Beach Tiki Bar, and many
              other events for people to visit. Food trucks and other fantastic
              specialty food vendors will return as well! Additionally, we will be
              having a unique space especially for regional food merchants and
              artists.
            </p>
            <p>
              Featuring live music, an arts and crafts market, kid-friendly
              activities, a diverse food court, and a beer and wine garden, Fiesta
              del Sol is the biggest street festival in Solana Beach. They will be
              lining up a great list of musicians to perform over the two day
              event; including local talent. There will also be a fun, and
              exciting Children’s Area set up for families to enjoy rides, games,
              and a climbing wall.
            </p>
            <p>
              Fiesta del Sol will take place this year on May 18 and 19, 2026,
              from 9 a.m. to 10 p.m. on Saturday and 9 a.m. to 8 p.m. on Sunday.
            </p>
            <p>
              Get tickets and more information: <a href="https://fiestadelsol.org/"> HERE</a>
            </p>
            <p>PRESALE BEGINS: May 13 at 10am</p>

            <Image
              src={post1}
              alt="Event image"
              sizes="100vw"
              className={styles.postImage}
            />
            <p>
              We couldn’t be more excited to announce that we’ll be back on stage
              at Fiesta del Sol! It’s been six long months since our last show,
              and we’ve missed every moment of playing live and connecting with
              you all. Fiesta del Sol is an incredible festival, showcasing the
              importance of music and culture. We’re honored to make our comeback
              on such a lively stage. Thank you for sticking with us, we’re ready
              to make this show unforgettable!
            </p>
          </div>
        </div>

        {/* concert cancelled */}
        <div className={styles.newsContent}>
          <div className={styles.newsPost}>
            <div className={styles.postHeader}>
               <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
            </span>
              <h3 className={styles.postTitle}>September 4th Show Cancelled</h3>
              <p className={styles.postMeta}>
                posted by Voces del Viento on Sept 1, 2026 09:33pm
              </p>
            </div>
            <p className={styles.postDescription}>We are sorry to announce...</p>
            <p>
              We’re sorry to share that due to problems with the venue, we have to
              cancel our upcoming show in Las Vegas on September 4th. This isn’t
              something we ever want to do, as we know how much our shows mean to
              our fans, it’s what we live for too. We were looking forward to
              playing our hearts out for each of you, and making memories together
              so please know this decision wasn’t made lightly. </p>
              <p>For those who have
              already purchased tickets, you’ll receive a full refund, and we’re
              working hard to reschedule the show so we can make it up to you.
              Thank you for your patience, understanding, and for being the most
              incredible fans. We can’t wait to see you soon and make it worth the
              wait.
            </p>
          </div>
        </div>

        {/* New single */}
        <div className={styles.newsContent}>
          <div className={styles.newsPost}>
            <div className={styles.postHeader}>
               <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
            </span>
              <h3 className={styles.postTitle}>Es Por Ti</h3>
              <p className={styles.postMeta}>
                posted by Voces del Viento on Nov 11, 2025 09:33pm
              </p>
            </div>
            <p className={styles.postDescription}>Our new single Malaguena salerosa</p>
             <Image
              src={post2}
              alt="Event image"
              sizes="100vw"
              className={styles.postImage}
            />
            <p>
              <a href="#">Streaming Now</a>
            </p>
          </div>
        </div>

        {/* concert reschedule */}
        <div className={styles.newsContent}>
          <div className={styles.newsPost}>
            <div className={styles.postHeader}>
               <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
            </span>
              <h3 className={styles.postTitle}>U.K. Shows Rescheduled</h3>
              <p className={styles.postMeta}>
                posted by Voces del Viento on Jan 19, 2025 05:21pm
              </p>
            </div>

            <p className={styles.postDescription}>More shows!</p>
            <p>
              We’re so happy to announce that our UK and European shows have been
              rescheduled, and we are adding some new dates! We can’t thank
              everyone enough for your patience, love and understanding as we tour
              the country. We cannot wait to visit some of our favorite cities in
              the world, and to see all of our fans again. Until then, happy
              holidays and stay healthy.
            </p>
          </div>
        </div>

        {/* New album announcement */}
<div className={styles.newsContent}>
  <div className={styles.newsPost}>
    <div className={styles.postHeader}>
      <span className={styles.postLogo}>
        <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
      </span>

      <h3 className={styles.postTitle}>New Album Coming Soon</h3>

      <p className={styles.postMeta}>
        posted by Voces del Viento on Sept 10, 2026 06:00pm
      </p>
    </div>

    <p className={styles.postDescription}>
      A new chapter is on the way.
    </p>

    <p>
      We’re excited to share that Voces del Viento has been working on new music.
      Our upcoming album brings together the energy of our live shows, the stories
      that have stayed with us, and the sound we have been building as a band.
    </p>

    <p>
      This record means a lot to us. Every song was written with the people,
      places, memories, and moments that have shaped us in mind. We cannot wait
      for you to hear what we have been creating.
    </p>

    <p>
      More details, artwork, release information, and listening links will be
      announced soon. Thank you for continuing to support us and for being part
      of this journey.
    </p>
    <Image
              src={post3}
              alt="New album cover"
              sizes="100vw"
              className={styles.postImage}
            />
  </div>
</div>

{/* Chicago show announcement */}
<div className={styles.newsContent}>
  <div className={styles.newsPost}>
    <div className={styles.postHeader}>
      <span className={styles.postLogo}>
        <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
      </span>

      <h3 className={styles.postTitle}>Chicago, We’re Coming Home</h3>

      <p className={styles.postMeta}>
        posted by Voces del Viento on Sept 7, 2026 04:30pm
      </p>
    </div>

    <p className={styles.postDescription}>
      A hometown show is on the calendar.
    </p>

    <p>
      We are thrilled to announce that Voces del Viento will be performing in
      Chicago soon. There is nothing like sharing our music in a city that has
      inspired us, supported us, and helped shape our story.
    </p>

    <p>
      Expect a night of live music, familiar favorites, and some new songs from
      our upcoming project. We have been preparing something special and cannot
      wait to be back in the room with all of you.
    </p>

    <p>
      Venue, date, ticket details, and additional information will be shared
      shortly. Keep an eye on our tour page and social media for the official
      announcement.
    </p>
  </div>
</div>
      </div>
    </>
  );
}