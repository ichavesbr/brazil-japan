const STORAGE_KEY = "myapp_companies";

/**
 * Retorna a lista de empresas do localStorage
 */
export function getCompanies() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("Erro ao parsear companies do localStorage", err);
    return [];
  }
}

/**
 * Salva a lista de empresas no localStorage
 */
function saveCompanies(companies) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(companies));
}

/**
 * Cria uma nova empresa
 * @param {Object} company - dados da empresa { name, status }
 */
export function createCompany(company) {
  const companies = getCompanies();
  const newCompany = {
    ...company,
    id: crypto.randomUUID(), // gera ID único
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
  companies.push(newCompany);
  saveCompanies(companies);
  return newCompany;
}

/**
 * Atualiza uma empresa existente
 * @param {string} id
 * @param {Object} updatedData
 */
export function updateCompany(id, updatedData) {
  const companies = getCompanies();
  const index = companies.findIndex((c) => c.id === id);
  if (index === -1) return null;

  companies[index] = {
    ...companies[index],
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };
  saveCompanies(companies);
  return companies[index];
}

/**
 * Remove uma empresa
 * @param {string} id
 */
export function deleteCompany(id) {
  let companies = getCompanies();
  companies = companies.filter((c) => c.id !== id);
  saveCompanies(companies);
  return true;
}

/**
 * Busca uma empresa por ID
 * @param {string} id
 */
export function getCompanyById(id) {
  const companies = getCompanies();
  return companies.find((c) => c.id === id) || null;
}
