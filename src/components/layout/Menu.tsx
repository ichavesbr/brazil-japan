import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { LogInIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

const Menu = () => {
  return (
    <Sheet>
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
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#e8e4dc] border-zinc-300">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Olá, Faça seu login!</h2>
            <Button size="icon" asChild variant="outline">
              <Link href="/">
                <LogInIcon />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Menu
