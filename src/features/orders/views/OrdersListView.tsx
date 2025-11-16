"use client"

export function OrdersListView() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Meus Pedidos</h1>
      <p className="text-gray-600">
        Placeholder para listagem de pedidos realizados pelo cliente (aguardando
        implementação)
      </p>
      <ul className="mt-6 space-y-3 text-left">
        <li className="p-4 border rounded-lg bg-gray-50 text-gray-500">
          Pedido #1234 — aguardando implementação.
        </li>
        <li className="p-4 border rounded-lg bg-gray-50 text-gray-500">
          Pedido #5678 — aguardando implementação.
        </li>
      </ul>
    </div>
  )
}
