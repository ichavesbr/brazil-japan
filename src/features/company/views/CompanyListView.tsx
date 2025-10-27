'use client'

import { useRouter } from 'next/navigation'
import { useCompany } from '@/features/company/hooks/useCompany'
import { CompanyList } from '@/features/company/components/CompanyList'

import { H1 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { type FormattedCompany } from '@/features/company/utils/formatCompany'

/**
 * View para a lista de empresas.
 * Responsabilidade: Exibir a lista, o cabeçalho,
 * e lidar com as ações de navegar para 'criar' ou 'editar'.
 */
export function CompanyListView() {
  const router = useRouter()

  const { companies } = useCompany()

  function handleCreate() {
    router.push('/company/create')
  }

  function handleEdit(company: FormattedCompany) {
    router.push(`/company/${company.id}/edit`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <H1>Empresas</H1>
        <Button onClick={handleCreate}>Nova Empresa</Button>
      </div>

      <CompanyList companies={companies} onEdit={handleEdit} />
    </div>
  )
}
