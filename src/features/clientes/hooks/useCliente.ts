'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getClientes,
  createCliente,
  updateCliente,
  getClienteById,
} from '@/features/clientes/services/cliente.service'

import { formatClienteList, type FormattedCliente } from '@/features/clientes/utils/formatCliente'

import { type Cliente, type ClienteInputData } from '@/features/clientes/schemas/cliente.schema'

export function useCliente() {
  const [clientes, setClientes] = useState<FormattedCliente[]>([])

  useEffect(() => {
    setClientes(formatClienteList(getClientes()))
  }, [])

  // --- Função 'addCliente' ---
  const addCliente = useCallback((data: ClienteInputData): void => {
    const newCliente = createCliente(data)
    const formattedCliente = formatClienteList([newCliente])[0]
    if (formattedCliente) {
      setClientes(prevClientes => [...prevClientes, formattedCliente])
    }
  }, [])

  // --- Função 'editCliente' ---
  const editCliente = useCallback((id: string, data: ClienteInputData): void => {
    const updatedCliente = updateCliente(id, data)
    if (updatedCliente) {
      const formattedCliente = formatClienteList([updatedCliente])[0]
      if (formattedCliente) {
        setClientes(prevClientes =>
          prevClientes.map(cliente => (cliente.id === id ? formattedCliente : cliente))
        )
      }
    }
  }, [])

  // --- Função 'getCliente' ---
  const getCliente = useCallback((id: string) => {
    return getClienteById(id)
  }, [])

  return {
    clientes,
    addCliente,
    editCliente,
    getCliente,
  }
}
