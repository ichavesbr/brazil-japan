'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCompany } from '@/features/company/hooks/useCompany'
import { CompanyForm } from '@/features/company/components/CompanyForm'
import { H1 } from '@/components/ui/typography'
import { type CompanyInputData, type Company } from '@/features/company/schemas/company.schema'

interface CompanyEditViewProps {
  id: string // O ID recebido da Rota
}

/**
 * View para a edição de uma empresa.
 * Responsabilidade: Buscar a empresa pelo 'id',
 * preencher o formulário e lidar com 'submit' e 'cancel'.
 */
export function CompanyEditView({ id }: CompanyEditViewProps) {
  const { editCompany, getCompany } = useCompany()
  const router = useRouter()

  // Estado local para guardar os dados brutos da empresa
  const [companyToEdit, setCompanyToEdit] = useState<Company | null>(null)

  // 1. Busca os dados da empresa assim que o componente é montado
  useEffect(() => {
    const data = getCompany(id) // Usa o 'getCompany' (dados brutos) do hook
    if (data) {
      setCompanyToEdit(data)
    } else {
      // se o ID for inválido, volta para a lista
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

  // 2. Mostra um feedback de loading enquanto os dados não chegam
  if (!companyToEdit) {
    return <div>Carregando...</div>
  }

  // 3. Renderiza o formulário com os dados pré-preenchidos
  return (
    <div className="space-y-6">
      <H1>Editar Empresa: {companyToEdit.name}</H1>
      <CompanyForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        defaultValues={companyToEdit} // Passa os dados para o formulário
      />
    </div>
  )
}
