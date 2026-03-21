import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import type { ApiResponse, Category } from "@/types";

export async function GET(): Promise<NextResponse> {
  try {
    const snapshot = await getAdminDb()
      .collection("categories")
      .orderBy("name", "asc")
      .get();

    const categories: Category[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name as string,
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
