import Image from 'next/image'
import { type FormattedProduto } from '../utils/formatProduto'
import { Button } from '@/components/ui/button'
import { P } from '@/components/ui/typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProdutoListProps {
  produtos: FormattedProduto[]
  onEdit: (produto: FormattedProduto) => void
  onDelete: (id: string) => void
}

export function ProdutoList({ produtos, onEdit, onDelete }: ProdutoListProps) {
  if (produtos.length === 0) {
    return <P>Nenhum produto cadastrado.</P>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {produtos.map(produto => (
        <Card key={produto.id} className="overflow-hidden">
          {produto.image && (
            <div className="relative h-48 w-full">
              <Image
                src={produto.image}
                alt={produto.nome}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle>{produto.nome}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <P>{produto.descricao}</P>
              <P className="text-lg font-bold text-blue-600">{produto.precoFormatted}</P>
              <P>Estoque: {produto.estoque} unidades</P>
              <P>Status: {produto.statusLabel}</P>
              <P className="text-sm text-muted-foreground">
                Criado em: {produto.createdAtFormatted}
              </P>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={() => onEdit(produto)} className="flex-1">
                Editar
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  if (confirm(`Tem certeza que deseja excluir "${produto.nome}"?`)) {
                    onDelete(produto.id)
                  }
                }}
                className="flex-1"
              >
                Excluir
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
