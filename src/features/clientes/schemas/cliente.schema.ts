// ESTE ARQUIVO SÓ CONTÉM DEFINIÇÕES DE TIPO.

import { type ClienteStatus } from '@/features/clientes/constants/status'

/**
 * Contrato principal da entidade Cliente.
 * (O que esperamos do LocalStorage, Banco de Dados / API)
 */
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

/**
 * Contrato para os dados necessários para CRIAR um Cliente.
 * (O que esperamos do nosso formulário de criação)
 */
export interface ClienteInputData {
  nome: string
  email: string
  telefone: string
  cpf: string
  status: ClienteStatus
}
