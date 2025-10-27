export const CLIENTE_STATUS = {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  BLOQUEADO: 'BLOQUEADO',
}

export type ClienteStatus = (typeof CLIENTE_STATUS)[keyof typeof CLIENTE_STATUS]
