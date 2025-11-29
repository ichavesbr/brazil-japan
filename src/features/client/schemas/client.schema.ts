export interface Client {
  id: number
  document_cpf: number
  name: string
  date_of_birth: number
  sexo_id: number
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  city_id: number
  state_id: number
  zip_code: number
  status_id: number
  created_at: Date
  updated_at?: Date
}

export interface ClientInputData {
  document_cpf: number
  name: string
  date_of_birth: number
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  zip_code: number
}

export interface ClientUpdateData {
  document_cpf?: number
  name?: string
  date_of_birth?: number
  phone?: number
  whatsapp?: number
  email?: string
  endress?: string
  number?: number
  complement?: string
  district?: string
  zip_code?: number
  updated_at: Date
}

export interface ClientSearchData {
  id?: number
  document_cpf?: number
  name?: string
  date_of_birth?: number
  sexo_id?: number
  phone?: number
  whatsapp?: number
  email?: string
  endress?: string
  number?: number
  complement?: string
  district?: string
  city_id?: number
  state_id?: number
  zip_code?: number
  status_id?: number
  created_at?: Date
}
