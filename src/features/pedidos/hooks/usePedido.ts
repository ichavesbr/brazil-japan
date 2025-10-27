'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getPedidos,
  createPedido,
  updatePedido,
  getPedidoById,
} from '@/features/pedidos/services/pedido.service'

import { formatPedidoList, type FormattedPedido } from '@/features/pedidos/utils/formatPedido'

import { type Pedido, type PedidoInputData } from '@/features/pedidos/schemas/pedido.schema'

export function usePedido() {
  const [pedidos, setPedidos] = useState<FormattedPedido[]>([])

  useEffect(() => {
    setPedidos(formatPedidoList(getPedidos()))
  }, [])

  const addPedido = useCallback((data: PedidoInputData): void => {
    const newPedido = createPedido(data)
    const formattedPedido = formatPedidoList([newPedido])[0]
    if (formattedPedido) {
      setPedidos(prevPedidos => [...prevPedidos, formattedPedido])
    }
  }, [])

  const editPedido = useCallback((id: string, data: PedidoInputData): void => {
    const updatedPedido = updatePedido(id, data)
    if (updatedPedido) {
      const formattedPedido = formatPedidoList([updatedPedido])[0]
      if (formattedPedido) {
        setPedidos(prevPedidos =>
          prevPedidos.map(pedido => (pedido.id === id ? formattedPedido : pedido))
        )
      }
    }
  }, [])

  const getPedido = useCallback((id: string) => {
    return getPedidoById(id)
  }, [])

  return {
    pedidos,
    addPedido,
    editPedido,
    getPedido,
  }
}
