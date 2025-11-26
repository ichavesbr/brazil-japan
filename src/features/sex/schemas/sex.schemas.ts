export interface Sex {
  id: string
  description: string
  created_at: string
  updated_at?: string | null
}

export interface SexInputData {
  description: string
}

export interface SexUpdateData {
  description: string
}

export interface SexSearchData {
  id: string
  description: string
  created_at: string
  updated_at?: string | null
}
