import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {
  return (
            <Link href={`/store/apparel/${item._id}`}>

<article className="group flex h-full flex-col bg-(--color-band-bg) overflow-hidden">
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
      <div className="flex flex-1 flex-col pt-3 px-3 pb-4 text-center">
        <h3 className="font-bold text-(--color-band-ink) text-base line-clamp-2 mb-1">{item.name}</h3>

        <p className="text-sm text-(--color-band-olive) mb-3">
          ${item.price}
        </p>
      </div>
    </article>
            </Link>
  );
}