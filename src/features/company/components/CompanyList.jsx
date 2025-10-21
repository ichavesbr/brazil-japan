import { formatCompanyList } from "../utils/formatCompany";

export function CompanyList({ companies, onEdit }) {
  const formatted = formatCompanyList(companies);

  return (
    <div className="space-y-4">
      {formatted.map((c) => (
        <div
          key={c.id}
          className="p-4 border rounded flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold">{c.name}</h2>
            <p>Status: {c.statusLabel}</p>
            <p>Criado em: {c.createdAtFormatted}</p>
          </div>
          <button
            className="px-3 py-1 bg-yellow-500 text-white rounded"
            onClick={() => onEdit(c)}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}
