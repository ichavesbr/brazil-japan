'use client'

import { useRouter } from 'next/navigation'
import { usePedido } from '@/features/pedidos/hooks/usePedido'
import { PedidoList } from '@/features/pedidos/components/PedidoList'

import { H1 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { type FormattedPedido } from '@/features/pedidos/utils/formatPedido'

export function PedidoListView() {
  const router = useRouter()
  const { pedidos } = usePedido()

  function handleCreate() {
    router.push('/pedidos/create')
  }

  function handleEdit(pedido: FormattedPedido) {
    router.push(`/pedidos/${pedido.id}/edit`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <H1>Pedidos</H1>
        <Button onClick={handleCreate}>Novo Pedido</Button>
      </div>

      <PedidoList pedidos={pedidos} onEdit={handleEdit} />
    </div>
  )
}
