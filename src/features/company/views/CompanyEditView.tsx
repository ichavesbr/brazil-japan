'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCompany } from '@/features/company/hooks/useCompany'
import { CompanyForm } from '@/features/company/components/CompanyForm'
import { H1 } from '@/components/ui/typography'
import { type CompanyInputData, type Company } from '@/features/company/schemas/company.schema'

interface CompanyEditViewProps {
  id: string
}

export function CompanyEditView({ id }: CompanyEditViewProps) {
  const { editCompany, getCompany } = useCompany()
  const router = useRouter()

  const [companyToEdit, setCompanyToEdit] = useState<Company | null>(null)

  useEffect(() => {
    const data = getCompany(id)
    if (data) {
      setCompanyToEdit(data)
    } else {
      alert('Empresa não encontrada')
      router.push('/company/list')
    }
  }, [id, getCompany, router])

  function handleSubmit(data: CompanyInputData) {
    editCompany(id, data)
    router.push('/company/list')
  }

  function handleCancel() {
    router.push('/company/list')
  }

  if (!companyToEdit) {
    return <div>Carregando...</div>
  }

  return (
    <div className="space-y-6">
      <H1>Editar Empresa: {companyToEdit.name}</H1>
      <CompanyForm onSubmit={handleSubmit} onCancel={handleCancel} defaultValues={companyToEdit} />
    </div>
  )
}
