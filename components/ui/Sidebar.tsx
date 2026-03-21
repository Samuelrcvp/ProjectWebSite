"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/controle/products", label: "Produtos", icon: "bx-package" },
  { href: "/controle/categories", label: "Categorias", icon: "bx-category" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      router.push("/petten");
    }
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-purple-100">
        <Link href="/" target="_blank">
          <Image
            src="/imgs/logoSite.svg"
            alt="Carapuça"
            width={120}
            height={48}
            unoptimized
            style={{ width: 120, height: "auto" }}
          />
        </Link>
      </div>

      <div className="px-4 py-2.5 border-b border-purple-100">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#9932cc] transition font-medium"
        >
          <i className="bx bx-link-external text-sm" />
          Ver site
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                active
                  ? "bg-[#9932cc] text-white"
                  : "text-gray-700 hover:bg-[#f3f0f6] hover:text-[#9932cc]"
              }`}
            >
              <i className={`bx ${item.icon} text-xl`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-purple-100">
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-all disabled:opacity-50"
        >
          <i className="bx bx-log-out text-xl" />
          {loggingOut ? "Saindo..." : "Sair"}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white border-r border-purple-100 shadow-sm flex-shrink-0 overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile header bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-purple-100 flex items-center justify-between px-4 py-3 shadow-sm">
        <Link href="/" target="_blank">
          <Image
            src="/imgs/logoSite.svg"
            alt="Carapuça"
            width={100}
            height={40}
            unoptimized
            style={{ width: 100, height: "auto" }}
          />
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-[#9932cc] p-2"
        >
          <i className="bx bx-menu text-3xl" />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <i className="bx bx-x text-3xl" />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
