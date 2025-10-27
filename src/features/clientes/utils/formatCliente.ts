import { type Cliente } from '@/features/clientes/schemas/cliente.schema'

import { CLIENTE_STATUS, type ClienteStatus } from '@/features/clientes/constants/status'

export function formatClienteName(nome: string): string {
  if (!nome) return ''

  return nome
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function formatClienteCPF(cpf: string): string {
  if (!cpf) return ''

  const cleaned = cpf.replace(/\D/g, '')

  if (cleaned.length !== 11) return cpf

  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export function formatClienteTelefone(telefone: string): string {
  if (!telefone) return ''

  const cleaned = telefone.replace(/\D/g, '')

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }

  return telefone
}

export function formatClienteStatus(status: ClienteStatus): string {
  switch (status) {
    case CLIENTE_STATUS.ATIVO:
      return 'Ativo'
    case CLIENTE_STATUS.INATIVO:
      return 'Inativo'
    case CLIENTE_STATUS.BLOQUEADO:
      return 'Bloqueado'
    default:
      return 'Desconhecido'
  }
}

export interface FormattedCliente extends Cliente {
  statusLabel: string
  cpfFormatted: string
  telefoneFormatted: string
  createdAtFormatted: string
}

export function formatClienteDate(isoDate: string): string {
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

export function formatClienteList(clientes: Cliente[]): FormattedCliente[] {
  if (!clientes || clientes.length === 0) return []

  return clientes.map(cliente => ({
    ...cliente,
    nome: formatClienteName(cliente.nome),
    statusLabel: formatClienteStatus(cliente.status),
    cpfFormatted: formatClienteCPF(cliente.cpf),
    telefoneFormatted: formatClienteTelefone(cliente.telefone),
    createdAtFormatted: formatClienteDate(cliente.createdAt),
  }))
}
