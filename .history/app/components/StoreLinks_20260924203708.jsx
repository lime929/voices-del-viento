import Link from "next/link";

export default function StoreLink() {
    return (
       <>
        <nav className="flex gap-5 flex-wrap font-display font-bold py-6 text-2xl text-(--color-band-ink)">
          <Link
          href="/store"
          className="hover:text-(--color-band-olive)"
          >Store Home</Link>

          <Link
          href="/store/apparel"
          className="hover:text-(--color-band-olive)"
          >Apparel</Link>

          <Link
          href="/store/music"
          className="hover:text-(--color-band-olive) active:text-(--color-band-olive)"
          {({ isActive }) => 
    isActive ? "text-blue-600 font-bold" : "text-gray-600"
  }
          >Music</Link>
        </nav>
        </>
          )};