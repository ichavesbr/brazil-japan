"use client"

import { useProducts } from "@/features/products/hooks/useProducts"
import { ProductCard } from "@/features/products/components/ProductCard"

export default function HomePage() {
  const { products, isLoading } = useProducts()

  if (isLoading) {
    return <p className="p-6 text-gray-600">Carregando produtos...</p>
  }

  // Filtrar seções
  const featured = products.filter(p => p.isFeatured)
  const promotions = products.filter(p => p.isPromotion)
  const favorites = products.filter(p => p.isFavorite)

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Nossa Loja Virtual</h1>

      {/* Destaques */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4"> Destaques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Promoções */}
      {promotions.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Promoções</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {promotions.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Favoritos */}
      {favorites.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {favorites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Todos os produtos */}
      {products.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Todos os produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {products.length === 0 && (
        <p className="p-6 text-gray-600">Nenhum produto disponível.</p>
      )}
    </div>
  )
}
