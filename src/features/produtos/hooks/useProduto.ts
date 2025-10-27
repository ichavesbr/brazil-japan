'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getProdutos,
  createProduto,
  updateProduto,
  getProdutoById,
} from '@/features/produtos/services/produto.service'

import { formatProdutoList, type FormattedProduto } from '@/features/produtos/utils/formatProduto'

import { type Produto, type ProdutoInputData } from '@/features/produtos/schemas/produto.schema'

/**
 * Hook para gerenciar produtos na SPA
 */
export function useProduto() {
  const [produtos, setProdutos] = useState<FormattedProduto[]>([])

  useEffect(() => {
    setProdutos(formatProdutoList(getProdutos()))
  }, [])

  const addProduto = useCallback((data: ProdutoInputData): void => {
    const newProduto = createProduto(data)
    const formattedProduto = formatProdutoList([newProduto])[0]
    if (formattedProduto) {
      setProdutos(prevProdutos => [...prevProdutos, formattedProduto])
    }
  }, [])

  const editProduto = useCallback((id: string, data: ProdutoInputData): void => {
    const updatedProduto = updateProduto(id, data)
    if (updatedProduto) {
      const formattedProduto = formatProdutoList([updatedProduto])[0]
      if (formattedProduto) {
        setProdutos(prevProdutos =>
          prevProdutos.map(produto => (produto.id === id ? formattedProduto : produto))
        )
      }
    }
  }, [])

  const getProduto = useCallback((id: string) => {
    return getProdutoById(id)
  }, [])

  return {
    produtos,
    addProduto,
    editProduto,
    getProduto,
  }
}
