"use client"

import { useEffect, useState, useCallback } from "react"
import { ProductsService } from "../services/product.service"
import { type Product } from "../schemas/products.schema"

import { mockProducts } from "../mocks/mockProducts" // apenas para teste rápido, remover depois

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(true) // para evitar que view carregue antes de os dados estarem prontos

  useEffect(() => {
    // const storedProducts = ProductsService.getProducts();
    let storedProducts = ProductsService.getProducts()

    /*if abaixo é apenas para teste rápido, remover depois */
    if (!storedProducts.length) {
      storedProducts = mockProducts
      ProductsService.saveProducts(storedProducts)
    }

    setProducts(storedProducts)
    setLoading(false)
  }, [])

  const addProduct = useCallback((newProduct: Product) => {
    const productWithDate = {
      ...newProduct,
      createdAt: newProduct.createdAt || new Date().toISOString(),
    }

    const created = ProductsService.createProduct(productWithDate)
    setProducts(prev => [...prev, created])
  }, [])

  const editProduct = useCallback((id: string, updatedProduct: Product) => {
    ProductsService.updateProduct(updatedProduct)
    setProducts(prev => prev.map(p => (p.id === id ? updatedProduct : p)))
  }, [])

  const getProduct = useCallback(
    (id: string) => products.find(p => p.id === id),
    [products]
  )

  const removeProduct = useCallback((id: string) => {
    ProductsService.deleteProduct(id)
    setProducts(prev => prev.filter(p => p.id !== id))
  }, [])

  // Filtros para seções da Home
  const promotions = products.filter(p => p.isPromotion)
  const featured = products.filter(p => p.isFeatured)
  const favorites = products.filter(p => p.isFavorite)

  return {
    isLoading,
    products,
    addProduct,
    editProduct,
    removeProduct,
    getProduct,
    promotions,
    featured,
    favorites,
  }
}
