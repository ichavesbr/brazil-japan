import { type Company } from '@/features/company/schemas/company.schema'

import { COMPANY_STATUS, type CompanyStatus } from '@/features/company/constants/status'

export function formatCompanyName(name: string): string {
  if (!name) return ''

  return name
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function formatCompanyStatus(status: CompanyStatus): string {
  switch (status) {
    case COMPANY_STATUS.ACTIVE:
      return 'Ativa'
    case COMPANY_STATUS.INACTIVE:
      return 'Inativa'
    case COMPANY_STATUS.PENDING:
      return 'Pendente'
    default:
      return 'Desconhecido'
  }
}

export interface FormattedCompany extends Company {
  statusLabel: string
  createdAtFormatted: string
}

export function formatCompanyDate(isoDate: string): string {
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

export function formatCompanyList(companies: Company[]): FormattedCompany[] {
  if (!companies || companies.length === 0) return []

  return companies.map(company => ({
    ...company,
    name: formatCompanyName(company.name),
    statusLabel: formatCompanyStatus(company.status),
    createdAtFormatted: formatCompanyDate(company.createdAt),
  }))
}
