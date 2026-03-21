export default function ProductDetailsSkeleton() {
  return (
    <section
      className="container min-[1001px]:h-[calc(100vh-100px)]"
      style={{ padding: "2.5% 10%", marginTop: "100px" }}
    >
      {/* Mobile title skeleton */}
      <div className="min-[1001px]:hidden mb-8 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-20 mb-3" />
        <div className="h-9 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-9 bg-gray-200 rounded w-1/2" />
      </div>

      <div className="flex justify-between max-[1000px]:flex-col gap-8 min-[1001px]:h-full">
        {/* Images skeleton */}
        <div className="flex-none w-full max-w-[45%] max-[1000px]:max-w-full min-[1001px]:flex min-[1001px]:flex-col min-[1001px]:h-full animate-pulse">
          <div className="min-[1001px]:flex-1 min-[1001px]:min-h-0 max-[1000px]:mb-1">
            <div className="w-full aspect-square max-[1000px]:max-h-[75vw] min-[1001px]:aspect-auto min-[1001px]:h-full rounded-[10px] bg-gray-200" />
          </div>
          {/* Thumbnails skeleton */}
          <div className="flex gap-2 mt-2 flex-shrink-0 min-[1001px]:h-[12%]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="max-[1000px]:w-[23.5%] max-[1000px]:aspect-square min-[1001px]:h-full min-[1001px]:aspect-square bg-gray-200 rounded-[10px] flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Details skeleton */}
        <div className="flex-1 animate-pulse min-[1001px]:overflow-y-auto">
          {/* Desktop SKU + title */}
          <div className="max-[1000px]:hidden space-y-3 mb-4">
            <div className="h-4 bg-gray-200 rounded w-20" />
            <div className="h-14 bg-gray-200 rounded w-4/5" />
            <div className="h-14 bg-gray-200 rounded w-1/2" />
          </div>
          {/* Price */}
          <div className="h-7 bg-gray-200 rounded w-28 max-[1000px]:mt-4 mb-3" />
          {/* Description lines */}
          <div className="space-y-2 py-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
          {/* Button */}
          <div className="h-12 bg-gray-200 rounded w-44 mt-4" />
        </div>
      </div>
    </section>
  );
}
