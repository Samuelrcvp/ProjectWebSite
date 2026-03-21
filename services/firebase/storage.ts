"use client";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/lib/firebase";

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

export function validateImageFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return "Tipo inválido. Use PNG, JPEG, JPG ou WEBP.";
  }
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return `Arquivo muito grande. Máximo ${MAX_FILE_SIZE_MB}MB.`;
  }
  return null;
}

export async function uploadProductImage(
  file: File,
  productSku: string
): Promise<string> {
  const error = validateImageFile(file);
  if (error) throw new Error(error);

  const ext = file.name.split(".").pop();
  const filename = `produtos/${productSku}/${crypto.randomUUID()}.${ext}`;
  const storageRef = ref(storage, filename);

  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteProductImage(url: string): Promise<void> {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch {
    // ignore if file doesn't exist
  }
}
