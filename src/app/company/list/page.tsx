"use client";

import { CompanyListView } from "@/features/company/views/CompanyListView";

/**
 * Rota para /company/list
 * Responsabilidade: Apenas carregar e renderizar a View correspondente.
 */
export default function CompanyListPage() {
  return <CompanyListView />;
}
