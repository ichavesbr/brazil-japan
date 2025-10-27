'use client'

import { use } from 'react'
import { CompanyEditView } from '@/features/company/views/CompanyEditView'

interface CompanyEditPageProps {
  // Os 'params' agora são uma Promise que resolve para o objeto
  params: Promise<{
    id: string
  }>
}

/**
 * Rota para /company/[id]/edit
 * Responsabilidade: Pegar o 'id' da URL e passá-lo para a View de edição.
 */
export default function CompanyEditPage({ params }: CompanyEditPageProps) {
  // 'React.use()' para "desembrulhar" a Promise.
  // O React irá pausar a renderização deste componente até que
  // os 'params' estejam resolvidos.
  const unwrappedParams = use(params)

  // Agora podemos ter o acesso ao 'id' de forma segura e síncrona
  return <CompanyEditView id={unwrappedParams.id} />
}
