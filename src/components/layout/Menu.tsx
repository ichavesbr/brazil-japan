"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

const Menu = () => {
  const { client, login, logout } = useAuth()
  const [open, setOpen] = useState(false)

  const handleLogin = () => {
    login()
    setOpen(false) // fecha o menu após login
  }

  const handleLogout = () => {
    logout()
    setOpen(false)
  }

  const links = client
    ? [
        { label: "Produtos", href: "/products/list" },
        { label: "Meus Pedidos", href: "/orders/list" },
        { label: "Meu Perfil", href: "/client" },
      ]
    : [{ label: "Produtos", href: "/products/list" }]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-zinc-700 hover:bg-zinc-200 cursor-pointer"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-[#e8e4dc] border-zinc-300"
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="px-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">
              {client ? `Olá, ${client.name}!` : "Olá, Faça seu login!"}
            </h2>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 flex items-center justify-center"
              onClick={
                client
                  ? () => {
                      handleLogout()
                    }
                  : handleLogin
              }
            >
              {client ? (
                <LogOutIcon className="h-5 w-5" />
              ) : (
                <LogInIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <ul className="space-y-2">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline"
                  onClick={() => setOpen(false)} // fecha o menu ao clicar em uma opção
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Menu
