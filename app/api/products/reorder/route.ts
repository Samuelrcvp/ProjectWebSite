import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyRequest } from "@/lib/api-auth";
import type { ApiResponse } from "@/types";

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const auth = await verifyRequest(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const body = (await request.json()) as { order: { id: string; displayOrder: number }[] };

    if (!Array.isArray(body?.order) || body.order.length === 0) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Dados inválidos." },
        { status: 400 }
      );
    }

    const db = getAdminDb();
    const BATCH_SIZE = 500;

    for (let i = 0; i < body.order.length; i += BATCH_SIZE) {
      const batch = db.batch();
      for (const { id, displayOrder } of body.order.slice(i, i + BATCH_SIZE)) {
        batch.update(db.collection("products").doc(id), { displayOrder });
      }
      await batch.commit();
    }

    return NextResponse.json<ApiResponse<null>>({ success: true, data: null });
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Erro ao reordenar produtos." },
      { status: 500 }
    );
  }
}
