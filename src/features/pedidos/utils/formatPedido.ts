import { type Pedido } from '@/features/pedidos/schemas/pedido.schema'

import { PEDIDO_STATUS, type PedidoStatus } from '@/features/pedidos/constants/status'

/**
 * Formata o valor monetário para exibição (R$ 0,00)
 */
export function formatPedidoTotal(total: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)
}

/**
 * Converte o status para um label legível
 */
export function formatPedidoStatus(status: PedidoStatus): string {
  switch (status) {
    case PEDIDO_STATUS.PENDENTE:
      return 'Pendente'
    case PEDIDO_STATUS.PROCESSANDO:
      return 'Processando'
    case PEDIDO_STATUS.ENVIADO:
      return 'Enviado'
    case PEDIDO_STATUS.ENTREGUE:
      return 'Entregue'
    case PEDIDO_STATUS.CANCELADO:
      return 'Cancelado'
    default:
      return 'Desconhecido'
  }
}

/**
 * Define a "forma" de um pedido após ele ser formatado para exibição.
 * estende o 'Pedido' original e adiciona as novas propriedades.
 */
export interface FormattedPedido extends Pedido {
  statusLabel: string
  totalFormatted: string
  createdAtFormatted: string
  itemsCount: number
}

/**
 * Formata datas para exibição (dd/mm/yyyy)
 */
export function formatPedidoDate(isoDate: string): string {
  if (!isoDate) return 'Data indisponível'

  try {
    const date = new Date(isoDate)

    if (isNaN(date.getTime())) {
      return 'Data inválida'
    }

    return date.toLocaleDateString('pt-BR')
  } catch (error) {
    console.error('Erro ao formatar data:', error)
    return 'Data inválida'
  }
}

/**
 * Formata uma lista de pedidos para exibição
 */
export function formatPedidoList(pedidos: Pedido[]): FormattedPedido[] {
  if (!pedidos || pedidos.length === 0) return []

  return pedidos.map(pedido => ({
    ...pedido,
    statusLabel: formatPedidoStatus(pedido.status),
    totalFormatted: formatPedidoTotal(pedido.total),
    createdAtFormatted: formatPedidoDate(pedido.createdAt),
    itemsCount: pedido.items.length,
  }))
}
