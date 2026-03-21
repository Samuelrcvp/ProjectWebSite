"use client";

import { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import Spinner from "@/components/ui/Spinner";
import { createCategory, updateCategory } from "@/services/firebase/categories";
import type { Category } from "@/types";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  category?: Category | null;
  onClose: () => void;
  onSaved: (category: Category) => void;
}

export default function CategoryModal({
  open,
  category,
  onClose,
  onSaved,
}: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = Boolean(category);

  useEffect(() => {
    if (open) setName(category?.name ?? "");
  }, [open, category]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return toast.error("Nome é obrigatório.");

    setLoading(true);
    try {
      const res = isEditing
        ? await updateCategory(category!.id, name.trim())
        : await createCategory(name.trim());

      if (!res.success) {
        toast.error(res.error);
        return;
      }

      toast.success(isEditing ? "Categoria atualizada!" : "Categoria criada!");
      onSaved(res.data);
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      open={open}
      title={isEditing ? "Editar Categoria" : "Nova Categoria"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex: Box's"
            autoFocus
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-60"
          />
        </div>
        <div className="flex gap-3 justify-end pt-1">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9932cc] text-white text-sm font-semibold hover:bg-[#7a1fa8] transition disabled:opacity-60"
          >
            {loading && <Spinner size="sm" className="border-white border-t-transparent" />}
            {loading ? "Salvando..." : isEditing ? "Salvar" : "Criar"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
