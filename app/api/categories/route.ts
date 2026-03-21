import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyRequest } from "@/lib/api-auth";
import type { ApiResponse, Category } from "@/types";
import { FieldValue } from "firebase-admin/firestore";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const snapshot = await getAdminDb()
      .collection("categories")
      .orderBy("name", "asc")
      .get();

    const categories: Category[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name as string,
      createdAt: doc.data().createdAt?.toDate?.()?.toISOString() ?? "",
    }));

    return NextResponse.json<ApiResponse<Category[]>>({
      success: true,
      data: categories,
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao buscar categorias." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

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

    const existing = await getAdminDb()
      .collection("categories")
      .where("name", "==", name)
      .get();

    if (!existing.empty) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Categoria já existe." },
        { status: 409 }
      );
    }

    const docRef = await getAdminDb().collection("categories").add({
      name,
      createdAt: FieldValue.serverTimestamp(),
    });

    const category: Category = { id: docRef.id, name };

    return NextResponse.json<ApiResponse<Category>>(
      { success: true, data: category },
      { status: 201 }
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao criar categoria." },
      { status: 500 }
    );
  }
}
