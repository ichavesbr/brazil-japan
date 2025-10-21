"use client";

import { CompanyCreateView } from "@/features/company/views/CompanyCreateView";

/**
 * Rota para /company/create
 * Responsabilidade: Apenas carregar e renderizar a View de criação.
 */
export default function CompanyCreatePage() {
  return <CompanyCreateView />;
}
