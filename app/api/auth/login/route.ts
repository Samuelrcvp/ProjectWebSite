import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth } from "@/lib/firebase-admin";
import { setSessionCookie } from "@/lib/session";
import type { ApiResponse } from "@/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as { idToken?: unknown };

    if (typeof body.idToken !== "string" || !body.idToken) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Token inválido." },
        { status: 400 }
      );
    }

    const decoded = await getAdminAuth().verifyIdToken(body.idToken);

    const allowedEmail = process.env.ADMIN_EMAIL;
    if (decoded.email !== allowedEmail) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Acesso não autorizado." },
        { status: 403 }
      );
    }

    await setSessionCookie(body.idToken);

    return NextResponse.json<ApiResponse<{ email: string }>>(
      { success: true, data: { email: decoded.email ?? "" } },
      { status: 200 }
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Falha na autenticação." },
      { status: 401 }
    );
  }
}
