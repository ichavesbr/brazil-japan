import { type FormattedCliente } from '../utils/formatCliente'
import { Button } from '@/components/ui/button'
import { P } from '@/components/ui/typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ClienteListProps {
  clientes: FormattedCliente[]
  onEdit: (cliente: FormattedCliente) => void
}

export function ClienteList({ clientes, onEdit }: ClienteListProps) {
  if (clientes.length === 0) {
    return <P>Nenhum cliente cadastrado.</P>
  }

  return (
    <div className="space-y-4">
      {clientes.map(cliente => (
        <Card key={cliente.id}>
          <CardHeader>
            <CardTitle>{cliente.nome}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <P>Email: {cliente.email}</P>
              <P>CPF: {cliente.cpfFormatted}</P>
              <P>Telefone: {cliente.telefoneFormatted}</P>
              <P>Status: {cliente.statusLabel}</P>
              <P className="text-sm text-muted-foreground">
                Criado em: {cliente.createdAtFormatted}
              </P>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onEdit(cliente)}>
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
