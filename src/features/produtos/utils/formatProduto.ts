import { type Produto } from '@/features/produtos/schemas/produto.schema'

import { PRODUTO_STATUS, type ProdutoStatus } from '@/features/produtos/constants/status'

export function formatProdutoName(nome: string): string {
  if (!nome) return ''

  return nome
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function formatProdutoPreco(preco: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

export function formatProdutoStatus(status: ProdutoStatus): string {
  switch (status) {
    case PRODUTO_STATUS.DISPONIVEL:
      return 'Disponível'
    case PRODUTO_STATUS.INDISPONIVEL:
      return 'Indisponível'
    case PRODUTO_STATUS.EM_FALTA:
      return 'Em Falta'
    default:
      return 'Desconhecido'
  }
}

export interface FormattedProduto extends Produto {
  statusLabel: string
  precoFormatted: string
  createdAtFormatted: string
}

export function formatProdutoDate(isoDate: string): string {
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

export function formatProdutoList(produtos: Produto[]): FormattedProduto[] {
  if (!produtos || produtos.length === 0) return []

  return produtos.map(produto => ({
    ...produto,
    nome: formatProdutoName(produto.nome),
    statusLabel: formatProdutoStatus(produto.status),
    precoFormatted: formatProdutoPreco(produto.preco),
    createdAtFormatted: formatProdutoDate(produto.createdAt),
  }))
}
