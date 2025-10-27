import { type Company } from '@/features/company/schemas/company.schema'

import { COMPANY_STATUS, type CompanyStatus } from '@/features/company/constants/status'

/**
 * Formata o nome da empresa (ex.: remove espaços extras e capitaliza cada palavra)
 */
export function formatCompanyName(name: string): string {
  if (!name) return ''

  return name
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Converte o status para um label legível
 */
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

/**
 * Define a "forma" de uma empresa após ela ser formatada para exibição.
 * estende a 'Company' original e adiciona as novas propriedades.
 */
export interface FormattedCompany extends Company {
  statusLabel: string
  createdAtFormatted: string
}

/**
 * Formata datas para exibição (dd/mm/yyyy)
 */
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

/**
 * Formata uma lista de empresas para exibição
 */
export function formatCompanyList(companies: Company[]): FormattedCompany[] {
  if (!companies || companies.length === 0) return []

  return companies.map(company => ({
    ...company,
    name: formatCompanyName(company.name),
    statusLabel: formatCompanyStatus(company.status),
    createdAtFormatted: formatCompanyDate(company.createdAt),
  }))
}
