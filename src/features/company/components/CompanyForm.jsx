import { useState } from "react";
import { CompanyStatus } from "../constants/status";

export function CompanyForm({ defaultValues = {}, onSubmit, onCancel }) {
  const [name, setName] = useState(defaultValues.name || "");
  const [status, setStatus] = useState(
    defaultValues.status || CompanyStatus.ACTIVE,
  );

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, status });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded shadow"
    >
      <div>
        <label className="block mb-1 font-medium">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value={CompanyStatus.ACTIVE}>Ativa</option>
          <option value={CompanyStatus.INACTIVE}>Inativa</option>
          <option value={CompanyStatus.PENDING}>Pendente</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
