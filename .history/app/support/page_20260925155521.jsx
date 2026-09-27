import banner from "../../public/images/support/banner.jpg";
import Image from "next/image";
import styles from "./page.module.css";

export default function SupportPage() {
    return (
        <>

        <h1 className={styles.supportTitle}>For the Fans...</h1>
         <Image
        src={banner}
        alt="Band members holding up instraments"
        sizes="100vw"
        className={styles.bannerImage}
        priority
      />
       <div className="">
  <h2>For the Fans</h2>

  <div className="">
    <p className="">
      We want to make sure every piece of merch feels as good as it looks.
      Quality is everything to us—whether it's a soft, long-lasting band
      tee or a hoodie you'll want to live in, we've handpicked every
      fabric and design in order to give you something that's worth wearing
      all the time. When you put on one of our shirts, we want it to feel like
      you're bringing a piece of the music with you, something that truly
      reflects the spirit of our music. This clothing is a way for you to show
      who you are to the world and reflect your interests to others through
      fashion.
    </p>

    <p className="">
      Each design is carefully crafted with you in mind, blending unique artwork
      inspired by our songs, our journey, and, most importantly, our fans. From
      bold graphics to subtler, limited-edition pieces, we've made sure
      there's something for everyone. And because we want our merch to be
      accessible, we've kept our prices fair without compromising on
      quality. This is more than just merch—it's our way of giving back to
      you, the fans who make it all possible.
    </p>
  </div>

  


<div className={styles.supportGrid}>
        <div className={styles.gridCard}>
            <h4>How long will it take to get a refund for my returned item?</h4>
            <p>Allow 3–5 business days for your return to be processed. Refunds
      typically take 2–3 business days to appear in your account once
      they've been processed, but sometimes can take up to 5 business days.</p>
        </div>
        <div className={styles.gridCard}>
            <h4>Do you accept returns of products regardless of condition?</h4>
    <p>
      Items must be returned in their original condition and packaging, with
      tags attached. Returned items cannot be washed, worn, used, or altered in
      any way. Any items decided as used or altered in any way will not be
      eligible for a refund or exchange.
    </p>
        </div>
        <div className={styles.gridCard}>
            <h4>Who pays for my return?</h4>
    <p>
      For customers with shipping addresses within the US, free return labels
      will be provided. International customers are responsible for covering any
      costs associated with returns or exchanges.
    </p>
        </div>
        <div className={styles.gridCard}>
            <h4>How long after my order can I submit a return request?</h4>
    <p>
      Return requests must be made within 30 days of the date your order is
      delivered.
    </p>
        </div>
        <div className={styles.gridCard}>
             <h4>How do I return my order for a refund or an exchange?</h4>
    <p>
      Please contact us to submit a return request and a member of our customer
      care team will reach back to validate and initiate your return.
    </p>
        </div>
        <div className={styles.gridCard}>
            <h4>When will my order ship?</h4>
    <p>
      Orders usually ship within 2-3 business days. Shipping and delivery dates
      aren't guaranteed unless otherwise specified. Pre-ordered items are
      not available to ship at the time of purchase. Shipping timelines on
      pre-orders are detailed in the product description, as well as in your
      confirmation email.
    </p>
        </div>
        <div className={styles.gridCard}>
            <h4>When will my order ship?</h4>
    <p>
      Orders usually ship within 2-3 business days. Shipping and delivery dates
      aren't guaranteed unless otherwise specified. Pre-ordered items are
      not available to ship at the time of purchase. Shipping timelines on
      pre-orders are detailed in the product description, as well as in your
      confirmation email.
    </p></div>
        <div className={styles.gridCard}>
            <h4>Pre Order Policy</h4>
            <p>
      Please check your confirmation email for details on when pre-order items
      will ship. Shipping and delivery dates on these items are not guaranteed
      unless otherwise noted. While we make every effort to communicate accurate
      delivery estimates around your orders, unanticipated production delays for
      pre-order and limited-edition items do happen. If an item in your order
      has been affected by a production delay, we will notify you via email as
      soon as possible.
    </p>
        </div>
        <div className={styles.gridCard}></div>
        <div className={styles.gridCard}></div>
        <div className={styles.gridCard}></div>
        <div className={styles.gridCard}></div>
        
</div>

  
        </>

);
}