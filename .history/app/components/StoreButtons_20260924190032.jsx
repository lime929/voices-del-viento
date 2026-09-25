"use client";  
import { useRouter } from "next/navigation";

export default function StoreButtons() {
    const router = useRouter();
    return (
        <>
        <button
            onClick={() => router.replace('/store')}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Store Home
          </button>
     <button
            onClick={() => router.replace('/store/apparel')}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Apparel
          </button>
      <button
            onClick={() => router.replace('/store/music')}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Music
          </button>
        </>


          )};