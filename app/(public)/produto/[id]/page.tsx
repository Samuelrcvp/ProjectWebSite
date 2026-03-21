import { getAdminDb } from "@/lib/firebase-admin";
import type { Product } from "@/types";
import ProductDetailsClient from "@/components/products/ProductDetailsClient";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

type Props = { params: Promise<{ id: string }> };

function getProduct(id: string) {
  return unstable_cache(
    async () => {
      const doc = await getAdminDb().collection("products").doc(id).get();
      if (!doc.exists) return null;
      const data = doc.data()!;
      return {
        id: doc.id,
        sku: data.sku as string,
        name: data.name as string,
        price: data.price as number,
        description: data.description as string,
        categoryId: data.categoryId as string,
        images: data.images as Product["images"],
      } satisfies Product;
    },
    [`product-${id}`],
    { revalidate: 3600, tags: [`product-${id}`] },
  )();
}

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;

  let product: Product | null = null;
  try {
    product = await getProduct(id);
  } catch {
    notFound();
  }

  if (!product) notFound();

  return <ProductDetailsClient product={product} />;
}
