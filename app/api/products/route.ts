import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyRequest } from "@/lib/api-auth";
import type { ApiResponse, Product, ProductFormData } from "@/types";
import { FieldValue } from "firebase-admin/firestore";

function validateProductData(data: unknown): data is ProductFormData {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  if (typeof d.sku !== "string" || !d.sku.trim()) return false;
  if (typeof d.name !== "string" || !d.name.trim()) return false;
  if (typeof d.price !== "number" || d.price <= 0) return false;
  if (typeof d.categoryId !== "string" || !d.categoryId.trim()) return false;
  if (!Array.isArray(d.images)) return false;
  return true;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  try {
    // Busca produtos e categorias em paralelo — 2 queries no total, não 1+N
    const [snapshot, catsSnapshot] = await Promise.all([
      getAdminDb().collection("products").orderBy("displayOrder", "asc").get(),
      getAdminDb().collection("categories").get(),
    ]);

    const categoryMap = new Map<string, string>(
      catsSnapshot.docs.map((d) => [d.id, d.data().name as string])
    );

    const products: Product[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        sku: data.sku as string,
        name: data.name as string,
        price: data.price as number,
        description: data.description as string,
        categoryId: data.categoryId as string,
        categoryName: categoryMap.get(data.categoryId as string) ?? "",
        images: data.images as Product["images"],
        displayOrder: data.displayOrder as number,
        createdAt: data.createdAt?.toDate?.()?.toISOString() ?? "",
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? "",
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

export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const body = (await request.json()) as unknown;

    if (!validateProductData(body)) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Dados inválidos." },
        { status: 400 }
      );
    }

    const existing = await getAdminDb()
      .collection("products")
      .where("sku", "==", body.sku.trim())
      .get();

    if (!existing.empty) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "SKU já existe." },
        { status: 409 }
      );
    }

    // Novo produto aparece no topo: displayOrder = mínimo atual − 1
    const firstSnap = await getAdminDb()
      .collection("products")
      .orderBy("displayOrder", "asc")
      .limit(1)
      .get();
    const minOrder = firstSnap.empty
      ? 0
      : ((firstSnap.docs[0].data().displayOrder as number) ?? 0);

    const docRef = await getAdminDb().collection("products").add({
      sku: body.sku.trim(),
      name: body.name.trim(),
      price: body.price,
      description: (body.description ?? "").trim(),
      categoryId: body.categoryId.trim(),
      images: body.images,
      displayOrder: minOrder - 1,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    const doc = await docRef.get();
    const data = doc.data()!;

    const product: Product = {
      id: doc.id,
      sku: data.sku as string,
      name: data.name as string,
      price: data.price as number,
      description: data.description as string,
      categoryId: data.categoryId as string,
      images: data.images as Product["images"],
    };

    return NextResponse.json<ApiResponse<Product>>(
      { success: true, data: product },
      { status: 201 }
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao criar produto." },
      { status: 500 }
    );
  }
}
