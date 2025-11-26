export interface ProductCategory {
  id: string
  description: string
  status_id: string
  created_at: string
  updated_at?: string | null
}

export interface ProductCategoryInputData {
  description: string
  status_id: string
}

export interface ProductCategoryUpdateData {
  description: string
  status_id: string
}

export interface ProductCategorySearchData {
  id: string
  description: string
  status_id: string
  created_at: string
  updated_at?: string | null
}
