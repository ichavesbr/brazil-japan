"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useProducts } from "../hooks/useProducts"
import { type Product } from "../schemas/products.schema"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductDetailView() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { getProduct, isLoading } = useProducts()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (!id || isLoading) {
      return
    }

    const prod = getProduct(id)
    if (prod) {
      setProduct(prod)
    } else {
      router.push("/products/list")
    }
  }, [id, getProduct, isLoading, router])

  if (isLoading || !product) {
    return <p className="p-6 text-gray-600">Carregando...</p>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex justify-center md:justify-center flex-1">
          <Image
            src={product.imageUrl}
            width={500}
            height={500}
            alt={product.name}
            className="object-cover rounded max-h-96 w-full"
          />
        </div>

        <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p
            className={`${
              !product.stock ? "text-gray-600" : "text-black"
            } text-sm font-semibold`}
          >
            {!product.stock ? "ESGOTADO" : `Estoque: ${product.stock}`}
          </p>

          <div className="flex gap-2 justify-center md:justify-start">
            {product.isFeatured && (
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                Destaque
              </span>
            )}
            {product.isPromotion && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                Promoção
              </span>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Button onClick={() => router.back()}>Voltar</Button>
            <Button variant="default">Adicionar ao Carrinho</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
