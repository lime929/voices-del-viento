import banner from "../../public/images/support/banner.jpg";
import Image from "next/image";
import styles from "./page.module.css";


export default function SupportPage() {
  return (
    <>
      <h1 className={styles.supportTitle}>For the Fans...</h1>

      {/* <Image
        src={banner}
        alt="Band members holding up instruments"
        sizes="100vw"
        className={styles.bannerImage}
        priority
      /> */}

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
          <source src="/images/support/bandLive.mp4" type="video/mp4" />
        </video>

        <div className={styles.videoOverlay} />

        <div className={styles.videoContent}>
          <p className={styles.videoEyebrow}>Support & Help</p>
          <h1>For the Fans</h1>
          <p>
            Made for the songs, the shows, and the people who bring the music with them everywhere.
          </p>
        </div>
      </section>


      <main className={styles.supportContent}>
        <section className={styles.introSection}>

          <div className={styles.introText}>
            <p>
              <b>We want to make sure every piece of merch feels as good as it
              looks. </b> Quality is everything to us, whether it's a soft,
              long-lasting band tee or a hoodie you'll want to live in,
              we've handpicked every fabric and design in order to give
              you something that's worth wearing all the time. When you
              put on one of our shirts, we want it to feel like you're
              bringing a piece of the music with you, something that truly
              reflects the spirit of our music. This clothing is a way for you
              to show who you are to the world and reflect your interests to
              others through fashion.
            </p>
              {/* <br/> */}
            <p>
              Each design is carefully crafted with you in mind, blending
              unique artwork inspired by our songs, our journey, and, most
              importantly, our fans. From bold graphics to subtler,
              limited-edition pieces, we've made sure there's
              something for everyone. And because we want our merch to be
              accessible, we've kept our prices fair without compromising
              on quality. This is more than just merch, it's our way of
              giving back to you, the fans who make it all possible.
            </p>
          </div>
        </section>

        <section className={styles.policySection}>
  <div className={styles.policyHeading}>
    <p className={styles.eyebrow}>Customer Care</p>
    <h2>Refund & Shipping Policy</h2>
    <p>
      Find answers to common questions about returns, refunds, shipping, and
      pre-orders.
    </p>
  </div>

  <div className={styles.supportGrid}>
    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>01</span>
      <h3>How long will it take to get a refund?</h3>
      <p>
        Allow 3–5 business days for your return to be processed. Once
        processed, refunds typically appear in your account within 2–3 business
        days, though they can take up to 5 business days.
      </p>
    </article>

    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>02</span>
      <h3>What condition must returned items be in?</h3>
      <p>
        Items must be returned in their original condition and packaging with
        tags attached. They cannot be washed, worn, used, or altered.
      </p>
    </article>

    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>03</span>
      <h3>Who pays for my return?</h3>
      <p>
        Customers with US shipping addresses receive free return labels.
        International customers are responsible for return or exchange costs.
      </p>
    </article>

    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>04</span>
      <h3>When can I submit a return request?</h3>
      <p>
        Return requests must be submitted within 30 days of your order&apos;s
        delivery date.
      </p>
    </article>

    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>05</span>
      <h3>How do I request a return or exchange?</h3>
      <p>
        Contact our customer care team to submit a request. A team member will
        validate the request and begin your return process.
      </p>
    </article>

    <article className={styles.gridCard}>
      <span className={styles.cardNumber}>06</span>
      <h3>When will my order ship?</h3>
      <p>
        Orders usually ship within 2–3 business days. Pre-order timelines are
        listed on the product page and in your order confirmation email.
      </p>
    </article>

    <article className={`${styles.gridCard} ${styles.wideCard}`}>
      <span className={styles.cardNumber}>07</span>
      <h3>Pre-Order Policy</h3>
      <p>
        Pre-ordered items are not available to ship at the time of purchase.
        Check your confirmation email for estimated shipment details. While we
        aim to provide accurate delivery estimates, production delays can affect
        pre-orders and limited-edition items. If that happens, we will email you
        as soon as possible.
      </p>
    </article>
  </div>
</section>
      </main>
    </>
  );
}