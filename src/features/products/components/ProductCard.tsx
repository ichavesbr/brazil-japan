"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Product } from "@/features/products/schemas/products.schema";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Card className="relative flex flex-col content-center w-52 h-full">

      {product.isPromotion && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Promoção
        </span>
      )}
      {product.isFeatured && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          Destaque
        </span>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold mt-3">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={150}
          height={150}
          className="object-cover rounded"
          priority
        />
        <p className="mt-2 text-lg font-bold">
          {`R$ ${product.price.toFixed(2)}`}
        </p>
        <p className={`${!product.stock ? "text-gray-600" : "text-black"} mt-1 text-sm font-bold`}>
          {!product.stock ? "ESGOTADO" : `Estoque: ${product.stock}`}
        </p>
      </CardContent>

      <CardFooter className="w-full">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button className="w-full">Ver Produto</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}