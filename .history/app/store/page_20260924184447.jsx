"use client";  
import { useRouter } from "next/navigation";
import { use } from "react"; 
import ClothingCard from "../components/ClothingCard";
import clothingArray from "./clothing.json";
import SearchBar from "../components/SearchBar";

// export const metadata = {
//   title: "All Clothing | White Rabbit Co.",
//   description: "",
// };

export default function CatalogPage() {
  return (
    <main className="min-h-screen pb-10">
      <div className="min-h-screen rounded-2xl overflow-hidden pt-9 pb-12 px-4 md:px-8 max-w-[95%] mx-auto">
      <h1 className="text-xl font-display mb-6 ">Clothing</h1>
      <button
            onClick={() => router.replace('/news')}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Clothing
          </button>
      <SearchBar />
      {/* </div> */}

        {/* CATALOG GRID */}
        <div className="bg-[#B0B09A] p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* iterates through each item using json file's data and ClothingCard's structure */}
          {clothingArray.map((item) => (
            <ClothingCard key={item._id} item={item} />
          ))}
        </div>
        </div>
      </div>
    </main>
  )
}
