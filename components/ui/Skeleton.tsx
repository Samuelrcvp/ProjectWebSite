interface Props {
  className?: string;
}

export function Skeleton({ className = "" }: Props) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
    />
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-16 bg-gray-50 rounded-lg border border-gray-100 animate-pulse"
        />
      ))}
    </div>
  );
}
