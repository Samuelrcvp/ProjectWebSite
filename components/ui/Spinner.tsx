interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-4",
};

export default function Spinner({ size = "md", className = "" }: Props) {
  return (
    <div
      className={`${sizes[size]} border-[#9932cc] border-t-transparent rounded-full animate-spin ${className}`}
    />
  );
}
