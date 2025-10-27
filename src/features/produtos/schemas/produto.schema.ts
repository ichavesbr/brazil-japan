import { type ProdutoStatus } from '@/features/produtos/constants/status'

export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  estoque: number
  status: ProdutoStatus
  image?: string
  createdAt: string
  updatedAt?: string | null
}

export interface ProdutoInputData {
  nome: string
  descricao: string
  preco: number
  estoque: number
  status: ProdutoStatus
  image?: string
}
