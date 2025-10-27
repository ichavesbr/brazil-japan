'use client'

import { H1, P } from '@/components/ui/typography'
import { ClienteForm } from '@/features/clientes/components/ClienteForm'

export function ClienteCreateView() {
  return (
    <div className="space-y-6">
      <H1>Novo Cliente</H1>
      <P className="text-muted-foreground">Preencha os dados do novo cliente</P>
      <ClienteForm />
    </div>
  )
}
