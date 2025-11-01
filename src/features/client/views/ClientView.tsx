"use client";

import { Button } from "@/components/ui/button";

export default function ClientView() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meu Perfil</h1>
      <p className="text-gray-600 mb-10">Placeholder para pefil do cliente (aguardando implementação)</p>
      <div className="bg-white shadow rounded-xl p-6 space-y-3 border">
        <p><strong>Nome:</strong></p>
        <p><strong>E-mail:</strong> </p>
        <p><strong>Telefone:</strong> </p>

        <div className="pt-4 flex justify-end">
          <Button>Editar Perfil</Button>
        </div>
      </div>
    </div>
  );
}