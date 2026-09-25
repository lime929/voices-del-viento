"use client";  
import { useRouter } from "next/navigation";
import { use } from "react"; 
import Image from "next/image";
import musicArray from "../../music.json";
import { FaStar } from "react-icons/fa";

export default function ItemPage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const item = musicArray.find((m) => m._id === id);

  if (!item) {
    return (
      <main className="min-h-screen bg-(--color-band-bg) px-4 py-20 text-zinc-100">
        <div className="mx-auto max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          <h1 className="mb-3 text-2xl font-bold">Item not found</h1>
          <p className="mb-6 text-zinc-400">This product could not be loaded.</p>
          <button
            onClick={() => router.replace('/store')}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Back to Catalog
          </button>
        </div>
      </main>
    );
  }

//   const colorMap = {
//  Black: '#000000',
//  White: '#fff',
//  'Charcoal Gray': '#212528',
//  'Washed Gray': '#464F4F',
//  'Dark Gray': '#111416',
//  Navy: '#0d0d3a',
//  Multicolor: '#000',
//  'Light Blue': '#7AADD0',
//  Denim: '#112343',
//  Burgandy: '#310909',
//  Orange: '#C66C4B'
// };

  return (
    <main className="min-h-screen bg-(--color-band-bg) text-zinc-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* back button */}
        <button 
          onClick={() => router.replace('/store/music')}
          className="group inline-flex items-center gap-2 mb-12 bg-(--color-band-ink) hover:bg-zinc-800 text-zinc-200 px-6 py-3 rounded-lg font-bold text-base border border-zinc-700 hover:border-zinc-500 hover:shadow-lg transition-all duration-300"
        >
          Back to Catalog
        </button>

        <div className="grid gap-8 lg:grid-cols-2 items-start lg:gap-12">
          
          <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden ring-1 ring-zinc-800 shadow-xl">
            {/* item img */}
            <Image
              src={item.images[0]} 
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            {/* item info */}
            <h1 className="text-3xl md:text-4xl font-bold text-(--color-band-ink) mb-4 leading-tight">
              {item.name}
            </h1>
              <div className="text-3xl font-bold text-(--color-band-ink) mb-6 flex items-center gap-2">
              ${item.price}
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-(--color-band-olive) uppercase tracking-wide font-semibold">Format</span>
                <span className="font-bold text-(--color-band-olive)">{item.format}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-(--color-band-ink)">
            </div>

            <button className="w-full bg-(--color-band-ink) hover:bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-500 text-(--color-band-cream) font-bold text-lg py-4 px-6 rounded-xl uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
              Add to Cart
            </button>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
        {/* item desc */}
          <p className="font-mono leading-relaxed text-(--color-band-ink) max-w-xl">
            {item.description}
          </p>
            </div>
          </div>
        </div>

       
      </div>
    </main>
  );
}
