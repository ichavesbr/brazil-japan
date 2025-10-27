/**
 * Clientes Feature - Barrel Export
 *
 * Centralizes all exports from the clientes feature for cleaner imports.
 */

export { ClienteListView } from './views/ClienteListView'
export { ClienteCreateView } from './views/ClienteCreateView'
export { ClienteEditView } from './views/ClienteEditView'

export { ClienteForm } from './components/ClienteForm'
export { ClienteList } from './components/ClienteList'

export { useCliente } from './hooks/useCliente'

export {
  getClientes,
  createCliente,
  updateCliente,
  getClienteById,
} from './services/cliente.service'

export { CLIENTE_STATUS } from './constants/status'
export type { ClienteStatus } from './constants/status'

export type { Cliente, ClienteInputData } from './schemas/cliente.schema'

export {
  formatClienteName,
  formatClienteCPF,
  formatClienteTelefone,
  formatClienteStatus,
  formatClienteDate,
  formatClienteList,
} from './utils/formatCliente'
export type { FormattedCliente } from './utils/formatCliente'
