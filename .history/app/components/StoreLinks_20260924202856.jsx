import Link from "next/link";

export default function StoreLink() {
    return (
       <>
        <nav className="flex gap-2">
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