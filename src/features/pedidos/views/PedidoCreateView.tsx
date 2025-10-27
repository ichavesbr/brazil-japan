'use client'

import { H1, P } from '@/components/ui/typography'
import { PedidoForm } from '@/features/pedidos/components/PedidoForm'

export function PedidoCreateView() {
  return (
    <div className="space-y-6">
      <H1>Novo Pedido</H1>
      <P className="text-muted-foreground">Preencha os dados do novo pedido</P>
      <PedidoForm />
    </div>
  )
}
