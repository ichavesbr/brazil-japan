"use client";

import { useParams } from "next/navigation";
import { ProductsListView } from "@/features/products/views/ProductsListView";
import { categories } from "@/features/products/constants/productsCategories";

export default function CategoryPage() {
  const params = useParams<{
    category: string; 
  }>();

  const slug = params?.category;

  if (!slug) {
    return <p className="p-6 text-gray-600">Carregando...</p>;
  }

  // Encontrar a categoria pelo slug
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <p className="p-6 text-gray-600">Categoria não encontrada.</p>;
  }

  return <ProductsListView categorySlug={slug} categoryName={category.name} />
}
