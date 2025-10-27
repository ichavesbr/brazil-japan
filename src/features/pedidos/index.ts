/**
 * Pedidos Feature - Barrel Export
 *
 * Centralizes all exports from the pedidos feature for cleaner imports.
 */

// Views
export { PedidoListView } from './views/PedidoListView'
export { PedidoCreateView } from './views/PedidoCreateView'
export { PedidoEditView } from './views/PedidoEditView'

// Components
export { PedidoForm } from './components/PedidoForm'
export { PedidoList } from './components/PedidoList'

// Hooks
export { usePedido } from './hooks/usePedido'

// Services
export { getPedidos, createPedido, updatePedido, getPedidoById } from './services/pedido.service'

// Constants
export { PEDIDO_STATUS } from './constants/status'
export type { PedidoStatus } from './constants/status'

// Schemas & Types
export type { Pedido, PedidoInputData, PedidoItem } from './schemas/pedido.schema'

// Utils
export {
  formatPedidoTotal,
  formatPedidoStatus,
  formatPedidoDate,
  formatPedidoList,
} from './utils/formatPedido'
export type { FormattedPedido } from './utils/formatPedido'
