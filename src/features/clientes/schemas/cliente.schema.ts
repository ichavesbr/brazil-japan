import { type ClienteStatus } from '@/features/clientes/constants/status'

export interface Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  cpf: string
  status: ClienteStatus
  createdAt: string
  updatedAt?: string | null
}

export interface ClienteInputData {
  nome: string
  email: string
  telefone: string
  cpf: string
  status: ClienteStatus
}
