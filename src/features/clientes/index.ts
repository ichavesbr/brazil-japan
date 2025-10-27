/**
 * Clientes Feature - Barrel Export
 *
 * Centralizes all exports from the clientes feature for cleaner imports.
 */

// Views
export { ClienteListView } from './views/ClienteListView'
export { ClienteCreateView } from './views/ClienteCreateView'
export { ClienteEditView } from './views/ClienteEditView'

// Components
export { ClienteForm } from './components/ClienteForm'
export { ClienteList } from './components/ClienteList'

// Hooks
export { useCliente } from './hooks/useCliente'

// Services
export {
  getClientes,
  createCliente,
  updateCliente,
  getClienteById,
} from './services/cliente.service'

// Constants
export { CLIENTE_STATUS } from './constants/status'
export type { ClienteStatus } from './constants/status'

// Schemas & Types
export type { Cliente, ClienteInputData } from './schemas/cliente.schema'

// Utils
export {
  formatClienteName,
  formatClienteCPF,
  formatClienteTelefone,
  formatClienteStatus,
  formatClienteDate,
  formatClienteList,
} from './utils/formatCliente'
export type { FormattedCliente } from './utils/formatCliente'
