import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="mt-auto w-full bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="max-w-[85rem] py-6 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <Link
              className="flex-none flex items-center gap-2 font-semibold text-lg text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="/"
              aria-label="Brand"
            >
              <span className="text-xl">🇧🇷</span>
              <span>Brazil Japan</span>
              <span className="text-xl">🇯🇵</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <div className="flex gap-x-4 text-sm">
              <Link
                className="text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/"
              >
                Sobre
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/produtos"
              >
                Produtos
              </Link>
              <a
                className="text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="mailto:contato@braziljapan.com"
              >
                Contato
              </a>
            </div>

            <div className="flex gap-x-2">
              <a
                className="size-8 inline-flex justify-center items-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="shrink-0 size-4" />
              </a>
              <a
                className="size-8 inline-flex justify-center items-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                href="#"
                aria-label="Facebook"
              >
                <Facebook className="shrink-0 size-4" />
              </a>
              <a
                className="size-8 inline-flex justify-center items-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                href="#"
                aria-label="Twitter"
              >
                <Twitter className="shrink-0 size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4 dark:border-neutral-700">
          <p className="text-xs text-center text-gray-600 dark:text-neutral-400">
            © {currentYear} Brazil Japan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
