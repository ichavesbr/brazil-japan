export interface Sex {
  id: string
  description: string
  createdAt: Date
  updatedAt?: Date | null
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
  createdAt: Date
  updatedAt?: Date | null
}
