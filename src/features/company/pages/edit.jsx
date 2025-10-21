"use client";

import { CompanyContainer } from "@/features/company/components/CompanyContainer";

export default function CompanyEditPage({ companyId }) {
  return <CompanyContainer defaultView="edit" companyId={companyId} />;
}
