import { type Cliente, type ClienteInputData } from '@/features/clientes/schemas/cliente.schema'

const STORAGE_KEY: string = 'myapp_brazil_japan_clientes'

export function getClientes(): Cliente[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) return []

  try {
    return JSON.parse(stored) as Cliente[]
  } catch (err) {
    console.error('Erro ao parsear clientes do localStorage', err)
    return []
  }
}

function saveClientes(clientes: Cliente[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes))
}

export function createCliente(data: ClienteInputData): Cliente {
  const clientes = getClientes()

  const newCliente: Cliente = {
    id: crypto.randomUUID(),
    nome: data.nome.trim(),
    email: data.email.trim(),
    telefone: data.telefone.trim(),
    cpf: data.cpf.trim(),
    status: data.status,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }

  clientes.push(newCliente)
  saveClientes(clientes)
  return newCliente
}

export function updateCliente(id: string, data: ClienteInputData): Cliente | null {
  const clientes = getClientes()
  const index = clientes.findIndex(cliente => cliente.id === id)

  if (index === -1) {
    return null
  }

  const clienteToUpdate = clientes[index]

  if (!clienteToUpdate) {
    return null
  }

  clientes[index] = {
    ...clienteToUpdate,
    nome: data.nome.trim(),
    email: data.email.trim(),
    telefone: data.telefone.trim(),
    cpf: data.cpf.trim(),
    status: data.status,
    updatedAt: new Date().toISOString(),
  }

  saveClientes(clientes)
  return clientes[index]
}

export function getClienteById(id: string): Cliente | null {
  const clientes = getClientes()
  return clientes.find(data => data.id === id) || null
}
