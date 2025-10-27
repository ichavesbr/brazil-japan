'use client'

import { useRouter } from 'next/navigation'
import { useProduto } from '@/features/produtos/hooks/useProduto'
import { ProdutoList } from '@/features/produtos/components/ProdutoList'

import { H1 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { type FormattedProduto } from '@/features/produtos/utils/formatProduto'

export function ProdutoListView() {
  const router = useRouter()
  const { produtos } = useProduto()

  function handleCreate() {
    router.push('/produtos/create')
  }

  function handleEdit(produto: FormattedProduto) {
    router.push(`/produtos/${produto.id}/edit`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <H1>Produtos</H1>
        <Button onClick={handleCreate}>Novo Produto</Button>
      </div>

      <ProdutoList produtos={produtos} onEdit={handleEdit} />
    </div>
  )
}
