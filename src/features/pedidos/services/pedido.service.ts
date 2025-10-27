// (A LÓGICA DE NEGÓCIO)

import { type Pedido, type PedidoInputData } from '@/features/pedidos/schemas/pedido.schema'

// A chave do localStorage é uma constante privada deste módulo.
const STORAGE_KEY: string = 'myapp_brazil_japan_pedidos'

/**
 * Retorna a lista de pedidos do localStorage
 */
export function getPedidos(): Pedido[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) return []

  try {
    return JSON.parse(stored) as Pedido[]
  } catch (err) {
    console.error('Erro ao parsear pedidos do localStorage', err)
    return []
  }
}

/**
 * Salva a lista de pedidos no localStorage
 */
function savePedidos(pedidos: Pedido[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
}

/**
 * Calcula o total do pedido baseado nos items
 */
function calculateTotal(items: PedidoInputData['items']): number {
  return items.reduce((acc, item) => acc + item.subtotal, 0)
}

/**
 * Cria um novo pedido
 */
export function createPedido(data: PedidoInputData): Pedido {
  const pedidos = getPedidos()

  const newPedido: Pedido = {
    id: crypto.randomUUID(),
    clienteId: data.clienteId,
    clienteNome: data.clienteNome,
    items: data.items,
    total: calculateTotal(data.items),
    status: data.status,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }

  pedidos.push(newPedido)
  savePedidos(pedidos)
  return newPedido
}

/**
 * Atualiza um pedido existente
 */
export function updatePedido(id: string, data: PedidoInputData): Pedido | null {
  const pedidos = getPedidos()
  const index = pedidos.findIndex(pedido => pedido.id === id)

  if (index === -1) {
    return null
  }

  const pedidoToUpdate = pedidos[index]

  if (!pedidoToUpdate) {
    return null
  }

  pedidos[index] = {
    ...pedidoToUpdate,
    clienteId: data.clienteId,
    clienteNome: data.clienteNome,
    items: data.items,
    total: calculateTotal(data.items),
    status: data.status,
    updatedAt: new Date().toISOString(),
  }

  savePedidos(pedidos)
  return pedidos[index]
}

/**
 * Busca um pedido por ID
 * @param {string} id
 */
export function getPedidoById(id: string): Pedido | null {
  const pedidos = getPedidos()
  return pedidos.find(data => data.id === id) || null
}
