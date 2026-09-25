import { Link } from "next/link";

export default function StoreButtons() {
    return (
        <nav>
          <Link
          href="/store"
          className=""
          >Store Home</Link>

          <Link
          href="/store/apparel"
          className=""
          >Apparel</Link>

          <Link
          href="/store"
          className="music"
          >Music</Link>
        </nav>
          )};