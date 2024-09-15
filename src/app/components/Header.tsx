"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Nav from "./Nav";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNavActive(!navActive);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setNavActive(false);
      }
    };

    if (navActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navActive]);

  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]"
          >
            <Image
              src="/assets/logo.svg"
              fill
              alt="Logo"
              className="object-contain"
            />
          </Link>

          {/* Nav trigger btn*/}
          <button
            onClick={(e) => handleNavClick(e)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60]"
          >
            {/* 1 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 outline-none ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            {/* 2 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 outline-none ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            {/* 3 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 outline-none ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* Nav */}

      <AnimatePresence mode="wait">
        {navActive && (
          <div ref={navRef}>
            <Nav />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
