export const dynamic = "force-dynamic";

import CategoryTable from "@/components/categories/CategoryTable";

export default function CategoriesPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categorias</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Gerencie as categorias de produtos
        </p>
      </div>
      <CategoryTable />
    </div>
  );
}
