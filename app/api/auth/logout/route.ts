import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/session";
import type { ApiResponse } from "@/types";

export async function POST(): Promise<NextResponse> {
  await clearSessionCookie();
  return NextResponse.json<ApiResponse<null>>(
    { success: true, data: null },
    { status: 200 }
  );
}
