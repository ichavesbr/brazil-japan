import { type FormattedProduto } from '../utils/formatProduto'
import { Button } from '@/components/ui/button'
import { P } from '@/components/ui/typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProdutoListProps {
  produtos: FormattedProduto[]
  onEdit: (produto: FormattedProduto) => void
}

export function ProdutoList({ produtos, onEdit }: ProdutoListProps) {
  if (produtos.length === 0) {
    return <P>Nenhum produto cadastrado.</P>
  }

  return (
    <div className="space-y-4">
      {produtos.map(produto => (
        <Card key={produto.id}>
          <CardHeader>
            <CardTitle>{produto.nome}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <P>{produto.descricao}</P>
              <P>Preço: {produto.precoFormatted}</P>
              <P>Estoque: {produto.estoque} unidades</P>
              <P>Status: {produto.statusLabel}</P>
              <P className="text-sm text-muted-foreground">
                Criado em: {produto.createdAtFormatted}
              </P>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onEdit(produto)}>
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
