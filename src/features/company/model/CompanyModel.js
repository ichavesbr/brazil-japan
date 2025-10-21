/**
 * @typedef {"ACTIVE"|"INACTIVE"|"PENDING"} CompanyStatus
 */

/**
 * @typedef {Object} Company
 * @property {string} id - Identificador único da empresa
 * @property {string} name - Nome da empresa
 * @property {CompanyStatus} status - Status da empresa
 * @property {string} createdAt - Data de criação (ISO string)
 * @property {string} [updatedAt] - Data de atualização (ISO string, opcional)
 */

/**
 * Função para criar um novo objeto Company
 * @param {Object} data
 * @param {string} data.name
 * @param {CompanyStatus} data.status
 * @returns {Company}
 */
export function createCompanyModel({ name, status }) {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    status,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
}
