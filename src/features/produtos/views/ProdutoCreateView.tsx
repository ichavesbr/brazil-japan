'use client'

import { useRouter } from 'next/navigation'
import { useProduto } from '@/features/produtos/hooks/useProduto'
import { ProdutoForm } from '@/features/produtos/components/ProdutoForm'
import { H1 } from '@/components/ui/typography'
import { type ProdutoInputData } from '@/features/produtos/schemas/produto.schema'

export function ProdutoCreateView() {
  const { addProduto } = useProduto()
  const router = useRouter()

  function handleSubmit(data: ProdutoInputData) {
    addProduto(data)
    router.push('/produtos')
  }

  function handleCancel() {
    router.push('/produtos')
  }

  return (
    <div className="space-y-6">
      <H1>Novo Produto</H1>
      <ProdutoForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}
