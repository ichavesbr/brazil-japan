// ESTE ARQUIVO SÓ CONTÉM DEFINIÇÕES DE TIPO.

import { type PedidoStatus } from '@/features/pedidos/constants/status'

/**
 * Item de um pedido
 */
export interface PedidoItem {
  produtoId: string
  produtoNome: string
  quantidade: number
  precoUnitario: number
  subtotal: number
}

/**
 * Contrato principal da entidade Pedido.
 * (O que esperamos do LocalStorage, Banco de Dados / API)
 */
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

/**
 * Contrato para os dados necessários para CRIAR um Pedido.
 * (O que esperamos do nosso formulário de criação)
 */
export interface PedidoInputData {
  clienteId: string
  clienteNome: string
  items: PedidoItem[]
  status: PedidoStatus
}
