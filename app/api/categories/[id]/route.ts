import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyRequest } from "@/lib/api-auth";
import type { ApiResponse, Category } from "@/types";

type RouteParams = { params: Promise<{ id: string }> };

export async function PUT(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const db = getAdminDb();

  try {
    const body = (await request.json()) as unknown;

    if (
      !body ||
      typeof body !== "object" ||
      typeof (body as Record<string, unknown>).name !== "string" ||
      !(body as Record<string, unknown>).name
    ) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Nome é obrigatório." },
        { status: 400 }
      );
    }

    const name = ((body as Record<string, unknown>).name as string).trim();

    const doc = await db.collection("categories").doc(id).get();
    if (!doc.exists) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Categoria não encontrada." },
        { status: 404 }
      );
    }

    const existing = await db
      .collection("categories")
      .where("name", "==", name)
      .get();
    const conflict = existing.docs.find((d) => d.id !== id);
    if (conflict) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Nome já existe." },
        { status: 409 }
      );
    }

    await db.collection("categories").doc(id).update({ name });

    const category: Category = { id, name };
    return NextResponse.json<ApiResponse<Category>>({
      success: true,
      data: category,
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao atualizar categoria." },
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
    const doc = await db.collection("categories").doc(id).get();
    if (!doc.exists) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Categoria não encontrada." },
        { status: 404 }
      );
    }

    const productsWithCategory = await db
      .collection("products")
      .where("categoryId", "==", id)
      .limit(1)
      .get();

    if (!productsWithCategory.empty) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Não é possível excluir: há produtos nesta categoria.",
        },
        { status: 409 }
      );
    }

    await db.collection("categories").doc(id).delete();
    return NextResponse.json<ApiResponse<null>>({ success: true, data: null });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao excluir categoria." },
      { status: 500 }
    );
  }
}
