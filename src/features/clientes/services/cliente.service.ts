// (A LÓGICA DE NEGÓCIO)

import { type Cliente, type ClienteInputData } from '@/features/clientes/schemas/cliente.schema'

// A chave do localStorage é uma constante privada deste módulo.
const STORAGE_KEY: string = 'myapp_brazil_japan_clientes'

/**
 * Retorna a lista de clientes do localStorage
 */
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

/**
 * Salva a lista de clientes no localStorage
 */
function saveClientes(clientes: Cliente[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes))
}

/**
 * Cria um novo cliente
 */
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

/**
 * Atualiza um cliente existente
 */
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

/**
 * Busca um cliente por ID
 * @param {string} id
 */
export function getClienteById(id: string): Cliente | null {
  const clientes = getClientes()
  return clientes.find(data => data.id === id) || null
}
