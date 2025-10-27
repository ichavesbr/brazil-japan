import { type FormattedPedido } from '../utils/formatPedido'
import { Button } from '@/components/ui/button'
import { P } from '@/components/ui/typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PedidoListProps {
  pedidos: FormattedPedido[]
  onEdit: (pedido: FormattedPedido) => void
}

export function PedidoList({ pedidos, onEdit }: PedidoListProps) {
  if (pedidos.length === 0) {
    return <P>Nenhum pedido cadastrado.</P>
  }

  return (
    <div className="space-y-4">
      {pedidos.map(pedido => (
        <Card key={pedido.id}>
          <CardHeader>
            <CardTitle>Pedido #{pedido.id.slice(0, 8)}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <P>Cliente: {pedido.clienteNome}</P>
              <P>Items: {pedido.itemsCount} produto(s)</P>
              <P>Total: {pedido.totalFormatted}</P>
              <P>Status: {pedido.statusLabel}</P>
              <P className="text-sm text-muted-foreground">
                Criado em: {pedido.createdAtFormatted}
              </P>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onEdit(pedido)}>
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
