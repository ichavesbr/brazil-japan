import { useEffect, useState } from "react";
import { getPublicCompaniesInfo } from "@/lib/publicData";

type PublicCompanyInfo = {
  id : string
  name : string
};

export function usePartners() {
  const [partners, setPartners] = useState<PublicCompanyInfo[]>([]);

  useEffect(() => {
    setPartners(getPublicCompaniesInfo());
  }, []);

  return partners;
}

