export default function Footer() {
  return (
    <footer className="border-t border-band-olive bg-band-ink py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 text-sm md:flex-row">
          {/* Copyright */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="font-semibold text-band-cream">
              © {new Date().getFullYear()}{' '}
              <span className="font-black text-band-cream">Voices Del Viento</span>
            </p>
            <p className="mt-1 font-mono text-xs tracking-wider text-band-gold">
              Made with Next.js & Tailwind by Liliana Mendez
            </p>
          </div>

          {/* Right links */}
          <nav className="order-1 flex items-center gap-6 md:order-2">
            <a
              href="/store"
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-band-cream transition-all duration-200 hover:border-band-gold hover:text-band-gold"
            >
              Store
            </a>
            <a
              href="/tour"
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-band-cream transition-all duration-200 hover:border-band-gold hover:text-band-gold"
            >
              Tour
            </a>
            <a
              href="/about"
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-band-cream transition-all duration-200 hover:border-band-gold hover:text-band-gold"
            >
              About
            </a>
            <a
              href="/news"
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-band-cream transition-all duration-200 hover:border-band-gold hover:text-band-gold"
            >
              News
            </a>
            <a
              href="/support"
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-band-cream transition-all duration-200 hover:border-band-gold hover:text-band-gold"
            >
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
