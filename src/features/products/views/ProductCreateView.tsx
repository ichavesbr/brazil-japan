"use client"

import { useRouter } from "next/navigation"
import ProductForm from "@/features/products/components/ProductForm"
import { useProducts } from "@/features/products/hooks/useProducts"
import { type Product } from "@/features/products/schemas/products.schema"

export function ProductCreateView() {
  const { addProduct } = useProducts()
  const router = useRouter()

  const handleSubmit = (product: Product) => {
    addProduct(product)
    router.push("/products/list")
  }

  const handleCancel = () => {
    router.push("/products/list")
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Criar Produto</h1>
      <ProductForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}
