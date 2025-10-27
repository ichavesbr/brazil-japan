import { type Pedido, type PedidoInputData } from '@/features/pedidos/schemas/pedido.schema'

const STORAGE_KEY: string = 'myapp_brazil_japan_pedidos'

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

function savePedidos(pedidos: Pedido[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
}

function calculateTotal(items: PedidoInputData['items']): number {
  return items.reduce((acc, item) => acc + item.subtotal, 0)
}

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

export function getPedidoById(id: string): Pedido | null {
  const pedidos = getPedidos()
  return pedidos.find(data => data.id === id) || null
}
