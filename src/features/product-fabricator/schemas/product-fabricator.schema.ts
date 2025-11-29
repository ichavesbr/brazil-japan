export interface ProductFabricator {
  id: number
  status_id: number
  description: string
  created_at: Date
  updated_at?: Date
}

export interface ProductFabricatorInputData {
  description: string
}

export interface ProductFabricatorUpdateData {
  description?: string
  updated_at: Date
}

export interface ProductFabricatorSearchData {
  id?: number
  description?: string
  created_at?: Date
}
