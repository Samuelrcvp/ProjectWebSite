"use client";

import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import CategoryModal from "./CategoryModal";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { TableSkeleton } from "@/components/ui/Skeleton";
import { getCategories, deleteCategory } from "@/services/firebase/categories";
import type { Category } from "@/types";

export default function CategoryTable() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await getCategories();
    if (res.success) setCategories(res.data);
    else toast.error(res.error);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(cat: Category) {
    setEditing(cat);
    setModalOpen(true);
  }

  function handleSaved(saved: Category) {
    setCategories((prev) => {
      const exists = prev.find((c) => c.id === saved.id);
      if (exists) return prev.map((c) => (c.id === saved.id ? saved : c));
      return [...prev, saved].sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    const res = await deleteCategory(deleteId);
    if (res.success) {
      toast.success("Categoria excluída.");
      setCategories((prev) => prev.filter((c) => c.id !== deleteId));
    } else {
      toast.error(res.error);
    }
    setDeleting(false);
    setDeleteId(null);
  }

  const deletingCat = categories.find((c) => c.id === deleteId);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#9932cc] text-white font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-[#7a1fa8] transition"
        >
          <i className="bx bx-plus text-lg" />
          Nova Categoria
        </button>
      </div>

      {loading ? (
        <TableSkeleton rows={4} />
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">
                  Nome
                </th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={2} className="text-center py-10 text-gray-400">
                    Nenhuma categoria cadastrada.
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4 font-medium text-gray-900">
                      {cat.name}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => openEdit(cat)}
                          className="p-2 text-[#9932cc] hover:bg-[#f3f0f6] rounded-lg transition"
                          title="Editar"
                        >
                          <i className="bx bx-edit text-lg" />
                        </button>
                        <button
                          onClick={() => setDeleteId(cat.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                          title="Excluir"
                        >
                          <i className="bx bx-trash text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <CategoryModal
        open={modalOpen}
        category={editing}
        onClose={() => setModalOpen(false)}
        onSaved={handleSaved}
      />

      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Excluir categoria"
        message={`Tem certeza que deseja excluir "${deletingCat?.name}"? Esta ação não pode ser desfeita.`}
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
