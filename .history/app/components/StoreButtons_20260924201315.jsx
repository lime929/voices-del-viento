"use client";  
import { useRouter } from "next/navigation";

export default function StoreButtons() {
    const router = useRouter();
    return (
        <>
        <button
            onClick={() => router.replace('/store')}
            className=""
          >
            Store Home
          </button>
     <button
            onClick={() => router.replace('/store/apparel')}
            className=""
          >
            Apparel
          </button>
      <button
            onClick={() => router.replace('/store/music')}
            className=""
          >
            Music
          </button>
        </>


          )};