export interface ProductTypeUnit {
  id: number
  state_id: number
  description: string
  created_at: Date
  updated_at?: Date
}

export interface ProductTypeUnitInputData {
  description: string
}

export interface ProductTypeUnityUpdateData {
  description?: string
  updated_at: Date
}

export interface ProductTypeUnitySearchData {
  id?: number
  description?: string
  created_at?: Date
}
