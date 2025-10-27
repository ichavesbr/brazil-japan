import { type Company, type CompanyInputData } from '@/features/company/schemas/company.schema'

const STORAGE_KEY: string = 'myapp_brazil_japan_companies'

export function getCompanies(): Company[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) return []

  try {
    return JSON.parse(stored) as Company[]
  } catch (err) {
    console.error('Erro ao parsear companies do localStorage', err)
    return []
  }
}

function saveCompanies(companies: Company[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(companies))
}

export function createCompany(data: CompanyInputData): Company {
  const companies = getCompanies()

  const newCompany: Company = {
    id: crypto.randomUUID(),
    name: data.name.trim(),
    status: data.status,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }

  companies.push(newCompany)
  saveCompanies(companies)
  return newCompany
}

export function updateCompany(id: string, data: CompanyInputData): Company | null {
  const companies = getCompanies()
  const index = companies.findIndex(company => company.id === id)

  if (index === -1) {
    return null
  }

  const companyToUpdate = companies[index]

  if (!companyToUpdate) {
    return null
  }

  companies[index] = {
    ...companyToUpdate,
    name: data.name.trim(),
    status: data.status,
    updatedAt: new Date().toISOString(),
  }

  saveCompanies(companies)
  return companies[index]
}

export function getCompanyById(id: string): Company | null {
  const companies = getCompanies()
  return companies.find(data => data.id === id) || null
}
