export default function CTA() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Pronto para começar?
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Cadastre-se agora e descubra produtos exclusivos que unem Brasil e Japão
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="/clientes"
        >
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Cadastrar Cliente
        </a>
        <a
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="/produtos"
        >
          Ver Catálogo
        </a>
      </div>

      <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span className="text-sm text-gray-600 dark:text-neutral-400">Gestão de Empresas:</span>
        <a
          className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
          href="/company/list"
        >
          Acessar painel administrativo
        </a>
      </div>
    </div>
  )
}
