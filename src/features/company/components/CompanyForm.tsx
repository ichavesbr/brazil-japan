"use client"

import { useState, useEffect } from "react"
import {
  COMPANY_STATUS,
  type CompanyStatus,
} from "@/features/company/constants/status"
import {
  type CompanyInputData,
  type Company,
} from "@/features/company/schemas/company.schema"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface CompanyFormProps {
  defaultValues?: Company | CompanyInputData | null

  onSubmit: (data: CompanyInputData) => void
  onCancel: () => void
}

export function CompanyForm({
  defaultValues = null,
  onSubmit,
  onCancel,
}: CompanyFormProps) {
  const [name, setName] = useState(defaultValues?.name || "")
  const [status, setStatus] = useState<CompanyStatus>(
    defaultValues?.status || COMPANY_STATUS.ACTIVE
  )

  useEffect(() => {
    if (defaultValues) {
      setName(defaultValues.name || "")
      setStatus(defaultValues.status || COMPANY_STATUS.ACTIVE)
    }
  }, [defaultValues])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!name || !status) {
      alert("Por favor, preencha todos os campos.")
      return
    }
    onSubmit({ name, status })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded shadow-md"
    >
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder="Digite o nome da empresa"
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Status</Label>
        <Select
          value={status}
          onValueChange={(value: CompanyStatus) => setStatus(value)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              {Object.values(COMPANY_STATUS).map(statusValue => (
                <SelectItem key={statusValue} value={statusValue}>
                  {statusValue}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  )
}
