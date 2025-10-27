'use client'

import { useRouter } from 'next/navigation'
import { useCliente } from '@/features/clientes/hooks/useCliente'
import { ClienteList } from '@/features/clientes/components/ClienteList'

import { H1 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { type FormattedCliente } from '@/features/clientes/utils/formatCliente'

/**
 * View para a lista de clientes.
 * Responsabilidade: Exibir a lista, o cabeçalho,
 * e lidar com as ações de navegar para 'criar' ou 'editar'.
 */
export function ClienteListView() {
  const router = useRouter()
  const { clientes } = useCliente()

  function handleCreate() {
    router.push('/clientes/create')
  }

  function handleEdit(cliente: FormattedCliente) {
    router.push(`/clientes/${cliente.id}/edit`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <H1>Clientes</H1>
        <Button onClick={handleCreate}>Novo Cliente</Button>
      </div>

      <ClienteList clientes={clientes} onEdit={handleEdit} />
    </div>
  )
}
