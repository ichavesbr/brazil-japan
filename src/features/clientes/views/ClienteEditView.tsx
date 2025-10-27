'use client'

import { H1, P } from '@/components/ui/typography'
import { ClienteForm } from '@/features/clientes/components/ClienteForm'

export function ClienteEditView() {
  return (
    <div className="space-y-6">
      <H1>Editar Cliente</H1>
      <P className="text-muted-foreground">Atualize os dados do cliente</P>
      <ClienteForm />
    </div>
  )
}
