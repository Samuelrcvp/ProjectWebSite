"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import Spinner from "@/components/ui/Spinner";
import CurrencyInput from "@/components/ui/CurrencyInput";
import { getCategories } from "@/services/firebase/categories";
import { createProduct, updateProduct } from "@/services/firebase/products";
import { uploadProductImage } from "@/services/firebase/storage";
import type { Product, ProductImage, FormImage, Category } from "@/types";

interface Props {
  product?: Product;
}

export default function ProductForm({ product }: Props) {
  const router = useRouter();
  const isEditing = Boolean(product);

  const [sku, setSku] = useState(product?.sku ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price ?? 0);
  const [description, setDescription] = useState(product?.description ?? "");
  const [categoryId, setCategoryId] = useState(product?.categoryId ?? "");
  const [images, setImages] = useState<FormImage[]>(product?.images ?? []);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingCats, setLoadingCats] = useState(true);

  useEffect(() => {
    getCategories().then((res) => {
      if (res.success) setCategories(res.data);
      setLoadingCats(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!sku.trim()) return toast.error("SKU é obrigatório.");
    if (!name.trim()) return toast.error("Nome é obrigatório.");
    if (price <= 0) return toast.error("Preço inválido.");
    if (!categoryId) return toast.error("Selecione uma categoria.");

    setLoading(true);
    try {
      const uploadedImages: ProductImage[] = await Promise.all(
        images.map(async (img, i) => {
          if (img.file) {
            const url = await uploadProductImage(img.file, sku.trim());
            URL.revokeObjectURL(img.url);
            return { url, order: i, isMain: i === 0 };
          }
          return { url: img.url, order: i, isMain: i === 0 };
        })
      );

      const data = {
        sku: sku.trim(),
        name: name.trim(),
        price,
        description: description.trim(),
        categoryId,
        images: uploadedImages,
      };

      const res = isEditing
        ? await updateProduct(product!.id, data)
        : await createProduct(data);

      if (!res.success) {
        toast.error(res.error);
        return;
      }

      toast.success(isEditing ? "Produto atualizado!" : "Produto criado!");
      router.push("/controle/products");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            SKU <span className="text-red-500">*</span>
          </label>
          <input
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="ex: box001"
            disabled={isEditing || loading}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Preço <span className="text-red-500">*</span>
          </label>
          <CurrencyInput
            value={price}
            onChange={setPrice}
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do produto"
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-60"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Categoria <span className="text-red-500">*</span>
        </label>
        {loadingCats ? (
          <div className="flex items-center gap-2 py-2">
            <Spinner size="sm" />
            <span className="text-sm text-gray-400">Carregando categorias...</span>
          </div>
        ) : (
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-60"
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Descrição
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Descreva o produto..."
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition resize-none disabled:opacity-60"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Imagens
        </label>
        <ImageUpload images={images} onChange={setImages} />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-[#9932cc] text-white font-semibold rounded-lg px-6 py-2.5 text-sm hover:bg-[#7a1fa8] transition disabled:opacity-60"
        >
          {loading && <Spinner size="sm" className="border-white border-t-transparent" />}
          {loading ? "Salvando..." : isEditing ? "Atualizar Produto" : "Criar Produto"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          disabled={loading}
          className="border border-gray-300 text-gray-700 font-semibold rounded-lg px-6 py-2.5 text-sm hover:bg-gray-50 transition disabled:opacity-60"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
