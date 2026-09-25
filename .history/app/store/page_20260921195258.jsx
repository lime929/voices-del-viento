import ClothingCard from "../components/ClothingCard";
import clothingArray from "./clothing.json";
import SearchBar from "../components/SearchBar";

export const metadata = {
  title: "All Clothing | White Rabbit Co.",
  description: "",
};

export default function CatalogPage() {
  return (
    <main className="min-h-screen pb-10">
      <div className="h-12" />
      <div className="min-h-screen rounded-2xl overflow-hidden pt-9 pb-12 px-4 md:px-8 max-w-[95%] mx-auto">
      {/* <div className="grid grid-cols-2 items-center "> */}
      <h1 className="text-xl font-display mb-8 ">All Clothing</h1>
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
