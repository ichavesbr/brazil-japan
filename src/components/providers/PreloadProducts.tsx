'use client'

import { useEffect } from 'react'
import { PRODUTO_STATUS } from '@/features/produtos/constants/status'

const INITIAL_PRODUCTS = [
  {
    name: 'Café Premium Brasileiro',
    description: 'Grãos selecionados das melhores fazendas do Brasil',
    priceValue: 45.9,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80',
  },
  {
    name: 'Chá Verde Japonês',
    description: 'Matcha premium importado diretamente do Japão',
    priceValue: 89.9,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80',
  },
  {
    name: 'Sake Tradicional',
    description: 'Bebida tradicional japonesa de alta qualidade',
    priceValue: 129.9,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80',
  },
  {
    name: 'Cachaça Artesanal',
    description: 'Produção artesanal de alambiques brasileiros',
    priceValue: 79.9,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80',
  },
  {
    name: 'Snacks Japoneses',
    description: 'Mix de petiscos tradicionais do Japão',
    priceValue: 34.9,
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500&q=80',
  },
  {
    name: 'Brigadeiro Gourmet',
    description: 'Doce brasileiro em versão premium',
    priceValue: 29.9,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
  },
]

export default function PreloadProducts({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const STORAGE_KEY = 'myapp_brazil_japan_produtos'
    const existingProducts = localStorage.getItem(STORAGE_KEY)

    console.log('PreloadProducts - existingProducts:', existingProducts)

    let shouldSave = false
    let currentProducts = existingProducts ? JSON.parse(existingProducts) : []

    const missingProducts = INITIAL_PRODUCTS.filter(
      product => !currentProducts.some((p: any) => p.nome === product.name)
    )

    const productsNeedingImages = currentProducts.filter((p: any) => {
      const initialProduct = INITIAL_PRODUCTS.find(ip => ip.name === p.nome)
      return initialProduct && !p.image
    })

    if (missingProducts.length > 0) {
      const newProducts = missingProducts.map(product => ({
        id: crypto.randomUUID(),
        nome: product.name,
        descricao: product.description,
        preco: product.priceValue,
        estoque: Math.floor(Math.random() * 50) + 10,
        status: PRODUTO_STATUS.DISPONIVEL,
        image: product.image,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      }))

      currentProducts = [...newProducts, ...currentProducts]
      shouldSave = true
    }

    if (productsNeedingImages.length > 0) {
      currentProducts = currentProducts.map((p: any) => {
        const initialProduct = INITIAL_PRODUCTS.find(ip => ip.name === p.nome)
        if (initialProduct && !p.image) {
          return { ...p, image: initialProduct.image }
        }
        return p
      })
      shouldSave = true
    }

    if (shouldSave) {
      console.log('PreloadProducts - salvando produtos:', currentProducts)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProducts))
      window.dispatchEvent(new Event('produtos-loaded'))
    }
  }, [])

  return <>{children}</>
}
