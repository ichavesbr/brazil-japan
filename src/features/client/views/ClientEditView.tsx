"use client"

import { useState, useEffect } from "react"
import { type Client } from "../types/client.types"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export default function ClientEditView() {
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
    } else {
      // Gera um ID único se não houver cliente salvo
      setClient(prev => ({ ...prev, id: crypto.randomUUID() }))
    }
  }, [])

  const handleClick = () => {
    localStorage.setItem("client_data", JSON.stringify(client))
    router.back()
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meu Perfil</h1>
      {/* <p className="text-gray-600 mb-10">Placeholder para pefil do cliente (aguardando implementação)</p> */}
      <div className="bg-white shadow rounded-xl p-6 space-y-3 border">
        <p>
          <strong>Nome:</strong>
          <input
            type="text"
            value={client.name}
            onChange={e => setClient({ ...client, name: e.target.value })}
            className="border-2 border-b rounded outline-0 ml-4"
          />
        </p>
        <p>
          <strong>E-mail:</strong>
          <input
            type="email"
            value={client.email}
            onChange={e => setClient({ ...client, email: e.target.value })}
            className="border-2 border-b rounded outline-0 ml-4"
          />
        </p>
        <p>
          <strong>Telefone:</strong>
          <input
            type="tel"
            value={client.phone}
            onChange={e => setClient({ ...client, phone: e.target.value })}
            className="border-2 border-b rounded outline-0 ml-4"
          />
        </p>
        <p>
          <strong>Endereço:</strong>
          <input
            type="text"
            value={client.address}
            onChange={e => setClient({ ...client, address: e.target.value })}
            className="border-2 border-b rounded outline-0 ml-4"
          />
        </p>

        <div className="pt-4 flex justify-end">
          <Button onClick={() => handleClick()}>Salvar</Button>
        </div>
      </div>
    </div>
  )
}
