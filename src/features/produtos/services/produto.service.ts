import { type Produto, type ProdutoInputData } from '@/features/produtos/schemas/produto.schema'

// A chave do localStorage é uma constante privada deste módulo.
const STORAGE_KEY: string = 'myapp_brazil_japan_produtos'

/**
 * Retorna a lista de produtos do localStorage
 */
export function getProdutos(): Produto[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) return []

  try {
    return JSON.parse(stored) as Produto[]
  } catch (err) {
    console.error('Erro ao parsear produtos do localStorage', err)
    return []
  }
}

/**
 * Salva a lista de produtos no localStorage
 */
function saveProdutos(produtos: Produto[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos))
}

/**
 * Cria um novo produto
 */
export function createProduto(data: ProdutoInputData): Produto {
  const produtos = getProdutos()

  const newProduto: Produto = {
    id: crypto.randomUUID(),
    nome: data.nome.trim(),
    descricao: data.descricao.trim(),
    preco: data.preco,
    estoque: data.estoque,
    status: data.status,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }

  produtos.push(newProduto)
  saveProdutos(produtos)
  return newProduto
}

/**
 * Atualiza um produto existente
 */
export function updateProduto(id: string, data: ProdutoInputData): Produto | null {
  const produtos = getProdutos()
  const index = produtos.findIndex(produto => produto.id === id)

  if (index === -1) {
    return null
  }

  const produtoToUpdate = produtos[index]

  if (!produtoToUpdate) {
    return null
  }

  produtos[index] = {
    ...produtoToUpdate,
    nome: data.nome.trim(),
    descricao: data.descricao.trim(),
    preco: data.preco,
    estoque: data.estoque,
    status: data.status,
    updatedAt: new Date().toISOString(),
  }

  saveProdutos(produtos)
  return produtos[index]
}

/**
 * Busca um produto por ID
 * @param {string} id
 */
export function getProdutoById(id: string): Produto | null {
  const produtos = getProdutos()
  return produtos.find(data => data.id === id) || null
}
