export default function Testimonials() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                &quot;Produtos de qualidade excepcional! A combinação de culturas traz algo único
                para nossa família.&quot;
              </em>
            </p>
          </div>

          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              Maria Silva
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">Cliente desde 2023</p>
          </div>
        </div>

        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                &quot;A entrega é sempre rápida e o atendimento impecável. Recomendo para todos os
                meus amigos!&quot;
              </em>
            </p>
          </div>

          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              João Santos
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">Empresário em São Paulo</p>
          </div>
        </div>

        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                &quot;Descobrir a Brazil Japan foi a melhor coisa! Produtos autênticos que trazem
                memórias do Japão.&quot;
              </em>
            </p>
          </div>

          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              Yuki Tanaka
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">Designer em Curitiba</p>
          </div>
        </div>
      </div>
    </div>
  )
}
