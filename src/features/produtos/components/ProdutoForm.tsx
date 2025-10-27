'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type ProdutoInputData, type Produto } from '@/features/produtos/schemas/produto.schema'
import { PRODUTO_STATUS, type ProdutoStatus } from '@/features/produtos/constants/status'

interface ProdutoFormProps {
  onSubmit: (data: ProdutoInputData) => void
  onCancel: () => void
  defaultValues?: Produto
}

export function ProdutoForm({ onSubmit, onCancel, defaultValues }: ProdutoFormProps) {
  const [nome, setNome] = useState(defaultValues?.nome || '')
  const [descricao, setDescricao] = useState(defaultValues?.descricao || '')
  const [preco, setPreco] = useState(defaultValues?.preco?.toString() || '')
  const [estoque, setEstoque] = useState(defaultValues?.estoque?.toString() || '')
  const [status, setStatus] = useState<ProdutoStatus>(
    defaultValues?.status || PRODUTO_STATUS.DISPONIVEL
  )
  const [image, setImage] = useState(defaultValues?.image || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim() || !descricao.trim() || !preco || !estoque) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    const precoNumber = parseFloat(preco)
    const estoqueNumber = parseInt(estoque, 10)

    if (isNaN(precoNumber) || precoNumber <= 0) {
      alert('Por favor, insira um preço válido')
      return
    }

    if (isNaN(estoqueNumber) || estoqueNumber < 0) {
      alert('Por favor, insira um estoque válido')
      return
    }

    onSubmit({
      nome,
      descricao,
      preco: precoNumber,
      estoque: estoqueNumber,
      status,
      image: image.trim() || undefined,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preencha os dados do produto</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome do Produto *</Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Ex: Café Premium Brasileiro"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição *</Label>
            <Textarea
              id="descricao"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder="Descreva o produto..."
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preco">Preço (R$) *</Label>
              <Input
                id="preco"
                type="number"
                step="0.01"
                min="0"
                value={preco}
                onChange={e => setPreco(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estoque">Estoque *</Label>
              <Input
                id="estoque"
                type="number"
                min="0"
                value={estoque}
                onChange={e => setEstoque(e.target.value)}
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select value={status} onValueChange={value => setStatus(value as ProdutoStatus)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PRODUTO_STATUS.DISPONIVEL}>Disponível</SelectItem>
                <SelectItem value={PRODUTO_STATUS.INDISPONIVEL}>Indisponível</SelectItem>
                <SelectItem value={PRODUTO_STATUS.EM_FALTA}>Em Falta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL da Imagem</Label>
            <Input
              id="image"
              type="url"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Produto</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
