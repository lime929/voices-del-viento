'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function StoreLink() {
    const pathname = usePathname();

    return (
       <>
        <nav className="flex gap-5 flex-wrap font-display py-6">
          <Link
          href="/store"
          >Store Home</Link>

          <Link
          href="/store/apparel"
          >Apparel</Link>

          <Link
          href="/store/music"
          className={`border-b-2 pb-1 text-2xl font-semibold text-band-ink transition-all hover:border-band-olive hover:text-band-olive ${
    pathname === "/store/music"
      ? "border-band-olive text-band-olive"
      : "border-transparent"
  }`}
          >Music</Link>
        </nav>
        </>
          )};