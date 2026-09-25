import Link from "next/link";

export default function StoreLink() {
    return (
       <>
        <nav className="flex gap-5 flex-wrap font-display font-bold py-6 text-2xl hover:text-(--color-band-olive)">
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