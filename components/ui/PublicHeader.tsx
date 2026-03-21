"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PublicHeader() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function handleSearch() {
    if (!searchOpen) {
      setSearchOpen(true);
      return;
    }
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchOpen(false);
      return;
    }

    const normalized = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const cards = document.querySelectorAll<HTMLElement>(".product-card");
    let found = false;
    cards.forEach((card) => {
      const name = card.dataset.name ?? "";
      const normalizedName = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (normalizedName.includes(normalized)) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    });

    if (!found) {
      setSearchError(true);
      setTimeout(() => setSearchError(false), 500);
    }
  }

  const navLinks = [
    { href: "/#Home", label: "Início" },
    { href: "/#Produtos", label: "Produtos" },
    { href: "/#Sobre", label: "Sobre" },
    { href: "/#Contato", label: "Contatos" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed w-full top-0 left-0 z-[2] flex items-center justify-between px-[10%] py-5 transition-all duration-500 ${
        sticky ? "bg-white shadow-[0_0_10px_rgb(153,50,204)]" : ""
      } max-[1110px]:px-[3%]`}
    >
      <Link href="/" id="logo">
        <Image
          src="/imgs/logoSite.png"
          alt="logo Carapuça Presentes"
          width={123}
          height={62}
          quality={100}
          unoptimized
          style={{ width: 123, height: "auto" }}
        />
      </Link>

      <ul
        className={`flex max-[855px]:flex-col max-[855px]:absolute max-[855px]:top-full max-[855px]:w-[300px] max-[855px]:h-[130vh] max-[855px]:bg-[rgba(255,255,255,0.3)] max-[855px]:backdrop-blur-[10px] max-[855px]:items-center max-[855px]:py-[120px] max-[855px]:px-[30px] max-[855px]:transition-all max-[855px]:duration-[420ms] ${
          menuOpen ? "max-[855px]:right-0" : "max-[855px]:-right-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[#2c2c2c] text-base capitalize px-5 py-2.5 font-semibold hover:text-[#9932cc] hover:border-b-2 hover:border-[#9932cc] max-[855px]:block max-[855px]:my-[18px]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative flex items-center gap-4">
        <div className="relative flex items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Pesquisar Produto"
            className={`px-2.5 py-2.5 border-none outline-none rounded-[20px] transition-all duration-[450ms] ${
              searchOpen
                ? "visible w-[200px] max-[855px]:w-[140px]"
                : "invisible w-0"
            } ${searchError ? "animate-shake bg-[#ffcccc]" : ""}`}
          />
          <i
            className="bx bx-search text-[25px] cursor-pointer text-[#2c2c2c] mr-5 hover:scale-110 hover:text-[#9932cc] transition-all"
            onClick={handleSearch}
          />
        </div>
        <div
          className="min-[855px]:hidden cursor-pointer z-[10001]"
          id="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          <i className="bx bx-menu text-[35px] text-[#2c2c2c]" />
        </div>
      </div>
    </header>
  );
}
