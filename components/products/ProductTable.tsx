"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { arrayMove } from "@dnd-kit/sortable";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { TableSkeleton } from "@/components/ui/Skeleton";
import Spinner from "@/components/ui/Spinner";
import { getProducts, deleteProduct, reorderProducts } from "@/services/firebase/products";
import type { Product } from "@/types";

// ─── Linha arrastável (HTML5 DnD nativo — sem hooks de contexto) ──────────────

type RowDensity = "compact" | "normal" | "comfortable";

interface RowProps {
  product: Product;
  rowIndex: number;
  isDragSource: boolean;
  isDragTarget: boolean;
  sourceIsAbove: boolean;
  dragDisabled: boolean;
  onDragStart: (index: number) => void;
  onDragEnter: (index: number) => void;
  onDragEnd: () => void;
  onDelete: (id: string) => void;
}

const DENSITY_CSS: Record<RowDensity, { py: string; img: string }> = {
  compact:     { py: "0.75rem", img: "3.5rem" },
  normal:      { py: "1.25rem", img: "5rem"   },
  comfortable: { py: "1.75rem", img: "8rem"   },
};

const DENSITY_CYCLE: RowDensity[] = ["compact", "normal", "comfortable"];

const DENSITY_META: Record<RowDensity, { icon: string; label: string }> = {
  compact:     { icon: "bx-collapse-vertical",  label: "Compacto"     },
  normal:      { icon: "bx-expand-vertical",    label: "Normal"       },
  comfortable: { icon: "bx-expand-alt",         label: "Confortável"  },
};

const tdPy: React.CSSProperties = {
  paddingTop: "var(--row-py)",
  paddingBottom: "var(--row-py)",
};

const imgStyle: React.CSSProperties = {
  width: "var(--row-img)",
  height: "var(--row-img)",
};

const DraggableRow = memo(function DraggableRow({
  product,
  rowIndex,
  isDragSource,
  isDragTarget,
  sourceIsAbove,
  dragDisabled,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDelete,
}: RowProps) {
  const mainImg =
    product.images?.find((img) => img.isMain)?.url ?? product.images?.[0]?.url;

  let rowClass = "hover:bg-gray-50";
  if (isDragSource) rowClass = "opacity-30 bg-primary-light";
  if (isDragTarget)
    rowClass += sourceIsAbove
      ? " border-b-2 border-primary"
      : " border-t-2 border-primary";

  return (
    <tr
      draggable={!dragDisabled}
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "move";
        onDragStart(rowIndex);
      }}
      onDragEnter={() => onDragEnter(rowIndex)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={onDragEnd}
      className={rowClass}
    >
      {/* Handle visual */}
      <td style={tdPy} className="px-3 w-8">
        {!dragDisabled && (
          <span className="p-1 text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing rounded block">
            <i className="bx bx-grid-vertical text-xl" />
          </span>
        )}
      </td>

      {/* Imagem */}
      <td style={tdPy} className="px-4">
        {mainImg ? (
          <Image
            src={mainImg}
            alt={product.name}
            width={128}
            height={128}
            style={imgStyle}
            className="object-cover rounded-lg pointer-events-none"
          />
        ) : (
          <div style={imgStyle} className="bg-gray-100 rounded-lg flex items-center justify-center">
            <i className="bx bx-image text-gray-300 text-2xl" />
          </div>
        )}
      </td>

      <td style={tdPy} className="px-4 font-medium text-gray-900 max-w-[200px] truncate">
        {product.name}
      </td>
      <td style={tdPy} className="px-4">
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
          {product.sku}
        </span>
      </td>
      <td style={tdPy} className="px-4 font-semibold text-gray-800">
        R${product.price.toFixed(2).replace(".", ",")}
      </td>
      <td style={tdPy} className="px-4 text-gray-600">{product.categoryName || "—"}</td>
      <td style={tdPy} className="px-4">
        <div className="flex gap-2 justify-end">
          <Link
            href={`/controle/products/${product.id}/edit`}
            className="p-2 text-primary hover:bg-primary-light rounded-lg transition"
            title="Editar"
          >
            <i className="bx bx-edit text-lg" />
          </Link>
          <button
            onClick={() => onDelete(product.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
            title="Excluir"
          >
            <i className="bx bx-trash text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
});

// ─── Tabela principal ─────────────────────────────────────────────────────────

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderedIds, setOrderedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dragSource, setDragSource] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [density, setDensity] = useState<RowDensity>("normal");
  const [densitySpin, setDensitySpin] = useState(false);

  const cycleDensity = useCallback(() => {
    setDensity((prev) => {
      const idx = DENSITY_CYCLE.indexOf(prev);
      return DENSITY_CYCLE[(idx + 1) % DENSITY_CYCLE.length];
    });
    setDensitySpin(true);
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await getProducts();
    if (res.success) {
      setProducts(res.data);
      setOrderedIds(res.data.map((p) => p.id));
    } else {
      toast.error(res.error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const orderedProducts = orderedIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const searchActive = search.trim().length > 0;

  const displayList = searchActive
    ? products.filter((p) => {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          (p.categoryName ?? "").toLowerCase().includes(q)
        );
      })
    : orderedProducts;

  const hasReordered =
    !loading &&
    !searchActive &&
    orderedIds.join(",") !== products.map((p) => p.id).join(",");

  // ── Handlers de drag ──────────────────────────────────────────────────────

  const handleDragStart = useCallback((index: number) => {
    setDragSource(index);
  }, []);

  const handleDragEnter = useCallback((index: number) => {
    setDragOver(index);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (dragSource !== null && dragOver !== null && dragSource !== dragOver) {
      setOrderedIds((prev) => arrayMove(prev, dragSource, dragOver));
    }
    setDragSource(null);
    setDragOver(null);
  }, [dragSource, dragOver]);

  // ── Handlers de ordem ─────────────────────────────────────────────────────

  const handleSaveOrder = useCallback(async () => {
    setSaving(true);
    const order = orderedIds.map((id, i) => ({ id, displayOrder: i }));
    const res = await reorderProducts(order);
    if (res.success) {
      toast.success("Ordem salva!");
      setProducts(
        orderedIds
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean) as Product[]
      );
    } else {
      toast.error("Erro ao salvar ordem.");
    }
    setSaving(false);
  }, [orderedIds, products]);

  const handleCancelOrder = useCallback(() => {
    setOrderedIds(products.map((p) => p.id));
  }, [products]);

  // ── Handlers de delete ────────────────────────────────────────────────────

  const handleSetDeleteId = useCallback((id: string) => setDeleteId(id), []);

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    const res = await deleteProduct(deleteId);
    if (res.success) {
      toast.success("Produto excluído.");
      const updated = products.filter((p) => p.id !== deleteId);
      setProducts(updated);
      setOrderedIds(updated.map((p) => p.id));
    } else {
      toast.error(res.error);
    }
    setDeleting(false);
    setDeleteId(null);
  }

  const deletingProduct = products.find((p) => p.id === deleteId);

  return (
    <div className="space-y-4">
      {/* Barra superior */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, código ou categoria..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
        </div>

        <button
          onClick={cycleDensity}
          title={`Densidade: ${DENSITY_META[density].label} — clique para alternar`}
          className="flex items-center gap-1.5 border border-gray-300 text-gray-600 text-sm font-medium rounded-lg px-3 py-2.5 hover:bg-gray-50 transition shrink-0"
        >
          <i
            className={`bx ${DENSITY_META[density].icon} text-lg transition-transform duration-150 ${densitySpin ? "rotate-180" : "rotate-0"}`}
            onTransitionEnd={() => setDensitySpin(false)}
          />
          <span className="hidden sm:inline">{DENSITY_META[density].label}</span>
        </button>

        {hasReordered && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 italic">Ordem alterada</span>
            <button
              onClick={handleCancelOrder}
              disabled={saving}
              className="border border-gray-300 text-gray-600 text-sm font-semibold rounded-lg px-4 py-2 hover:bg-gray-50 transition disabled:opacity-50"
            >
              Desfazer
            </button>
            <button
              onClick={handleSaveOrder}
              disabled={saving}
              className="flex items-center gap-2 bg-primary text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-[#7a1fa8] transition disabled:opacity-50"
            >
              {saving && (
                <Spinner
                  size="sm"
                  className="border-white border-t-transparent"
                />
              )}
              {saving ? "Salvando..." : "Salvar ordem"}
            </button>
          </div>
        )}
      </div>

      {searchActive && (
        <p className="text-xs text-gray-400 -mt-1">
          Reordenação desativada durante a busca.
        </p>
      )}

      {loading ? (
        <TableSkeleton rows={6} />
      ) : (
        <div
          className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          style={{
            "--row-py": DENSITY_CSS[density].py,
            "--row-img": DENSITY_CSS[density].img,
            transition: "--row-py 150ms, --row-img 150ms",
          } as React.CSSProperties}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-8 px-3 py-3" />
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Imagem
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Nome
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    SKU
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Preço
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Categoria
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {displayList.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-10 text-gray-400"
                    >
                      Nenhum produto encontrado.
                    </td>
                  </tr>
                ) : (
                  displayList.map((product, i) => (
                    <DraggableRow
                      key={product.id}
                      product={product}
                      rowIndex={i}
                      isDragSource={dragSource === i}
                      isDragTarget={
                        dragOver === i &&
                        dragSource !== null &&
                        dragSource !== i
                      }
                      sourceIsAbove={dragSource !== null && dragSource < i}
                      dragDisabled={searchActive}
                      onDragStart={handleDragStart}
                      onDragEnter={handleDragEnter}
                      onDragEnd={handleDragEnd}
                      onDelete={handleSetDeleteId}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Excluir produto"
        message={`Tem certeza que deseja excluir "${deletingProduct?.name}"? Esta ação não pode ser desfeita.`}
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
