// ESTE ARQUIVO SÓ CONTÉM DEFINIÇÕES DE TIPO.

import { type CompanyStatus } from '@/features/company/constants/status'

/**
 * Contrato principal da entidade Company.
 * (O que esperamos do LocalStorage, Banco de Dados / API)
 */
export interface Company {
  id: string
  name: string
  status: CompanyStatus
  createdAt: string
  updatedAt?: string | null
}

/**
 * Contrato para os dados necessários para CRIAR uma Company.
 * (O que esperamos do nosso formulário de criação)
 */
export interface CompanyInputData {
  name: string
  status: CompanyStatus
}
