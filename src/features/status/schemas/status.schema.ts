export interface Status {
  id: number
  description: string
  created_at: Date
  updated_at?: Date
}
export interface StatusInput {
  description: string
}
export interface StatusSearch {
  id?: number
  description?: string
}
