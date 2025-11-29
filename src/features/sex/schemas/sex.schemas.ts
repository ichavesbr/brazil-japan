export interface Sex {
  id: number
  state_id: number
  description: string
  created_at: Date
  updated_at?: Date
}

export interface SexInputData {
  description: string
}

export interface SexUpdateData {
  description?: string
  updated_at: Date
}

export interface SexSearchData {
  id?: number
  description?: string
  created_at?: Date
}
