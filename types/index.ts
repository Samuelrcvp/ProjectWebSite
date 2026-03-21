import type { Timestamp } from "firebase/firestore";

export interface ProductImage {
  url: string;
  order: number;
  isMain: boolean;
}

export interface FormImage extends ProductImage {
  file?: File;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  categoryId: string;
  categoryName?: string;
  images: ProductImage[];
  displayOrder?: number;
  createdAt?: Timestamp | string;
  updatedAt?: Timestamp | string;
}

export interface Category {
  id: string;
  name: string;
  createdAt?: Timestamp | string;
}

export type ApiResponse<T = null> =
  | { success: true; data: T }
  | { success: false; error: string };

export interface ProductFormData {
  sku: string;
  name: string;
  price: number;
  description: string;
  categoryId: string;
  images: ProductImage[];
}

export interface CategoryFormData {
  name: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SessionPayload {
  uid: string;
  email: string;
}
