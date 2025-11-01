import {type Product } from "../schemas/products.schema";

export const mockProducts: Product[] = [
  {
    id: "f2ebc600-2a80-4a80-979b-4dec6dee9e1d",
    name: "Boné",
    description: "Boné confortável para corridas e atividades físicas.",
    price: 29.99,
    stock: 12,
    category: "acessorios",
    imageUrl: "https://placehold.co/600x600/png",
    createdAt: new Date().toISOString(),
    isFeatured: true,
    isPromotion: false,
    isFavorite: false
  },
  {
    id: "29b46b6c-ea8a-44cb-b90a-13204e67354b",
    name: "Camiseta",
    description: "Camiseta de algodão, perfeita para o dia a dia.",
    price: 79.9,
    stock: 0,
    category: "camisetas",
    imageUrl: "https://placehold.co/600x600/png",
    createdAt: new Date().toISOString(),
    isFeatured: false,
    isPromotion: false,
    isFavorite: false
  },
  {
    id: "732f2e2e-45c7-44cf-a7b9-184efc631fdb",
    name: "Mochila Escolar",
    description: "Mochila resistente e espaçosa para cadernos e laptop.",
    price: 149.5,
    stock: 7,
    category: "acessorios",
    imageUrl: "https://placehold.co/600x600/png",
    isFeatured: true,
    createdAt: new Date().toISOString(),
    isPromotion: false,
    isFavorite: false 
  },
]