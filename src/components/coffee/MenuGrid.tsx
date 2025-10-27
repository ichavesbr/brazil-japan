'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PRODUTO_STATUS } from '@/features/produtos/constants/status'

export default function MenuGrid() {
  const router = useRouter()

  const products = [
    {
      id: 1,
      name: 'Café Premium Brasileiro',
      description: 'Grãos selecionados das melhores fazendas do Brasil',
      price: 'R$ 45,90',
      priceValue: 45.9,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80',
    },
    {
      id: 2,
      name: 'Chá Verde Japonês',
      description: 'Matcha premium importado diretamente do Japão',
      price: 'R$ 89,90',
      priceValue: 89.9,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80',
    },
    {
      id: 3,
      name: 'Sake Tradicional',
      description: 'Bebida tradicional japonesa de alta qualidade',
      price: 'R$ 129,90',
      priceValue: 129.9,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80',
    },
    {
      id: 4,
      name: 'Cachaça Artesanal',
      description: 'Produção artesanal de alambiques brasileiros',
      price: 'R$ 79,90',
      priceValue: 79.9,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80',
    },
    {
      id: 5,
      name: 'Snacks Japoneses',
      description: 'Mix de petiscos tradicionais do Japão',
      price: 'R$ 34,90',
      priceValue: 34.9,
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500&q=80',
    },
    {
      id: 6,
      name: 'Brigadeiro Gourmet',
      description: 'Doce brasileiro em versão premium',
      price: 'R$ 29,90',
      priceValue: 29.9,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
    },
  ]

  const handleProductClick = () => {
    const STORAGE_KEY = 'myapp_brazil_japan_produtos'
    const existingProducts = localStorage.getItem(STORAGE_KEY)

    if (!existingProducts || JSON.parse(existingProducts).length === 0) {
      const productsToSave = products.map(product => ({
        id: crypto.randomUUID(),
        nome: product.name,
        descricao: product.description,
        preco: product.priceValue,
        estoque: Math.floor(Math.random() * 50) + 10,
        status: PRODUTO_STATUS.DISPONIVEL,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      }))

      localStorage.setItem(STORAGE_KEY, JSON.stringify(productsToSave))
    }

    router.push('/produtos')
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Nossos Produtos
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Uma seleção especial que une o melhor do Brasil e do Japão
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <button
            key={product.id}
            onClick={handleProductClick}
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40 text-left"
          >
            <div className="aspect-w-16 aspect-h-11 relative h-48">
              <Image
                className="w-full object-cover rounded-xl"
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {product.name}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">{product.description}</p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-x-3">
              <span className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                {product.price}
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                Ver detalhes
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={handleProductClick}
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          Ver todos os produtos
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
