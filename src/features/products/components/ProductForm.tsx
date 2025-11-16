"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { type Product } from "@/features/products/schemas/products.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  product?: Product;
  onSubmit: (data: Product) => void;
  onCancel: () => void;
}

export default function ProductForm({ product, onSubmit, onCancel }: Props) {
  const [formData, setFormData] = useState<Product>(
    product ?? {
      id: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      category: "",
      imageUrl: "",
      createdAt: new Date().toISOString(),
      isFeatured: false,
      isPromotion: false,
      isFavorite: false,
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório."
    };
    if (!(formData.description ?? "").trim()) {
      newErrors.description = "Descrição é obrigatória."
    };
    if (!(formData.category ?? "").trim()) {
      newErrors.category = "Categoria é obrigatória."
    };
    if (!(formData.imageUrl ?? "").trim()) {
      newErrors.image = "Imagem é obrigatória."
    };
    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Preço deve ser maior que zero."
    };

    return newErrors
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handleSwitchChange = (name: keyof Product, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <div>
        <Label htmlFor="name">Nome do produto</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="description">Descrição</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description}</p>
        )}
      </div>

      <div>
        <Label htmlFor="category">Categoria</Label>
        <Input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category}</p>
        )}
      </div>

      <div>
        <Label htmlFor="image">URL da imagem</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
      </div>

      <div>
        <Label htmlFor="price">Preço (R$)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
        {errors.price && (
          <p className="text-sm text-red-500">{errors.price}</p>
        )}
      </div>

      <div>
        <Label htmlFor="stock">Estoque</Label>
        <Input
          id="stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          min={0}
          required
        />
        {errors.stock && (
          <p className="text-sm text-red-500">{errors.stock}</p>
        )}
      </div>

      <div className="space-y-4 border-t border-gray-200 pt-4">
        <Label className="text-sm font-medium text-gray-700">
          Configurações do produto
        </Label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <Label htmlFor="isFeatured" className="text-sm text-gray-700">
              Destaque
            </Label>
            <Switch
              id="isFeatured"
              checked={formData.isFeatured}
              onCheckedChange={(checked) =>
                handleSwitchChange("isFeatured", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <Label htmlFor="isPromotion" className="text-sm text-gray-700">
              Promoção
            </Label>
            <Switch
              id="isPromotion"
              checked={formData.isPromotion}
              onCheckedChange={(checked) =>
                handleSwitchChange("isPromotion", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <Label htmlFor="isFavorite" className="text-sm text-gray-700">
              Favorito
            </Label>
            <Switch
              id="isFavorite"
              checked={formData.isFavorite}
              onCheckedChange={(checked) =>
                handleSwitchChange("isFavorite", checked)
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="default">
          {product ? "Salvar alterações" : "Cadastrar produto"}
        </Button>
      </div>
    </form>
  )
}