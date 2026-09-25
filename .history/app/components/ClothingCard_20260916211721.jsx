import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {
  return (
<article className="group flex h-full flex-col bg-[var(--color-band-bg)] rounded-2xl shadow-md overflow-hidden">
      <div className="relative w-full aspect-[4/4]">
        {/* Item image */}
        <Image
          src={item.images?.[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectPosition: item.imagePosition ?? "50%" }}
          className="object-cover"
        />
      </div>

      {/* Item information */}
      <div className="w-full rounded-b-2xl pt-3 px-3 pb-4 flex flex-col">
        <h3 className="font-bold text-(--color-band-cream) text-base line-clamp-2 mb-1">{item.name}</h3>

        <p className="text-xs text-(--color-band-olive) mb-3">
          ${item.price} • {item.sizes ? item.sizes.join(", ") : "One Size"}
        </p>

        <p className="text-(--color-band-cream) line-clamp-2 mb-2 text-xs">{item.description}</p>

        <Link href={`/store/${item._id}`} className="group relative block w-[60%] mx-auto mt-2 text-[14px] font-normal text-center py-1 rounded-xl bg-(--color-band-olive)/95 border-2 border-(--color-band-gold)/50 text-(--color-band-cream) shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden">
          View Details
        </Link>
      </div>
    </article>
  );
}