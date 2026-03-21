import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f0f6] px-4 text-center">
      <div className="mb-6">
        <span className="text-[120px] font-black text-[#9932cc] leading-none select-none">
          404
        </span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Página não encontrada
      </h1>
      <p className="text-gray-500 text-base mb-8 max-w-md">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#9932cc] text-white font-semibold rounded-lg px-6 py-3 text-sm hover:bg-[#7a1fa8] transition"
      >
        <i className="bx bx-home text-lg" />
        Voltar ao início
      </Link>
    </div>
  );
}
