import { type PedidoStatus } from '@/features/pedidos/constants/status'

export interface PedidoItem {
  produtoId: string
  produtoNome: string
  quantidade: number
  precoUnitario: number
  subtotal: number
}

export interface Pedido {
  id: string
  clienteId: string
  clienteNome: string
  items: PedidoItem[]
  total: number
  status: PedidoStatus
  createdAt: string
  updatedAt?: string | null
}

export interface PedidoInputData {
  clienteId: string
  clienteNome: string
  items: PedidoItem[]
  status: PedidoStatus
}
