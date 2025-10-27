'use client'

import { H1, P } from '@/components/ui/typography'
import { ProdutoForm } from '@/features/produtos/components/ProdutoForm'

/**
 * View para editar um produto existente
 */
export function ProdutoEditView() {
  return (
    <div className="space-y-6">
      <H1>Editar Produto</H1>
      <P className="text-muted-foreground">Atualize os dados do produto</P>
      <ProdutoForm />
    </div>
  )
}
