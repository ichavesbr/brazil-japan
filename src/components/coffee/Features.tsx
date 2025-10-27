export default function Features() {
  return (
    <div id="sobre" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              Qualidade Premium
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Seleção Cuidadosa
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Cada produto é escolhido criteriosamente para garantir a melhor experiência aos nossos
              clientes.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="/produtos"
            >
              Ver Produtos
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              Entrega Rápida
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Logística Eficiente
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Sistema de entrega otimizado para garantir que seus produtos cheguem rapidamente e em
              perfeitas condições.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="/pedidos"
            >
              Fazer Pedido
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-red-500">
              Atendimento
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Suporte Dedicado
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Nossa equipe está sempre pronta para ajudar você com qualquer dúvida ou necessidade
              especial.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="/clientes"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
