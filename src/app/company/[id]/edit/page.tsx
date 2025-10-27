'use client'

import { use } from 'react'
import { CompanyEditView } from '@/features/company/views/CompanyEditView'

interface CompanyEditPageProps {
  params: Promise<{
    id: string
  }>
}

export default function CompanyEditPage({ params }: CompanyEditPageProps) {
  const unwrappedParams = use(params)

  return <CompanyEditView id={unwrappedParams.id} />
}
