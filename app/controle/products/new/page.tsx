export const dynamic = "force-dynamic";

import Link from "next/link";
import ProductForm from "@/components/products/ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/controle/products"
          className="text-gray-400 hover:text-[#9932cc] transition"
        >
          <i className="bx bx-arrow-back text-xl" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Novo Produto</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Preencha os dados para criar um produto
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <ProductForm />
      </div>
    </div>
  );
}
