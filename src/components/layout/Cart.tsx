import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
    return(
        <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-zinc-700 hover:bg-zinc-200 cursor-pointer"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#e8e4dc] border-zinc-300">
              <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
    )
}

export default Cart