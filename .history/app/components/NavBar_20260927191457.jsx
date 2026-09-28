'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube, FaTwitter,FaSpotify } from "react-icons/fa";
import logoIcon from '../../app/icon.png';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-band-ink border-b border-band-olive sticky top-0 z-50">
        <div className="px-4 lg:px-6">
          <div className="relative flex h-24 items-center justify-between">
            
            {/* Mobile menu button: always positioned absolute left and hidden on md+ screens */}
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-band-cream hover:text-band-gold hover:bg-band-olive/20 focus:outline-none focus:ring-2 focus:ring-band-gold"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center md:justify-start">
              <Link href="/" className="flex flex-shrink-0 items-center gap-2 hover:opacity-90 transition">
                <Image
                  src={logoIcon}
                  alt="Voices Del Viento Logo"
                  width={50}
                  height={50}
                  priority
                />
              
                <span className="hidden font-display text-4xl font-bold uppercase tracking-wide text-band-cream transition-colors hover:text-band-gold md:block md:mr-9">
                Voces Del Viento
                </span>
              </Link>
              

              <div className="hidden md:ml-6 md:block md:pt-2">
                <div className="flex space-x-4 lg:space-x-6">
                  <Link
                    href="/store"
                    className={`${
                      pathname === "/store" ? "border-b-2 border-band-gold text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-band-gold hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
                  >
                    Store
                  </Link>
                  <Link
                    href="/tour#tour-bottom"
                    className={`${
                      pathname === "/tour" ? "border-b-2 border-band-gold text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-band-gold hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
                  >
                    Tour
                  </Link>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about" ? "border-b-2 border-band-gold text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-band-gold hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
                  >
                    About
                  </Link>
                  <Link
                    href="/news"
                    className={`${
                      pathname === "/news" ? "border-b-2 border-band-gold text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-band-gold hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
                  >
                    News
                  </Link>
                  <Link
                    href="/support"
                    className={`${
                      pathname === "/support" ? "border-b-2 border-band-gold text-band-gold" : "border-b-2 border-transparent text-band-cream hover:text-band-gold hover:border-band-gold"
                    } text-lg font-semibold pb-1 transition-all`}
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:ml-6 md:pr-0">
              <div className="flex items-center gap-2 text-band-cream">
             <a href="https://www.facebook.com/" target="_blank" className="relative p-2 rounded-full transition-transform duration-250 ease-in-out hover:scale-110 hover:text-band-gold">
                    <FaFacebook className="h-6 w-6" />
                </a>
             <a href="https://www.instagram.com/" target="_blank" className="relative p-2 rounded-full transition-transform duration-250 ease-in-out hover:scale-110 hover:text-band-gold">
                    <FaInstagram className="h-6 w-6"/>
                </a>
             <a href="https://www.youtube.com/" target="_blank" className="relative p-2 rounded-full transition-transform duration-250 ease-in-out hover:scale-110 hover:text-band-gold">
                    <FaYoutube className="h-6 w-6" />
                </a>
             <a href="https://www.x.com/" target="_blank" className="relative p-2 rounded-full transition-transform duration-250 ease-in-out hover:scale-110 hover:text-band-gold">
                    <FaTwitter className="h-6 w-6" />
                </a>
            <a href="https://www.spotify.com/" target="_blank" className="relative p-2 rounded-full transition-transform duration-250 ease-in-out hover:scale-110 hover:text-band-gold">
                    <FaSpotify className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-band-ink/95 backdrop-blur-md border-t border-band-olive px-4 pb-4 pt-2 space-y-1">
            <Link
              href="/store"
              className={`${
                pathname === "/store" ? "bg-band-olive/20 text-band-cream" : "border-b-2 border-transparent text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/tour#tour-bottom"
              className={`${
                pathname === "/tour" ? "bg-band-olive/20 text-band-cream" : "border-b-2 border-transparent text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tour
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "bg-band-olive/20 text-band-cream" : "border-b-2 border-transparent text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/news"
              className={`${
                pathname === "/news" ? "bg-band-olive/20 text-band-cream" : "border-b-2 border-transparent text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/support"
              className={`${
                pathname === "/support" ? "bg-band-olive/20 text-band-cream" : "border-b-2 border-transparent text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
