import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Menu from './Menu'
import Cart from './Cart'

const links = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Pedidos', href: '/pedidos' },
  { name: 'Empresas', href: '/company/list' },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-300 bg-[#e8e4dc]">
      <div className="flex items-center gap-3 px-4 py-3 md:px-12 lg:px-20 md:justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 cursor-pointer hover:text-zinc-700 transition-colors">
              Brazil Japan
            </h1>
          </Link>
        </div>
        <div className="flex-1 md:flex-none md:w-full md:max-w-md md:mx-auto relative">
          <Input
            type="search"
            placeholder="Buscar produtos..."
            className="w-full bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-500 pr-10 h-10"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full text-zinc-700 hover:bg-transparent"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Menu />
          <Cart />
        </div>
      </div>

      <div className="hidden md:block border-t border-zinc-300 bg-[#e8e4dc] px-4 py-2 md:px-12 lg:px-20 overflow-x-auto">
        <nav className="flex justify-center gap-6 whitespace-nowrap">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
