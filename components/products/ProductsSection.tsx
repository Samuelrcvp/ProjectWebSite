"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product, Category } from "@/types";
import ProductGridSkeleton from "./ProductGridSkeleton";

const CATEGORIES = [
  { value: "all", label: "Todos" },
  { value: "box", label: "Box's" },
  { value: "mugs", label: "Canecas" },
  { value: "ballon", label: "Balões" },
  { value: "outros", label: "Outros" },
];

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [pRes, cRes] = await Promise.all([
          fetch("/api/products/public"),
          fetch("/api/categories/public"),
        ]);
        const pData = await pRes.json();
        const cData = await cRes.json();
        if (pData.success) setProducts(pData.data as Product[]);
        if (cData.success) setCategories(cData.data as Category[]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const displayCategories =
    categories.length > 0
      ? [
          { value: "all", label: "Todos" },
          ...categories.map((c) => ({ value: c.id, label: c.name })),
        ]
      : CATEGORIES;

  const filtered =
    selected === "all"
      ? products
      : products.filter((p) => {
          if (categories.length > 0) return p.categoryId === selected;
          return p.categoryId === selected;
        });

  return (
    <>
      {/* Filter pills */}
      <section className="flex justify-center items-center px-[10%] max-[1110px]:px-[3%] py-4">
        <div className="flex justify-center items-center rounded-lg bg-[#EEE] shadow-[0_0_0_1px_rgba(0,0,0,0.06)] p-1 text-[17px] w-auto mx-auto">
          <div className="flex gap-2 flex-wrap">
            {displayCategories.map((cat) => (
              <label key={cat.value} className="flex-1 text-center">
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={selected === cat.value}
                  onChange={() => setSelected(cat.value)}
                  className="hidden"
                />
                <span
                  className={`flex cursor-pointer items-center justify-center rounded-lg border-none px-2 py-2 text-slate-700 transition-all duration-150 ${
                    selected === cat.value ? "bg-white font-semibold" : ""
                  }`}
                >
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="Produtos" className="trending-product px-[10%] max-[1110px]:px-[3%] py-10">
        {loading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid gap-6 grid-cols-2 min-[640px]:grid-cols-3 min-[1110px]:grid-cols-4">
            {filtered.map((product) => {
              const mainImage = product.images?.[0]?.url ?? product.images?.[0]?.url ?? "";
              return (
                <Link
                  key={product.id}
                  href={`/produto/${product.id}`}
                  className="product-card relative w-full transition-all duration-[400ms] cursor-pointer block"
                  data-name={product.name}
                  data-sku={product.sku}
                  data-category={product.categoryId}
                >
                  <div className="relative">
                    {mainImage ? (
                      <Image
                        src={mainImage}
                        alt={product.name}
                        width={400}
                        height={500}
                        className="w-full h-auto transition-all duration-[400ms] rounded-[10px] hover:scale-90"
                        sizes="(max-width: 1110px) 50vw, 260px"
                        style={{ height: "auto" }}
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gray-200 rounded-[10px] flex items-center justify-center">
                        <i className="bx bx-image text-4xl text-gray-400" />
                      </div>
                    )}
                    <div className="absolute top-[13px] left-[13px]">
                      <h5 className="text-white text-[12px] font-semibold uppercase bg-[#27b737] px-[5px] py-[2px] rounded-[5px]">
                        {product.sku}
                      </h5>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1">
                    <h4 className="text-[#111] text-base capitalize font-semibold">
                      {product.name}
                    </h4>
                    <p className="text-[#151515] text-sm font-black">
                      {typeof product.price === "number"
                        ? `R$${product.price.toFixed(2).replace(".", ",")}`
                        : product.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
