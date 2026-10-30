"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoIcon from "../../app/icon.png";

const navigationLinks = [
  { href: "/store", label: "Store" },
  { href: "/tour", label: "Tour" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/support", label: "Support" },
];

const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebook },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.youtube.com/", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.x.com/", label: "X", Icon: FaTwitter },
  { href: "https://www.spotify.com/", label: "Spotify", Icon: FaSpotify },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-band-olive bg-band-ink">
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between sm:h-24">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 transition hover:opacity-90"
          >
            <Image
              src={logoIcon}
              alt="Voices Del Viento Logo"
              width={44}
              height={44}
              priority
            />
            <span className="whitespace-nowrap font-display text-base font-bold uppercase tracking-wide text-band-cream transition-colors hover:text-band-gold min-[360px]:text-xl sm:text-3xl xl:text-4xl">
              Voces Del Viento
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <div className="flex items-center gap-4 xl:gap-6">
              {navigationLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b-2 pb-1 text-base font-semibold transition-all xl:text-lg ${
                      isActive
                        ? "border-band-gold text-band-gold"
                        : "border-transparent text-band-cream hover:border-band-gold hover:text-band-gold"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <SocialLinks className="flex items-center gap-1 text-band-cream" />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-band-cream transition hover:bg-band-olive/20 hover:text-band-gold focus:outline-none focus:ring-2 focus:ring-band-gold lg:hidden"
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaTimes aria-hidden="true" className="h-6 w-6" />
            ) : (
              <FaBars aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-band-olive bg-band-ink/95 px-4 pb-5 pt-2 backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Main navigation">
            {navigationLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`mb-1 block rounded-md px-3 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-band-olive/20 text-band-gold"
                      : "text-band-cream hover:bg-band-olive/20 hover:text-band-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <SocialLinks className="mt-3 flex items-center justify-center gap-3 border-t border-band-olive pt-3 text-band-cream" />
        </div>
      )}
    </nav>
  );
}

function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-full p-2 transition-transform duration-200 ease-in-out hover:scale-110 hover:text-band-gold focus:outline-none focus:ring-2 focus:ring-band-gold"
        >
          <Icon aria-hidden="true" className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
