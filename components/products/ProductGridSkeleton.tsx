export default function ProductGridSkeleton() {
  return (
    <div
      className="grid gap-8"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, auto))" }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="max-w-[22rem] animate-pulse">
          <div className="w-full aspect-square bg-gray-200 rounded-[10px]" />
          <div className="mt-2 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
