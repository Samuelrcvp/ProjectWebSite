export const dynamic = "force-dynamic";

import Link from "next/link";
import ProductTable from "@/components/products/ProductTable";

export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Gerencie os produtos do catálogo
          </p>
        </div>
        <Link
          href="/controle/products/new"
          className="flex items-center gap-2 bg-[#9932cc] text-white font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-[#7a1fa8] transition"
        >
          <i className="bx bx-plus text-lg" />
          Novo Produto
        </Link>
      </div>
      <ProductTable />
    </div>
  );
}
