"use client";

import { useState, useEffect } from "react";
import {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../services/companyStorage";
import { formatCompanyList } from "../utils/formatCompany";

/**
 * Hook para gerenciar empresas na SPA
 */
export function useCompany() {
  const [companies, setCompanies] = useState([]);

  // Inicializa com os dados formatados
  useEffect(() => {
    setCompanies(formatCompanyList(getCompanies()));
  }, []);

  /**
   * Cria uma nova empresa
   * @param {Object} data { name, status }
   */
  function addCompany(data) {
    createCompany(data);
    setCompanies(formatCompanyList(getCompanies()));
  }

  /**
   * Atualiza uma empresa existente
   * @param {string} id
   * @param {Object} data
   */
  function editCompany(id, data) {
    updateCompany(id, data);
    setCompanies(formatCompanyList(getCompanies()));
  }

  /**
   * Remove uma empresa
   * @param {string} id
   */
  function removeCompany(id) {
    deleteCompany(id);
    setCompanies(formatCompanyList(getCompanies()));
  }

  /**
   * Busca uma empresa por ID
   * @param {string} id
   * @returns Empresa ou null
   */
  function getCompany(id) {
    const company = getCompanies().find((c) => c.id === id);
    return company ? formatCompanyList([company])[0] : null;
  }

  return {
    companies,
    addCompany,
    editCompany,
    removeCompany,
    getCompany,
  };
}
