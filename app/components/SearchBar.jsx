import { Search, X, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left-side filter/category controls */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border bg-(--color-band-olive) border-zinc-700 px-3 py-2 text-sm text-(--color-band-cream) transition hover:border-(--color-band-gold) hover:text-white"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filter & Sort</span>
        </button>

        <button
          type="button"
          className="rounded-lg border bg-(--color-band-olive) border-zinc-700 px-3 py-2 text-sm text-(--color-band-cream) transition hover:border-(--color-band-gold) hover:text-white"
        >
          Department
        </button>

        <button
          type="button"
          className="rounded-lg border bg-(--color-band-olive) border-zinc-700 px-3 py-2 text-sm text-(--color-band-cream) transition hover:border-(--color-band-gold) hover:text-white"
        >
          Size
        </button>

        <button
          type="button"
          className="rounded-lg border bg-(--color-band-olive) border-zinc-700 px-3 py-2 text-sm text-(--color-band-cream) transition hover:border-(--color-band-gold) hover:text-white"
        >
          Color
        </button>
      </div>

      {/* Right-side search bar */}
      <div className="relative w-full lg:w-102">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-band-cream)" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-(--color-band-gold) bg-(--color-band-olive) py-2.5 pl-10 pr-10 text-sm text-white placeholder-(--color-band-cream) outline-none transition focus:border-(--color-band-ink) focus:ring-2 focus:ring-(--color-band-ink)"
        />

        <button
          type="button"
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-band-cream) transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}