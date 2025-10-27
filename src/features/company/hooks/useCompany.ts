'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getCompanies,
  createCompany,
  updateCompany,
  getCompanyById,
} from '@/features/company/services/company.service'

import { formatCompanyList, type FormattedCompany } from '@/features/company/utils/formatCompany'

import { type Company, type CompanyInputData } from '@/features/company/schemas/company.schema'

/**
 * Hook para gerenciar empresas na SPA
 */
export function useCompany() {
  const [companies, setCompanies] = useState<FormattedCompany[]>([])

  useEffect(() => {
    setCompanies(formatCompanyList(getCompanies()))
  }, [])

  const addCompany = useCallback((data: CompanyInputData): void => {
    const newCompany = createCompany(data)
    const formattedCompany = formatCompanyList([newCompany])[0]
    if (formattedCompany) {
      setCompanies(prevCompanies => [...prevCompanies, formattedCompany])
    }
  }, [])

  const editCompany = useCallback((id: string, data: CompanyInputData): void => {
    const updatedCompany = updateCompany(id, data)
    if (updatedCompany) {
      const formattedCompany = formatCompanyList([updatedCompany])[0]
      if (formattedCompany) {
        setCompanies(prevCompanies =>
          prevCompanies.map(company => (company.id === id ? formattedCompany : company))
        )
      }
    }
  }, [])

  const getCompany = useCallback((id: string) => {
    return getCompanyById(id)
  }, [])

  return {
    companies,
    addCompany,
    editCompany,
    getCompany,
  }
}
