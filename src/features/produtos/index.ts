export { ProdutoListView } from './views/ProdutoListView'
export { ProdutoCreateView } from './views/ProdutoCreateView'
export { ProdutoEditView } from './views/ProdutoEditView'

export { ProdutoForm } from './components/ProdutoForm'
export { ProdutoList } from './components/ProdutoList'

export { useProduto } from './hooks/useProduto'

export {
  getProdutos,
  createProduto,
  updateProduto,
  getProdutoById,
} from './services/produto.service'

export { PRODUTO_STATUS } from './constants/status'
export type { ProdutoStatus } from './constants/status'

export type { Produto, ProdutoInputData } from './schemas/produto.schema'

export {
  formatProdutoName,
  formatProdutoPreco,
  formatProdutoStatus,
  formatProdutoDate,
  formatProdutoList,
} from './utils/formatProduto'
export type { FormattedProduto } from './utils/formatProduto'
