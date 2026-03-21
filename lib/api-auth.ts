import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth } from "@/lib/firebase-admin";
import type { ApiResponse } from "@/types";

const SESSION_COOKIE = "__session";

export async function verifyRequest(
  request: NextRequest
): Promise<{ uid: string; email: string } | NextResponse> {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Não autenticado." },
      { status: 401 }
    );
  }

  try {
    const decoded = await getAdminAuth().verifyIdToken(token);
    return { uid: decoded.uid, email: decoded.email ?? "" };
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Token inválido ou expirado." },
      { status: 401 }
    );
  }
}
