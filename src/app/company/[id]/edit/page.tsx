'use client'

import { use } from 'react'
import { CompanyEditView } from '@/features/company/views/CompanyEditView'

interface CompanyEditPageProps {
  params: Promise<{
    id: string
  }>
}

/**
 * Rota para /company/[id]/edit
 * Responsabilidade: Pegar o 'id' da URL e passá-lo para a View de edição.
 */
export default function CompanyEditPage({ params }: CompanyEditPageProps) {
  const unwrappedParams = use(params)

  return <CompanyEditView id={unwrappedParams.id} />
}
