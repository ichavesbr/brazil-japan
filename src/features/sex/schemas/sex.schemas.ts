export interface Sex {
  id: number
  description: string
  created_at: Date
  updated_at?: Date
}
export interface SexInput {
  description: string
}
export interface SexSearch {
  id?: number
  description?: string
}
