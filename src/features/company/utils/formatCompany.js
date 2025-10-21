import { CompanyStatus } from "../constants/status";

/**
 * Formata o nome da empresa (ex.: remove espaços extras e capitaliza cada palavra)
 */
export function formatCompanyName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Converte o status para um label legível
 */
export function formatCompanyStatus(status) {
  switch (status) {
    case CompanyStatus.ACTIVE:
      return "Ativa";
    case CompanyStatus.INACTIVE:
      return "Inativa";
    case CompanyStatus.PENDING:
      return "Pendente";
    default:
      return "Desconhecido";
  }
}

/**
 * Formata datas para exibição (dd/mm/yyyy)
 */
export function formatCompanyDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR");
}

/**
 * Formata uma lista de empresas para exibição
 */
export function formatCompanyList(companies) {
  return companies.map((c) => ({
    ...c,
    name: formatCompanyName(c.name),
    statusLabel: formatCompanyStatus(c.status),
    createdAtFormatted: formatCompanyDate(c.createdAt),
  }));
}
