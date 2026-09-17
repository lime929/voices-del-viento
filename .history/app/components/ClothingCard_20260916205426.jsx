import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {
  return (
    <article className="group bg-var(--color-)">
      <div className="">
        {/* Item image */}
        <Image
          src={item.images?.[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectPosition: item.imagePosition ?? "50%" }}
          className=""
        />
      </div>

      {/* Item information */}
      <div className="">
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