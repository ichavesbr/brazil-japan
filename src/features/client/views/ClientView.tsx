"use client"

import { useState, useEffect } from "react"
import { type Client } from "../types/client.types"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export default function ClientView() {
  const router = useRouter()
  const pathname = usePathname()
  const [client, setClient] = useState<Client>({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    const savedClient = localStorage.getItem("client_data")
    if (savedClient) {
      try {
        const parsedClient = JSON.parse(savedClient)
        setClient(parsedClient)
      } catch (error) {
        console.error("Erro ao carregar dados do cliente", error)
      }
    }
  }, [])

  const handleClick = () => router.push(`${pathname}/edit`)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meu Perfil</h1>
      <p className="text-gray-600 mb-10">
        Placeholder para pefil do cliente (aguardando implementação)
      </p>
      <div className="bg-white shadow rounded-xl p-6 space-y-3 border">
        <p>
          <strong>Nome:</strong> {client.name}
        </p>
        <p>
          <strong>E-mail:</strong> {client.email}
        </p>
        <p>
          <strong>Telefone:</strong> {client.phone}
        </p>
        <p>
          <strong>Endereço:</strong> {client.address}
        </p>

        <div className="pt-4 flex justify-end">
          <Button onClick={() => handleClick()}>Editar Perfil</Button>
        </div>
      </div>
    </div>
  )
}
