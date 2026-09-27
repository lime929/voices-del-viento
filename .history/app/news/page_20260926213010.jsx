import styles from "./page.module.css";
import Image from "next/image";
import Post from "../components/Post";
import posts from "./posts.json";
import banner from "../../public/images/news/banner.jpg";

export const metadata = {
  title: "Voces del Viento | News",
  description: "Stay up to date with the latest news and updates from Voces del Viento.",
    keywords: [
    "Voces del Viento",
    "news",
    "Music news",
    "band updates",
    "Concert announcements",
    "Album releases",
    "Live performances",
    "Live updates",
  ]
}

export default function NewsPage() {
  return (
    <>
    <div className={styles.imgContainer}>
      <Image
        src={banner}
        alt="Band with Mariachi outfits performing on stage"
        sizes="100vw"
        className={styles.bannerImage}
        priority
      />
</div>
      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>Music News</h2>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}