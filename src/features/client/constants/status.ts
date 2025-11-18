"use client"

import { useState, useEffect, useCallback } from "react"
import { getClients, createCient, updateClient, getClientById } from "@/features/client/services/client.services"

import { formatClientList, type FormattedClient } from "@/features/client/utils/formatClient"

import { type Client, type ClientInputData } from "@/features/client/schemas/client.schema"

/**
 * Hook para gerenciar clientes na SPA
 */
export function useClient() {
  const [clients, setClients] = useState<FormattedClient[]>([])

  useEffect(() => {
    setClients(formatClientList(getClients()))
  }, [])

  // --- Função 'addClient' ---
  const addClient = useCallback((data: ClientInputData): void => {
    const newClient = createCient(data)
    const formattedClient = formatClientList([newClient])[0]
    if (formattedClient) {
      setClients(prevClients => [...prevClients, formattedClient])
    }
  }, [])

  // --- Função 'editClient' ---
  const editClient = useCallback((id: string, data: ClientInputData): void => {
    const updatedClient = updateClient(id, data)
    if (updatedClient) {
      const formattedClient = formatClientList([updatedClient])[0]
      if (formattedClient) {
        setClients(prevClients => prevClients.map(client => (client.id === id ? formattedClient : client)))
      }
    }
  }, [])

  // --- A FUNÇÃO PROBLEMÁTICA ---
  const getClient = useCallback((id: string) => {
    // A lógica é a mesma, mas agora está "memoizada"
    return getClientById(id)
  }, []) // Vazio também, pois 'getClientById' é um import estático

  return {
    clients,
    addClient,
    editClient,
    getClient,
  }
}
