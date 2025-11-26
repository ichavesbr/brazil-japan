export interface ProductFabricator {
  id: string
  description: string
  status_id: string
  created_at: string
  updated_at?: string | null
}

export interface ProductFabricatorInputData {
  description: string
  status_id: string
}

export interface ProductFabricatorUpdateData {
  description: string
  status_id: string
}

export interface ProductFabricatorSearchData {
  id: string
  description: string
  status_id: string
  created_at: string
  updated_at?: string | null
}
