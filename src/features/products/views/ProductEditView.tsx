"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useProducts } from "@/features/products/hooks/useProducts";
import { type Product } from "@/features/products/schemas/products.schema";
import { Button } from "@/components/ui/button";
import ProductForm from "@/features/products/components/ProductForm";

export function ProductEditView() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { isLoading, getProduct, editProduct, removeProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!params?.id) {
      return
    };

    if (isLoading) {
      return
    };

    const existingProduct = getProduct(params.id);

    if (existingProduct) {
      setProduct(existingProduct);

    } else {
      router.push("/products/list");
    };

  }, [params?.id, getProduct, isLoading, router]);

  function handleSubmit(updatedProduct: Product) {
    editProduct(updatedProduct.id, updatedProduct);
    router.push("/products/list")
  };

  function handleCancel() {
    router.push("/products/list")
  };

  function handleDelete() {
    if (!product) {
      return
    };

    const confirmed = window.confirm(`Tem certeza que deseja excluir o produto ${product.name}?`);

    if (confirmed) {
      removeProduct(product.id);
      router.push("/products/list");
    }
  };

  if (!product) {
    return <p className="p-6 text-gray-600">Carregando...</p>;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      <ProductForm product={product} onSubmit={handleSubmit} onCancel={handleCancel} />

      <div className="pt-6 border-t border-gray-200 flex justify-end">
        <Button variant="destructive" size="sm" onClick={handleDelete}>
          Excluir Produto
        </Button>
      </div>
    </div>
  )
}