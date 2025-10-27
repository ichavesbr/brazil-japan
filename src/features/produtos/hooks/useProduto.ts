'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getProdutos,
  createProduto,
  updateProduto,
  getProdutoById,
  deleteProduto,
} from '@/features/produtos/services/produto.service'

import { formatProdutoList, type FormattedProduto } from '@/features/produtos/utils/formatProduto'

import { type Produto, type ProdutoInputData } from '@/features/produtos/schemas/produto.schema'

export function useProduto() {
  const [produtos, setProdutos] = useState<FormattedProduto[]>([])

  const loadProdutos = useCallback(() => {
    const produtosFromStorage = getProdutos()
    console.log('useProduto - loadProdutos:', produtosFromStorage)
    setProdutos(formatProdutoList(produtosFromStorage))
  }, [])

  useEffect(() => {
    loadProdutos()

    window.addEventListener('produtos-loaded', loadProdutos)
    return () => {
      window.removeEventListener('produtos-loaded', loadProdutos)
    }
  }, [loadProdutos])

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

  const removeProduto = useCallback((id: string): void => {
    const success = deleteProduto(id)
    if (success) {
      setProdutos(prevProdutos => prevProdutos.filter(produto => produto.id !== id))
    }
  }, [])

  return {
    produtos,
    addProduto,
    editProduto,
    getProduto,
    removeProduto,
  }
}
