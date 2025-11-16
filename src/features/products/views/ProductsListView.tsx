"use client"

import { ProductCard } from "@/features/products/components/ProductCard"
import { useProducts } from "@/features/products/hooks/useProducts"

interface Props {
  categorySlug?: string
  categoryName?: string
}

export function ProductsListView({ categorySlug, categoryName }: Props) {
  const { products, isLoading } = useProducts()

  if (isLoading) {
    return <p className="p-6 text-gray-600">Carregando produtos...</p>
  }

  const productsToShow = categorySlug
    ? products.filter(p => p.category === categorySlug)
    : products

  return (
    <div className="p-6">
      {categoryName && (
        <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
      )}

      {!productsToShow.length ? (
        <p className="text-gray-600">Nenhum produto encontrado.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {productsToShow.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
