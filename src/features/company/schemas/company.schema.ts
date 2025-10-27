import { type CompanyStatus } from '@/features/company/constants/status'

export interface Company {
  id: string
  name: string
  status: CompanyStatus
  createdAt: string
  updatedAt?: string | null
}

export interface CompanyInputData {
  name: string
  status: CompanyStatus
}
