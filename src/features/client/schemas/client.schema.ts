export interface Client {
  id: string
  document_cpf: number
  name: string
  date_of_birth: number
  sexo_id: string
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  city_id: string
  state_id: string
  zip_code: number
  status_id: string
  created_at: string
  updated_at?: string | null
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

export interface ClientSearchData {
  id: string
  document_cpf: number
  name: string
  date_of_birth: number
  sexo_id: string
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  city_id: string
  state_id: string
  zip_code: number
  status_id: string
  created_at: string
  updated_at?: string | null
}
