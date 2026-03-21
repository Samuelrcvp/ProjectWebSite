import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import type { ApiResponse, Product } from "@/types";

export async function GET(): Promise<NextResponse> {
  try {
    const snapshot = await getAdminDb()
      .collection("products")
      .orderBy("displayOrder", "asc")
      .get();

    const products: Product[] = snapshot.docs
      .filter((doc) => (doc.data().active as boolean) !== false)
      .map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          sku: data.sku as string,
          name: data.name as string,
          price: data.price as number,
          description: data.description as string,
          categoryId: data.categoryId as string,
          images: data.images as Product["images"],
        };
      });

    return NextResponse.json<ApiResponse<Product[]>>({ success: true, data: products });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao buscar produtos." },
      { status: 500 }
    );
  }
}
