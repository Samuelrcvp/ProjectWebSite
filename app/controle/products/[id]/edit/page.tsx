import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdminDb } from "@/lib/firebase-admin";
import type { Product } from "@/types";
import ProductForm from "@/components/products/ProductForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  let product: Product | null = null;
  try {
    const doc = await getAdminDb().collection("products").doc(id).get();
    if (doc.exists) {
      const data = doc.data()!;
      product = {
        id: doc.id,
        sku: data.sku as string,
        name: data.name as string,
        price: data.price as number,
        description: data.description as string,
        categoryId: data.categoryId as string,
        images: data.images as Product["images"],
      };
    }
  } catch {
    notFound();
  }

  if (!product) notFound();

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
          <h1 className="text-2xl font-bold text-gray-900">Editar Produto</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {product.name} — {product.sku}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}
