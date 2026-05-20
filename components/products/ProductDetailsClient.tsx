"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductDetailsClient({ product }: Props) {
  const images = product.images ?? [];
  const [mainImg, setMainImg] = useState(images[0]?.url ?? "");

  const priceFormatted =
    typeof product.price === "number"
      ? `R$${product.price.toFixed(2).replace(".", ",")}`
      : product.price;

  return (
    <section
      className="container min-[1001px]:h-[calc(100vh-100px)]"
      style={{ padding: "2.5% 10%", marginTop: "100px" }}
    >
      {/* Mobile title */}
      <div className="min-[1001px]:hidden mb-8">
        <h5 className="text-[#2c2c2c53] font-semibold">{product.sku}</h5>
        <h1 className="capitalize text-[35px] font-bold text-black mb-8">
          {product.name}
        </h1>
      </div>

      <div className="flex justify-between max-[1000px]:flex-col gap-8 min-[1001px]:h-full">
        {/* Images */}
        <div className="flex-none w-full max-w-[45%] max-[1000px]:max-w-full min-[1001px]:flex min-[1001px]:flex-col min-[1001px]:h-full">
          {images.length > 0 ? (
            <div className="min-[1001px]:flex-1 min-[1001px]:min-h-0 max-[1000px]:mb-1">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img.url}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="rounded-[10px] w-auto h-auto max-w-full max-[1000px]:max-h-[75vw] min-[1001px]:max-h-full"
                  style={{ display: img.url === mainImg ? "block" : "none" }}
                />
              ))}
            </div>
          ) : (
            <div className="w-full aspect-square bg-gray-200 rounded-[10px] flex items-center justify-center min-[1001px]:flex-1 min-[1001px]:min-h-0">
              <i className="bx bx-image text-6xl text-gray-400" />
            </div>
          )}
          {images.length > 1 && (
            <div className="flex gap-2 mt-2 flex-shrink-0 min-[1001px]:h-[12%]">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImg(img.url)}
                  className={`relative max-[1000px]:w-[23.5%] max-[1000px]:aspect-square min-[1001px]:h-full min-[1001px]:aspect-square overflow-hidden flex-shrink-0 cursor-pointer rounded-[10px] transition-transform duration-300 hover:scale-90 ${
                    img.url === mainImg
                      ? "ring-2 ring-[#9932cc] ring-offset-2"
                      : "opacity-70"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 max-[1000px]:block min-[1001px]:overflow-y-auto">
          <h5 className="text-[#2c2c2c53] max-[1000px]:hidden">
            {product.sku}
          </h5>
          <h1 className="capitalize text-[60px] font-bold text-black py-3 max-[1000px]:hidden">
            {product.name}
          </h1>
          <p className="text-[#111] text-xl font-semibold max-[1000px]:mt-4 max-[1000px]:text-[25px]">
            {priceFormatted}
          </p>
          <p className="text-gray-600 py-2 leading-relaxed">
            {product.description ||
              "Surpreenda alguém especial com presentes personalizados e cheios de alegria! Perfeitos para encantar e emocionar em qualquer ocasião."}
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5531994169997&text&type=phone_number&app_absent=0"
            className="inline-block text-[#111] text-base font-semibold capitalize border-2 border-[#111] px-6 py-3 transition-all duration-[420ms] hover:bg-black hover:text-white mt-4"
          >
            Faça seu pedido <i className="bx bx-right-arrow-alt align-middle" />
          </a>
        </div>
      </div>
    </section>
  );
}
