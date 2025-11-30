export interface ProductPhoto {
  id: number
  product_id: number
  photo: string
  created_at: Date
  updated_at?: Date
}

export interface ProductPhotoInputData {
  photo: string
}

export interface ProductPhotoUpdateData {
  description?: string
  updated_at: Date
}

export interface ProductPhotoSearchData {
  id?: number
  product_id?: number
  photo?: string
  created_at?: Date
}
