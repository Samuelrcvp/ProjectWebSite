"use client";

import type { ApiResponse, Category } from "@/types";

async function fetchWithAuth<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const res = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
    credentials: "include",
  });

  if (res.status === 401) {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    window.location.href = "/petten";
    return { success: false, error: "Sessão expirada" };
  }

  return res.json() as Promise<ApiResponse<T>>;
}

export async function getCategories(): Promise<ApiResponse<Category[]>> {
  return fetchWithAuth<Category[]>("/api/categories");
}

export async function createCategory(
  name: string
): Promise<ApiResponse<Category>> {
  return fetchWithAuth<Category>("/api/categories", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}

export async function updateCategory(
  id: string,
  name: string
): Promise<ApiResponse<Category>> {
  return fetchWithAuth<Category>(`/api/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
  });
}

export async function deleteCategory(id: string): Promise<ApiResponse<null>> {
  return fetchWithAuth<null>(`/api/categories/${id}`, { method: "DELETE" });
}

export async function getPublicCategories(): Promise<Category[]> {
  const res = await fetch("/api/categories/public");
  if (!res.ok) return [];
  const result = (await res.json()) as ApiResponse<Category[]>;
  if (!result.success) return [];
  return result.data;
}
