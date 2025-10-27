'use client'

import { H1, P } from '@/components/ui/typography'
import { ProdutoForm } from '@/features/produtos/components/ProdutoForm'

/**
 * View para criar um novo produto
 */
export function ProdutoCreateView() {
  return (
    <div className="space-y-6">
      <H1>Novo Produto</H1>
      <P className="text-muted-foreground">Preencha os dados do novo produto</P>
      <ProdutoForm />
    </div>
  )
}
