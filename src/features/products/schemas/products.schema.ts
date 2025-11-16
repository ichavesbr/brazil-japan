export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  category: string
  imageUrl: string
  createdAt: string
  isFeatured: boolean
  isPromotion: boolean
  isFavorite: boolean
}
