/**
 * Company Feature - Barrel Export
 *
 * Centralizes all exports from the company feature for cleaner imports.
 *
 * @example
 * // Instead of:
 * import { CompanyListView } from '@/features/company/views/CompanyListView'
 * import { useCompany } from '@/features/company/hooks/useCompany'
 *
 * // Use:
 * import { CompanyListView, useCompany } from '@/features/company'
 */

// Views
export { CompanyListView } from './views/CompanyListView'
export { CompanyCreateView } from './views/CompanyCreateView'
export { CompanyEditView } from './views/CompanyEditView'

// Components
export { CompanyForm } from './components/CompanyForm'
export { CompanyList } from './components/CompanyList'

// Hooks
export { useCompany } from './hooks/useCompany'

// Services
export {
  getCompanies,
  createCompany,
  updateCompany,
  getCompanyById,
} from './services/company.service'

// Constants
export { COMPANY_STATUS } from './constants/status'
export type { CompanyStatus } from './constants/status'

// Schemas & Types
export type { Company, CompanyInputData } from './schemas/company.schema'

// Utils
export {
  formatCompanyName,
  formatCompanyStatus,
  formatCompanyDate,
  formatCompanyList,
} from './utils/formatCompany'
export type { FormattedCompany } from './utils/formatCompany'
