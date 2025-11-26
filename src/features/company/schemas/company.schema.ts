export interface Company {
  id: string
  national_registry: string
  name: string
  fantasy: string
  state_registration: string
  municipal_registration: string
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
  latitude: number
  longitude: number
  createdAt: string
  updatedAt?: string | null
}

export interface CompanyInputData {
  national_registry: string
  name: string
  fantasy: string
  state_registration: string
  municipal_registration: string
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  zip_code: number
}

export interface CompanyUpdateData {
  national_registry: string
  name: string
  fantasy: string
  state_registration: string
  municipal_registration: string
  phone: number
  whatsapp: number
  email: string
  endress: string
  number: number
  complement: string
  district: string
  zip_code: number
}

export interface CompanySearchData {
  id: string
  national_registry: string
  name: string
  fantasy: string
  state_registration: string
  municipal_registration: string
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
  latitude: number
  longitude: number
  createdAt: string
  updatedAt?: string | null
}
