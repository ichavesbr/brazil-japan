'use client'

import { Search, ShoppingCart, Menu as MenuIcon, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Pedidos', href: '/pedidos' },
  { name: 'Empresas', href: '/company/list' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <Link
            className="flex-none flex items-center gap-2 font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
            href="/"
            aria-label="Brand"
          >
            <span className="text-2xl">🇧🇷</span>
            <span>Brazil Japan</span>
            <span className="text-2xl">🇯🇵</span>
          </Link>

          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
          >
            <MenuIcon className="hs-collapse-open:hidden size-4" />
            <svg
              className="hs-collapse-open:block shrink-0 size-4 hidden"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>

        <div
          id="hs-header-base"
          className={`${isMenuOpen ? '' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block`}
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  {links.map(link => (
                    <Link
                      key={link.name}
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="md:hidden my-2 border-t border-gray-200 dark:border-neutral-700"></div>

                  <button
                    type="button"
                    className="hs-collapse-toggle p-2 md:hidden flex justify-between items-center gap-x-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <Search className="shrink-0 size-4" />
                    Buscar
                  </button>

                  <Link
                    className="p-2 md:hidden flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="/clientes"
                  >
                    <User className="shrink-0 size-4 me-2" />
                    Minha Conta
                  </Link>
                </div>
              </div>

              <div className="my-2 md:my-0 md:mx-2">
                <div className="w-px h-4 bg-gray-300 dark:bg-neutral-700"></div>
              </div>

              <div className="hidden md:flex md:justify-end md:items-center gap-x-1">
                <button
                  type="button"
                  className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-label="Search"
                >
                  <Search className="shrink-0 size-4" />
                </button>

                <button
                  type="button"
                  className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-label="Cart"
                >
                  <ShoppingCart className="shrink-0 size-4" />
                  <span className="sr-only">Cart</span>
                </button>

                <Link
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="/clientes"
                >
                  <User className="shrink-0 size-4" />
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
