export interface Company {
  id: number
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
  city_id: number
  state_id: number
  zip_code: number
  latitude: number
  longitude: number
  created_at: Date
  updated_at?: Date
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
  national_registry?: string
  name?: string
  fantasy?: string
  state_registration?: string
  municipal_registration?: string
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

export interface CompanySearchData {
  id?: number
  national_registry?: string
  name?: string
  fantasy?: string
  state_registration?: string
  municipal_registration?: string
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
  latitude?: number
  longitude?: number
  created_at?: Date
}
