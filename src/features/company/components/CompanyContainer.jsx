"use client";

import { useState } from "react";
import { useCompany } from "../hooks/useCompany";
import { CompanyList } from "./CompanyList";
import { CompanyForm } from "./CompanyForm";

const VIEWS = { LIST: "list", CREATE: "create", EDIT: "edit" };

export function CompanyContainer({
  defaultView = VIEWS.LIST,
  companyToEdit = null,
}) {
  const { companies, addCompany, editCompany } = useCompany();
  const [view, setView] = useState(defaultView);
  const [editingCompany, setEditingCompany] = useState(companyToEdit);

  function handleEdit(company) {
    setEditingCompany(company);
    setView(VIEWS.EDIT);
  }

  function handleCreate(data) {
    addCompany(data);
    setView(VIEWS.LIST);
  }

  function handleUpdate(data) {
    if (!editingCompany) return;
    editCompany(editingCompany.id, data);
    setEditingCompany(null);
    setView(VIEWS.LIST);
  }

  return (
    <div className="space-y-6">
      {view === VIEWS.LIST && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Empresas</h1>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setView(VIEWS.CREATE)}
            >
              Nova Empresa
            </button>
          </div>
          <CompanyList companies={companies} onEdit={handleEdit} />
        </>
      )}
      {view === VIEWS.CREATE && (
        <CompanyForm
          onSubmit={handleCreate}
          onCancel={() => setView(VIEWS.LIST)}
        />
      )}
      {view === VIEWS.EDIT && editingCompany && (
        <CompanyForm
          defaultValues={editingCompany}
          onSubmit={handleUpdate}
          onCancel={() => setView(VIEWS.LIST)}
        />
      )}
    </div>
  );
}
