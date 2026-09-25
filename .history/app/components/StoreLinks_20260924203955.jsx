'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function StoreLink() {
    const pathname = usePathname();

    return (
       <>
        <nav className="flex gap-5 flex-wrap font-display font-bold py-6 text-2xl text-(--color-band-ink)">
          <Link
          href="/store"
          >Store Home</Link>

          <Link
          href="/store/apparel"
          >Apparel</Link>

          <Link
          href="/store/music"
          className={`${
                      pathname === "/store/music" ? "border-b-2 border-band-ink text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-(--color-band-olive) hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
          >Music</Link>
        </nav>
        </>
          )};