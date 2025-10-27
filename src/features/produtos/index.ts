/**
 * Produtos Feature - Barrel Export
 *
 * Centralizes all exports from the produtos feature for cleaner imports.
 */

// Views
export { ProdutoListView } from './views/ProdutoListView'
export { ProdutoCreateView } from './views/ProdutoCreateView'
export { ProdutoEditView } from './views/ProdutoEditView'

// Components
export { ProdutoForm } from './components/ProdutoForm'
export { ProdutoList } from './components/ProdutoList'

// Hooks
export { useProduto } from './hooks/useProduto'

// Services
export {
  getProdutos,
  createProduto,
  updateProduto,
  getProdutoById,
} from './services/produto.service'

// Constants
export { PRODUTO_STATUS } from './constants/status'
export type { ProdutoStatus } from './constants/status'

// Schemas & Types
export type { Produto, ProdutoInputData } from './schemas/produto.schema'

// Utils
export {
  formatProdutoName,
  formatProdutoPreco,
  formatProdutoStatus,
  formatProdutoDate,
  formatProdutoList,
} from './utils/formatProduto'
export type { FormattedProduto } from './utils/formatProduto'
