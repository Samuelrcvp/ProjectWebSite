import { NextRequest, NextResponse } from "next/server";
import { getAdminDb, getAdminStorage } from "@/lib/firebase-admin";
import { verifyRequest } from "@/lib/api-auth";
import type { ApiResponse, Product } from "@/types";
import { FieldValue } from "firebase-admin/firestore";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const db = getAdminDb();

  try {
    const doc = await db.collection("products").doc(id).get();
    if (!doc.exists) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Produto não encontrado." },
        { status: 404 }
      );
    }
    const data = doc.data()!;
    const product: Product = {
      id: doc.id,
      sku: data.sku as string,
      name: data.name as string,
      price: data.price as number,
      description: data.description as string,
      categoryId: data.categoryId as string,
      images: data.images as Product["images"],
      active: (data.active as boolean) ?? true,
      createdAt: data.createdAt?.toDate?.()?.toISOString() ?? "",
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? "",
    };
    return NextResponse.json<ApiResponse<Product>>({ success: true, data: product });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao buscar produto." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const db = getAdminDb();

  try {
    const body = (await request.json()) as Record<string, unknown>;

    const doc = await db.collection("products").doc(id).get();
    if (!doc.exists) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Produto não encontrado." },
        { status: 404 }
      );
    }

    const updates: Record<string, unknown> = {
      updatedAt: FieldValue.serverTimestamp(),
    };

    if (typeof body.name === "string" && body.name.trim()) {
      updates.name = body.name.trim();
    }
    if (typeof body.price === "number" && body.price > 0) {
      updates.price = body.price;
    }
    if (typeof body.description === "string") {
      updates.description = body.description.trim();
    }
    if (typeof body.categoryId === "string" && body.categoryId.trim()) {
      updates.categoryId = body.categoryId.trim();
    }
    if (Array.isArray(body.images)) {
      updates.images = body.images;
    }
    if (typeof body.active === "boolean") {
      updates.active = body.active;
    }
    if (typeof body.sku === "string" && body.sku.trim()) {
      const existing = await db
        .collection("products")
        .where("sku", "==", body.sku.trim())
        .get();
      const conflict = existing.docs.find((d) => d.id !== id);
      if (conflict) {
        return NextResponse.json<ApiResponse>(
          { success: false, error: "SKU já existe." },
          { status: 409 }
        );
      }
      updates.sku = body.sku.trim();
    }

    await db.collection("products").doc(id).update(updates);

    const updated = await db.collection("products").doc(id).get();
    const data = updated.data()!;

    const product: Product = {
      id: updated.id,
      sku: data.sku as string,
      name: data.name as string,
      price: data.price as number,
      description: data.description as string,
      categoryId: data.categoryId as string,
      images: data.images as Product["images"],
      active: (data.active as boolean) ?? true,
      createdAt: data.createdAt?.toDate?.()?.toISOString() ?? "",
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? "",
    };

    return NextResponse.json<ApiResponse<Product>>({ success: true, data: product });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao atualizar produto." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const db = getAdminDb();

  try {
    const doc = await db.collection("products").doc(id).get();
    if (!doc.exists) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Produto não encontrado." },
        { status: 404 }
      );
    }

    const sku = doc.data()!.sku as string;

    const bucket = getAdminStorage();
    const [files] = await bucket.getFiles({ prefix: `produtos/${sku}/` });
    await Promise.all(files.map((file) => file.delete()));

    await db.collection("products").doc(id).delete();
    return NextResponse.json<ApiResponse<null>>({ success: true, data: null });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao excluir produto." },
      { status: 500 }
    );
  }
}
