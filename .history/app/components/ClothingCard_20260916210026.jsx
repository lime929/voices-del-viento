import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {
  return (
    <article className="group bg-var(--color-band-bg)/70 rounded 2xl shadow-md ring-1 ring-var(--color-band-ink) overflow-hidden h-fit w-fill mx-auto">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-2xl">
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
        <h3 className="">{item.name}</h3>

        <p className="">
          ${item.price} • {item.sizes ? item.sizes.join(", ") : "One Size"}
        </p>

        <p className="">{item.description}</p>

        <Link href={`/store/${item._id}`} className="">
          View Details
        </Link>
      </div>
    </article>
  );
}