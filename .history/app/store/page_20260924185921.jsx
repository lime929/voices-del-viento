"use client";  
import ClothingCard from "../components/ClothingCard";
import clothingArray from "./clothing.json";
import SearchBar from "../components/SearchBar";

export default function CatalogPage() {
  return (
    <main className="min-h-screen pb-10">
      <div className="min-h-screen rounded-2xl overflow-hidden pt-9 pb-12 px-4 md:px-8 max-w-[95%] mx-auto">
     <StoreButtons/>
      <SearchBar />

        {/* CATALOG GRID */}
        <div className="bg-[#B0B09A] p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* iterates through last 3 items using json file's data and ClothingCard's structure */}
          {clothingArray.slice(-3).map((item) => (
            <ClothingCard key={item._id} item={item} />
          ))}
          
          
        </div>
        </div>
      </div>
    </main>
  )
}
