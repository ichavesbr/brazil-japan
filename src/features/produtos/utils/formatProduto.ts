import { type Produto } from '@/features/produtos/schemas/produto.schema'

import { PRODUTO_STATUS, type ProdutoStatus } from '@/features/produtos/constants/status'

/**
 * Formata o nome do produto (ex.: remove espaços extras e capitaliza cada palavra)
 */
export function formatProdutoName(nome: string): string {
  if (!nome) return ''

  return nome
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Formata o preço para exibição (R$ 0,00)
 */
export function formatProdutoPreco(preco: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

/**
 * Converte o status para um label legível
 */
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

/**
 * Define a "forma" de um produto após ele ser formatado para exibição.
 * estende o 'Produto' original e adiciona as novas propriedades.
 */
export interface FormattedProduto extends Produto {
  statusLabel: string
  precoFormatted: string
  createdAtFormatted: string
}

/**
 * Formata datas para exibição (dd/mm/yyyy)
 */
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

/**
 * Formata uma lista de produtos para exibição
 */
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
