"use client";

import { useParams } from "next/navigation";
import CompanyEditPage from "../../../../src/features/company/pages/edit";

export default function ProxyCompanyEditPage() {
  const { id } = useParams();
  return <CompanyEditPage companyId={id} />;
}
