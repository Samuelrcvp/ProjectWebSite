"use client";

import type { ApiResponse, Product } from "@/types";

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

export async function getProducts(): Promise<ApiResponse<Product[]>> {
  return fetchWithAuth<Product[]>("/api/products");
}

export async function getProductById(
  id: string
): Promise<ApiResponse<Product>> {
  return fetchWithAuth<Product>(`/api/products/${id}`);
}

export async function createProduct(
  data: Omit<Product, "id" | "createdAt" | "updatedAt">
): Promise<ApiResponse<Product>> {
  return fetchWithAuth<Product>("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateProduct(
  id: string,
  data: Partial<Omit<Product, "id" | "createdAt" | "updatedAt">>
): Promise<ApiResponse<Product>> {
  return fetchWithAuth<Product>(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteProduct(id: string): Promise<ApiResponse<null>> {
  return fetchWithAuth<null>(`/api/products/${id}`, { method: "DELETE" });
}

export async function reorderProducts(
  order: { id: string; displayOrder: number }[]
): Promise<ApiResponse<null>> {
  return fetchWithAuth<null>("/api/products/reorder", {
    method: "PUT",
    body: JSON.stringify({ order }),
  });
}

export async function getPublicProducts(): Promise<Product[]> {
  const res = await fetch("/api/products/public");
  if (!res.ok) return [];
  const result = (await res.json()) as ApiResponse<Product[]>;
  if (!result.success) return [];
  return result.data;
}
