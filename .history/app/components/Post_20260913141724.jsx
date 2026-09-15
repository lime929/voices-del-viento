import styles from "../news/page.module.css";
import { FaGuitar } from "react-icons/fa";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className={styles.newsContent}>
      <div className={styles.newsPost}>
        <div className={styles.postHeader}>
          <span className={styles.postLogo}>
            <FaGuitar className={styles.guitarIcon} aria-hidden="true" />
          </span>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postMeta}>{post.meta}</p>
        </div>

        {post.description && (
          <p className={styles.postDescription}>{post.description}</p>
        )}

        {post.paragraphs?.map((paragraph, index) => (
          <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
        ))}

        {post.link && (
          <p>
            <a href={post.link.href} className={styles.newsPostLink}>
              {post.link.text}
            </a>
          </p>
        )}

        {post.extraLine && <p>{post.extraLine}</p>}

        {post.image && (
          <Image
            src={post.image.src}
            alt={post.image.alt}
            sizes="100vw"
            className={styles.postImage}
          />
        )}
      </div>
    </div>
  );
}
