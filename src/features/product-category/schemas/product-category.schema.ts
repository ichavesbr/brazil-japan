export interface ProductCategory {
  id: number
  state_id: number
  description: string
  status_id: number
  created_at: Date
  updated_at?: Date
}

export interface ProductCategoryInputData {
  description: string
}

export interface ProductCategoryUpdateData {
  description?: string
  status_id?: number
  updatated_at: Date
}

export interface ProductCategorySearchData {
  id?: number
  description?: string
  status_id?: number
  created_at?: Date
}
