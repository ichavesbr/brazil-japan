export interface Product {
  id: number
  status_id: number
  category_id: number
  type_unit_id: number
  fabricator_id: number
  description: string
  quantity_stock: number
  price_unitary: number
  created_at: Date
  updated_at?: Date
}

export interface ProductInputData {
  description: string
  quantity_stock: number
  price_unitary: number
}
export interface ProductUpdateData {
  description?: string
  quantity_stock?: number
  price_unitary?: number
  updated_at?: Date
}

export interface ProductSearchData {
  id?: number
  category_id?: number
  type_unit_id?: number
  fabricator_id?: number
  description?: string
  quantity_stock?: number
  price_unitary?: number
  created_at?: Date
}
