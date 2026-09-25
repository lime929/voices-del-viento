import Link from "next/link";

export default function StoreLink() {
    return (
       <>
        <nav className="gap: 0.75rem ">
          <Link
          href="/store"
          className=""
          >Store Home</Link>

          <Link
          href="/store/apparel"
          className=""
          >Apparel</Link>

          <Link
          href="/store/music"
          className=""
          >Music</Link>
        </nav>
        </>
          )};