export const PRODUTO_STATUS = {
  DISPONIVEL: 'DISPONIVEL',
  INDISPONIVEL: 'INDISPONIVEL',
  EM_FALTA: 'EM_FALTA',
}

export type ProdutoStatus = (typeof PRODUTO_STATUS)[keyof typeof PRODUTO_STATUS]
