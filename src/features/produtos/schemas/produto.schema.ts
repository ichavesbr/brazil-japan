// ESTE ARQUIVO SÓ CONTÉM DEFINIÇÕES DE TIPO.

import { type ProdutoStatus } from '@/features/produtos/constants/status'

/**
 * Contrato principal da entidade Produto.
 * (O que esperamos do LocalStorage, Banco de Dados / API)
 */
export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  estoque: number
  status: ProdutoStatus
  createdAt: string
  updatedAt?: string | null
}

/**
 * Contrato para os dados necessários para CRIAR um Produto.
 * (O que esperamos do nosso formulário de criação)
 */
export interface ProdutoInputData {
  nome: string
  descricao: string
  preco: number
  estoque: number
  status: ProdutoStatus
}
