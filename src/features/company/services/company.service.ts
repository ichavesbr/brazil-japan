// (A LÓGICA DE NEGÓCIO)

import {
  type Company,
  type CompanyInputData,
} from "@/features/company/schemas/company.schema"

// A chave do localStorage é uma constante privada deste módulo.
const STORAGE_KEY: string = "myapp_brazil_japan_companies"

/**
 * Retorna a lista de empresas do localStorage
 */
export function getCompanies(): Company[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) return []

  try {
    return JSON.parse(stored) as Company[]
  } catch (err) {
    console.error("Erro ao parsear companies do localStorage", err)
    return []
  }
}

/**
 * Salva a lista de empresas no localStorage
 */
function saveCompanies(companies: Company[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(companies))
}

/**
 * Cria uma nova empresa
 */
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

/**
 * Atualiza uma empresa existente
 */
export function updateCompany(
  id: string,
  data: CompanyInputData
): Company | null {
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

/**
 * Busca uma empresa por ID
 * @param {string} id
 */
export function getCompanyById(id: string): Company | null {
  const companies = getCompanies()
  return companies.find(data => data.id === id) || null
}
