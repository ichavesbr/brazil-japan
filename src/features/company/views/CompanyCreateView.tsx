'use client'

import { useRouter } from 'next/navigation'
import { useCompany } from '@/features/company/hooks/useCompany'
import { CompanyForm } from '@/features/company/components/CompanyForm'
import { H1 } from '@/components/ui/typography'
import { type CompanyInputData } from '@/features/company/schemas/company.schema'

export function CompanyCreateView() {
  const { addCompany } = useCompany()
  const router = useRouter()

  function handleSubmit(data: CompanyInputData) {
    addCompany(data)
    router.push('/company/list')
  }

  function handleCancel() {
    router.push('/company/list')
  }

  return (
    <div className="space-y-6">
      <H1>Nova Empresa</H1>
      <CompanyForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}
