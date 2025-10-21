export const COMPANY_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
};


export type CompanyStatus = typeof COMPANY_STATUS[keyof typeof COMPANY_STATUS];
