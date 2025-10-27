/**
 * Company Feature - Barrel Export
 *
 * Centralizes all exports from the company feature for cleaner imports.
 *
 * @example
 *
 * import { CompanyListView } from '@/features/company/views/CompanyListView'
 * import { useCompany } from '@/features/company/hooks/useCompany'
 *
 *
 * import { CompanyListView, useCompany } from '@/features/company'
 */

export { CompanyListView } from './views/CompanyListView'
export { CompanyCreateView } from './views/CompanyCreateView'
export { CompanyEditView } from './views/CompanyEditView'

export { CompanyForm } from './components/CompanyForm'
export { CompanyList } from './components/CompanyList'

export { useCompany } from './hooks/useCompany'

export {
  getCompanies,
  createCompany,
  updateCompany,
  getCompanyById,
} from './services/company.service'

export { COMPANY_STATUS } from './constants/status'
export type { CompanyStatus } from './constants/status'

export type { Company, CompanyInputData } from './schemas/company.schema'

export {
  formatCompanyName,
  formatCompanyStatus,
  formatCompanyDate,
  formatCompanyList,
} from './utils/formatCompany'
export type { FormattedCompany } from './utils/formatCompany'
