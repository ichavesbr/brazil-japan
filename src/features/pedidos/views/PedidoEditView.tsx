'use client'

import { H1, P } from '@/components/ui/typography'
import { PedidoForm } from '@/features/pedidos/components/PedidoForm'

export function PedidoEditView() {
  return (
    <div className="space-y-6">
      <H1>Editar Pedido</H1>
      <P className="text-muted-foreground">Atualize os dados do pedido</P>
      <PedidoForm />
    </div>
  )
}
